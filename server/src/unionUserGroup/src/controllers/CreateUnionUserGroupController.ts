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
                return response.status(403).send("User is already in the group");
            }

            await union.create({
                _id_user,
                _id_group
            });

            return response.status(201).send("User entered in the group");
        } catch(err) {
            console.log(err.message);
            return response.status(400).send("Bad Request");
        }

    }
}

export { CreateUnionUserGroupController };