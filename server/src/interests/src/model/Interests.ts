import { IAllInterestsDTO, IIdInterestDTO, IIdLevelInterestDTO } from "../interfaces/IInterestsDTO";
import { IInterestsRepository } from "../interfaces/IInterestsRepository";

const interests = [];

class Interests implements IInterestsRepository {
    create({
        id,
        subject_label,
        level
    }: IAllInterestsDTO): { message: string; status: number } {

        const interestAlreadyExists = interests.findIndex(i => i.id === id);

        if (interestAlreadyExists >= 0) {
            return { message: "Interest already exists", status: 403 };
        }

        //o id vai ser gerado pelo banco futuramente
        interests.push({
            id,
            subject_label,
            level
        });

        return { message: "Interest created", status: 200 };
    }

    readById({
        id
    }: IIdInterestDTO): { data: object, message: string; status: number } {

        const interestAlreadyExists = interests.find(i => i.id === id);

        if (!interestAlreadyExists) {
            return { data: {}, message: "Interest does not exist", status: 404 };
        }

        return { data: interestAlreadyExists, message: "Interest exists", status: 201 };
    }

    readAll(): { data: Array<object>, message: string; status: number } {
        if (interests.length === 0) {
            return { data: interests, message: "Interests are empty", status: 201 };
        }

        return { data: interests, message: "Interests list", status: 201 };
    }

    update({
        id,
        level
    }: IIdLevelInterestDTO): { data: object, message: string; status: number } {

        const interestAlreadyExists = interests.find(i => i.id === id);

        if (!interestAlreadyExists) {
            return { data: {}, message: "Interest does not exist", status: 404 };
        }

        interestAlreadyExists.level = level;

        return { data: interestAlreadyExists, message: "Interest updated", status: 201 };
    }

    delete({
        id
    }: IIdInterestDTO): { message: string; status: number } {

        const interestAlreadyExists = interests.findIndex(i => i.id === id);


        if (interestAlreadyExists === -1) {
            return { message: "Interest does not exist", status: 404 };
        }

        interests.splice(interestAlreadyExists, 1);

        return { message: "Interest deleted", status: 200 };
    }
}

export { Interests };
