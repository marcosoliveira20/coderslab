import { ISubjecDTO, ISubjectIdDTO, ISubjectLabelDTO } from "./ISubjectDTO";

interface ISubjectRepository {
  create(data: ISubjecDTO): void; // TODO transformar em ISubjecDTO que não passa id
  readById(id: string): void;
  readByLabel(label: string): void;
  readAll(): void;
  update(data: ISubjecDTO): void;
  delete(id: string): void;
}

export { ISubjectRepository };
