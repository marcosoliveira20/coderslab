import { Request, Response } from "express";

import Api from "../../../Api";
import { Interests } from "../model/Interests";

class ReadInterestByUserIdController {
    async handle(request: Request, response: Response) {
        const { idUser } = request.params;

        const interests = new Interests();

        try {

            const data = await interests.readByUserId(idUser);
            const api = new Api();
            let interest = null;

            try {

                for(let i = 0; i < data.length; i++) {
                    const subject = await api.subject.get(
                        `/read/byId/${data[i]._id_subject}`
                    );

                    interest = {
                        _id: data[i]._id,
                        _id_user: data[i]._id_user,
                        subject: subject.data,
                        level: data[i].level,
                    };
                }

            } catch (err) {
                return response.status(err.response.status).send();
            }

            return response.status(200).send(interest);
        } catch (err) {
            console.log(err.message);
            return response.status(400).send();
        }
    }
}

export { ReadInterestByUserIdController };
