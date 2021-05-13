import { ISubjecDTO } from "./ISubjectDTO";

interface ISubjectRepository {
  create(label: string, categories: Array<string>): Promise<void>;
  readById(id: string): Promise<ISubjecDTO>;
  readByLabel(label: string): Promise<ISubjecDTO>;
  readAll(): Promise<Array<ISubjecDTO>>;
  update(id: string, categories: Array<string>): Promise<ISubjecDTO>;
  delete(id: string): Promise<void>;
}

export { ISubjectRepository };
