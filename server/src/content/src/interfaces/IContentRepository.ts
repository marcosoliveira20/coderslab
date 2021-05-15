import { IContentSchemaDTO } from "./IContentSchemaDTO";

interface IContentRepository {
  create({ title, description, reference, challenge, deadline, is_done }: IContentSchemaDTO): object;
  turnContentDone(_id: String): object
  turnContentNotDone(_id: String): object
  updateTitle(_id: String, title: String): object
  updateDescription(_id: String, description: String): object
  updateDeadline(_id: String, deadline: String): object
  updateReference(_id: String, reference: String): object
  readAll(): object;
  readById(_id: string): object;
  readByTitle(title: string): object;
  readAllDoneRepositories(): object;
  readAllInProgressRepositories(): object;

  update(id: String): object;
  delete(_id: string): object;
}

export { IContentRepository };
