import { hash, compare } from "bcrypt";
import { Request, Response } from "express";

import { User } from "../model/User";
import Api from "../../../Api";

class LoginUserController {
  async handle(request: Request, response: Response) {
    const {
      username,
      password
    } = request.body;

    const user = new User();
    
    try {
      let data = await user.readByUsername(username);
  
      if (!data) {
        return response.status(404).send();
      } 
      
      const comparePassword = await compare(password, data.password);

      if(!comparePassword) {
        return response.status(404).send();
      }

      data.token = "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkJydW5vIiwiaWF0IjoxNTE2MjM5MDIyfQ.YDN0wJHLzyzmqdwycv4wgh-RMBwQR4C_0uehWmo_77ZrAB46YnPYmzJJ2Lb36GyyDXDwRP9Bt759hcVmUiGWEg";

      const api = new Api();

      try {
        const interest_list = await api.interests.get(`/read/byUserId/${data._id}`);
        data.interest_list = interest_list.data;

      } catch(err) {
        return response.status(err.response.status).send();
      }

      return response.status(200).send(data);
    } catch(err) {
      console.log(err.message);
      return response.status(400).send();
    }
  }
}

export { LoginUserController };
