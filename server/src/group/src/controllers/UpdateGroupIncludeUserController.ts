import { Request, Response } from "express";

import { Group } from "../model/Group";
import { IGroupDTO } from "../interfaces/IGroupDTO";

class UpdateGroupIncludeUserController {
	async handle(request: Request, response: Response) {
		const { id, idUser } = request.params;

		const group = new Group();

		try {
			const findIndex = await group.readById(id);
			
			if(!findIndex) {
				return response.status(404).send("Group does not exist");
			}

            let newfindIndex = <IGroupDTO> findIndex;
            let user = newfindIndex._user_list.find(u => u == idUser);

            if(user) {
                return response.status(406).send("User is already in the group");
            }

            newfindIndex._user_list.push(idUser);
			const data = await group.update(id, newfindIndex);

			response.status(200).send(data);
		} catch(err) {
			console.log(err.message);
			return response.status(400).send("Bad Request");
		}
	}
}

export { UpdateGroupIncludeUserController };