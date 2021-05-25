import { Request, Response } from "express";

import { UnionUserGroup } from "../model/UnionUserGroup";

class DeleteUnionUserAllGroupController {
    async handle(request: Request, response: Response) {
        const {
            idGroup
        } = request.params;

        const union = new UnionUserGroup();

        try {
            await union.deleteAllGroup(idGroup);

            return response.status(204).send();
        } catch(err) {
            console.log(err.message);
            return response.status(400).send();
        }
    }
}

export { DeleteUnionUserAllGroupController };