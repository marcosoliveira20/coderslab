import { Request, Response } from "express";

import { Group } from "../model/Group";

class ReadGroupBySearchController {
	async handle(request: Request, response: Response) {
		const { 
            name,
            subject_label,
            category,
            level,
            is_alphabetical
        } = request.body;

		const group = new Group();

        let order: number;
        if(is_alphabetical) {
            order = 1;
        } else {
            order = -1;
        }

        let search: {
            name?: {
                "$regex": string
            },
            subject_label?: string,
            category?: string,
            level?: number,
            is_public: boolean
        };

        search = { ...search, is_public: true };

        if(name !== "") {
            search = { ...search, name: { $regex: name } };
        } if(subject_label !== "") {
            search = { ...search, subject_label: subject_label };
        } if(category !== "") {
            search = { ...search, category: category };
        } if(level > -1 && level < 4) {
            search = { ...search, level: level};
        }

		try {
			const data = await group.readBySearch(search, order);
            
            response.status(200).send(data);
        } catch(err) {
            console.log(err.message);
            return response.status(400).send();
        }

	}
}

export { ReadGroupBySearchController };