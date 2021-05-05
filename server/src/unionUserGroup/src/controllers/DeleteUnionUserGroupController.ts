import { Request, Response } from "express";

import { UnionUserGroup } from "../model/UnionUserGroup";

class DeleteUnionUserGroupController {
    async handle(request: Request, response: Response) {
        const {
            idUser,
            idGroup
        } = request.params;

        const union = new UnionUserGroup();

        try {
            const data = await union.read({
                _id_user: idUser,
                _id_group: idGroup
            });

            if(!data) {
                return response.status(404).send("User is not already in the group");
            }

            await union.delete({
                _id_user: idUser,
                _id_group: idGroup
            });

            return response.status(204).send();
        } catch(err) {
            console.log(err.message);
            return response.status(400).send("Bad Request");
        }
    }
}

export { DeleteUnionUserGroupController };