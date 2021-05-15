import { hash } from "bcrypt";
import { Request, Response } from "express";

import { User } from "../model/User";
import Api from "../../../Api";

class CreateUserController {
  async handle(request: Request, response: Response) {
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
      const findUsername = await user.readByUsername(username);
      const findEmail = await user.readByEmail(email);
  
      if (findUsername || findEmail) {
        return response.status(403).send();
      }
  
      const passwordHash = await hash(password, 8);

      let data = await user.create({
        username,
        name,
        last_name,
        email,
        discord_id,
        github_id,
        password: passwordHash,
      });

      data.token = "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkJydW5vIiwiaWF0IjoxNTE2MjM5MDIyfQ.YDN0wJHLzyzmqdwycv4wgh-RMBwQR4C_0uehWmo_77ZrAB46YnPYmzJJ2Lb36GyyDXDwRP9Bt759hcVmUiGWEg";

      const api = new Api();

      if(interest_list.length == 0) {
        data.interest_list = [];
        return response.status(201).send(data);
      }

      try {
        for(let i = 0; i < interest_list.length; i++) {
          interest_list[i]._id_user = data._id;
          await api.interests.post("/interest/create", interest_list[i]);
        }
      } catch(err) {
        await api.interests.delete(`/interest/delete/byUserId/${data._id}`);
        await api.user.delete(`/user/delete/${data._id}`);
        return response.status(err.response.status).send();
      }

      data.interest_list = interest_list;
      
      return response.status(201).send(data);

    } catch(err) {
      console.log(err.message);
      return response.status(409).send();
    }
  }
}

export { CreateUserController };
