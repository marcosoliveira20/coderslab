import InterestsSchema from "../database/Schemas/InterestsSchema";
import { IInterestsDTO } from "../interfaces/IInterestsDTO";
import { IInterestsRepository } from "../interfaces/IInterestsRepository";

class Interests implements IInterestsRepository {
    create({
        _id_user,
        _id_subject,
        level
    }: IInterestsDTO): Promise<IInterestsDTO> {
        return InterestsSchema.create({
            _id_user,
            _id_subject,
            level
        });
    }

  readById(_id: string): Promise<IInterestsDTO> {
    return InterestsSchema.findOne({ _id });
  }

  readByUserId(_id_user: string): Promise<Array<IInterestsDTO>> {
    return InterestsSchema.find({ _id_user }).sort({ subject_label: 1 });
  }

  readByUserAndSubject(_id_user: string, _id_subject: string): Promise<IInterestsDTO> {
    return InterestsSchema.findOne({ _id_user, _id_subject });
  }

  readBySubject(_id_subject: string): Promise<IInterestsDTO> {
    return InterestsSchema.findOne({ _id_subject });
  }

  readAll(): Promise<Array<IInterestsDTO>> {
    return InterestsSchema.find().sort({ subject_label: 1 });
  }

  update(
    _id: string,
    { _id_user, _id_subject, level }: IInterestsDTO
  ): Promise<IInterestsDTO> {
    return InterestsSchema.findByIdAndUpdate(
      _id,
      {
        _id_user,
        _id_subject,
        level,
      },
      { new: true }
    );
  }

  delete(_id: string): void {
    return InterestsSchema.deleteOne({ _id });
  }

  deleteByUserId(_id_user: string): void {
    return InterestsSchema.deleteMany({ _id_user });
  }
}

export { Interests };
