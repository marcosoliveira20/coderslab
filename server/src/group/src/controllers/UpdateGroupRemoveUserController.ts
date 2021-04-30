import { Request, Response } from "express";

import { IGroupDTO } from "../interfaces/IGroupDTO";
import { Group } from "../model/Group";

class UpdateGroupRemoveUserController {
	async handle(request: Request, response: Response) {
		const { id, idUser } = request.params;

		const group = new Group();

		try {
			const findIndex = await group.readById(id);
			
			if(!findIndex) {
				return response.status(404).send("Group does not exist");
			}

            let newfindIndex = <IGroupDTO> findIndex;
            let userIndex = newfindIndex._user_list.findIndex(u => u == idUser);

            if(userIndex === -1) {
                return response.status(404).send("User does not exist");
            }

            newfindIndex._user_list.splice(userIndex, 1);
			const data = await group.update(id, newfindIndex);

			response.status(200).send(data);
		} catch(err) {
			console.log(err.message);
			return response.status(400).send("Bad Request");
		}
	}
}

export { UpdateGroupRemoveUserController };