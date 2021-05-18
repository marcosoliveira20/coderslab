import { Request, Response } from "express";

import { User } from "../model/User";
import Api from "../../../Api";

class UpdateUserController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    
    const {
      username,
      name,
      last_name,
      email,
      discord_id,
      github_id,
      password,
      interest_list
    } = request.body;

    const user = new User();

    try {
      const findIndex = await user.readById(id);

      if(!findIndex) {
        return response.status(404).send();
      }

      const data = await user.update(id, {
        username,
        name,
        last_name,
        email,
        discord_id,
        github_id,
        password,
      });
      
      const api = new Api();

      try {
        // if(interest_list.length == 0) {
        //   await api.interests.delete(`/delete/byUserId/${id}`);
        //   return response.status(200).send(data);
        // } else {
        //   for(let i = 0; i < interest_list.length; i++) {
            // const interest = await api.interests.get(`/read/byId/${interest_list[i]._id}`);
            // let aux;

            // if(interest_list[i]._id) {
            //   console.log("cima");
            //   aux = await api.interests.put(`/update/${interest_list[i]._id}`, interest_list[i]);
            // } else {
            //   console.log("baixo");

            //   aux = await api.interests.post("/create", interest_list[i]);
            // }

            // interest_list[i] = aux.data;

            // console.log("Saiu");
          // }
        // }
        await api.interests.delete(`/delete/byUserId/${id}`);

        if(interest_list.length == 0) {
          return response.status(200).send(data);
        } else {
          for(let i = 0; i < interest_list.length; i++) {
            const interest = await api.interests.post("/create", interest_list[i]);
            interest_list[i] = interest.data;
          }
        }
      } catch(err) {
        return response.status(err.response.status).send();
      }

      data.interest_list = interest_list;

      return response.status(200).send(data);
    } catch (err) {
      console.log(err.message);
      return response.status(400).send();
    }
  }
}

export { UpdateUserController };
