import { IInterestsDTO } from "../interfaces/IInterestsDTO";
import { IInterestsRepository } from "../interfaces/IInterestsRepository";
import InterestsSchema from "../database/Schemas/InterestsSchema";

class Interests implements IInterestsRepository {
    create({
        subject_label,
        level
    }: IInterestsDTO): void {
        InterestsSchema.create({
            subject_label,
            level
        });
    }

    readById(_id: string): Promise<IInterestsDTO> {
        return InterestsSchema.findOne({ _id });
    }

    readBySubject(subject_label: string): Promise<IInterestsDTO> {
        return InterestsSchema.findOne({ subject_label });
    }

    readAll(): Promise<Array<IInterestsDTO>> {
        return InterestsSchema.find().sort({ subject_label: 1 });
    }

    update(_id: string, {
        subject_label,
        level
    }: IInterestsDTO): Promise<IInterestsDTO> {
        return InterestsSchema.findByIdAndUpdate(_id, {
            subject_label,
            level
        }, {new: true});
    }

    delete(_id: string): void {
        InterestsSchema.deleteOne({ _id });
    }
}

export { Interests };
