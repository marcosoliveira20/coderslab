import { IInterestsDTO } from "../interfaces/IInterestsDTO";
import { IInterestsRepository } from "../interfaces/IInterestsRepository";
import InterestsSchema from "../database/Schemas/InterestsSchema";

class Interests implements IInterestsRepository {
    async create({
        subject_label,
        level
    }: IInterestsDTO): Promise<object> {
        return await InterestsSchema.create({
            subject_label,
            level
        });
    }

    async readById(_id: string): Promise<object> {
        return await InterestsSchema.findOne({ _id });
    }

    async readBySubject(subject_label: string): Promise<object> {
        return await InterestsSchema.findOne({ subject_label });
    }

    async readSubject(_id: string) : Promise<string> {
        let data = await InterestsSchema.findOne({ _id });
        return data.subject_label;
    }

    async readAll(): Promise<object> {
        return await InterestsSchema.find().sort({ subject_label: 1 });
    }

    async update(_id: string, {
        subject_label,
        level
    }: IInterestsDTO): Promise<object> {
        return await InterestsSchema.findByIdAndUpdate(_id, {
            subject_label,
            level
        }, {new: true});
    }

    async delete(_id: string): Promise<object> {
        return await InterestsSchema.deleteOne({ _id });
    }
}

export { Interests };
