import { Request, Response } from "express";

import { Content } from "../model/Content";

class ReadGraphicContentController {
    async handle(request: Request, response: Response) {
        const { _roadmap_id } = request.params;

        const content = new Content();

        try {
            const data = await content.readGraphic(_roadmap_id);
            let graphData = [];
            let quantity: number = 0;
            let completedQuantity: number = 0;
            let date: Date;

            if(data.length !== 0) {
                date = data[0].deadline;
            } else {
                return response.status(200).send(data);
            }

            data.map(content => {
                if (content.deadline > date) {
                    graphData.push({
                        date: date,
                        quantity: quantity,
                        completedQuantity: completedQuantity,
                    });
                    
                    date = content.deadline;
                    quantity = 1;
                    content.deadline >= content.doneDateTime ? 1 : 0;
                } else {
                    quantity++;
                    content.deadline >= content.doneDateTime && completedQuantity++;
                }
            });

            return response.status(200).send(data);
        } catch (err) {
            console.log(err.message);
            return response.status(400).send("Bad Request");
        }
    }
}

export { ReadGraphicContentController };
