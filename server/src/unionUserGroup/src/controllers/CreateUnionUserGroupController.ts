import { Request, Response } from "express";

import { UnionUserGroup } from "../model/UnionUserGroup";

class CreateUnionUserGroupController {
    async handle(request: Request, response: Response) {
        const {
            _id_user,
            _id_group
        } = request.body;

        const union = new UnionUserGroup();

        try {
            const data = await union.read({
                _id_user,
                _id_group
            });

            if(data) {
                return response.status(403).send();
            }

            await union.create({
                _id_user,
                _id_group
            });

            return response.status(201).send();
        } catch(err) {
            console.log(err.message);
            return response.status(400).send();
        }

    }
}

export { CreateUnionUserGroupController };