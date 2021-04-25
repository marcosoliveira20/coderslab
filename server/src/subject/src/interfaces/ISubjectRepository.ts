import { ISubjecAlltDTO, ISubjectIdDTO, ISubjectLabelDTO } from "./ISubjectDTO";

interface ISubjectRepository {
  create(data: ISubjecAlltDTO): void; // TODO transformar em ISubjecAlltDTO que não passa id
  readById(data: ISubjectIdDTO): void;
  readByLabel(data: ISubjectLabelDTO): void;
  readAll(): void;
  update(data: ISubjecAlltDTO): void;
  delete(data: ISubjectIdDTO): void;
}

export { ISubjectRepository };
