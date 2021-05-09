import SubjectSchemas from "../database/schemas/SubjectSchema";
import { ISubjecDTO } from "../interfaces/ISubjectDTO";
import { ISubjectRepository } from "../interfaces/ISubjectRepository";

class Subject implements ISubjectRepository {
  create(label: string, categories: Array<string>): Promise<void> {
    return SubjectSchemas.create({
      label,
      categories,
    });
  }

  readById(_id: string): Promise<ISubjecDTO> {
    return SubjectSchemas.findOne({ _id });
  }

  readByLabel(label: string): Promise<ISubjecDTO> {
    return SubjectSchemas.findOne({ label });
  }

  readAll(): Promise<Array<ISubjecDTO>> {
    return SubjectSchemas.find();
  }

  update(_id: string, categories: Array<string>): Promise<ISubjecDTO> {
    return SubjectSchemas.findByIdAndUpdate(_id, { categories }, { new: true });
  }

  delete(_id: string): Promise<void> {
    return SubjectSchemas.deleteOne({ _id });
  }
}

export { Subject };
