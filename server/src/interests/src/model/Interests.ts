import { IInterestsDTO } from "../interfaces/IInterestsDTO";
import { IInterestsRepository } from "../interfaces/IInterestsRepository";

const interests = [];

class Interests implements IInterestsRepository {
    create({
        id,
        subject_label,
        level
    }: IInterestsDTO): { message: string; status: number } {

        const findIndex: number = interests.findIndex(i => i.id === id || i.subject_label === subject_label);

        if (findIndex >= 0) {
            return { message: "Interest already exists", status: 403 };
        }

        //o id vai ser gerado pelo banco futuramente
        interests.push({
            id,
            subject_label,
            level
        });

        return { message: "Interest created", status: 201 };
    }

    readById(id: string): { interest?: IInterestsDTO; message?: string; status: number } {

        const interest = interests.find(i => i.id === id);

        if (!interest) {
            return { message: "Interest does not exist", status: 404 };
        }

        return { interest, status: 200 };
    }

    readAll(): { interests: Array<IInterestsDTO>; status: number } {
        if (interests.length === 0) {
            return { interests, status: 200 };
        }

        return { interests, status: 201 };
    }

    update(subject_label: string, level: string): { interest?: IInterestsDTO; message?: string; status: number } {

        const interest: IInterestsDTO = interests.find(i => i.subject_label === subject_label);

        if (!interest) {
            return { message: "Interest does not exist", status: 404 };
        }

        if (interest.level === level) {
            return { message: "Please, check your current level", status: 403 };
        }

        interest.level = level;

        return { interest, status: 200 };
    }

    delete(id: string): { message?: string; status: number } {

        const findIndex = interests.findIndex(i => i.id === id);

        if (findIndex === -1) {
            return { message: "Interest does not exist", status: 404 };
        }

        interests.splice(findIndex, 1);

        return { status: 204 };
    }
}

export { Interests };
