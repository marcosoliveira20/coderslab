import { IContentSchemaDTO } from "./IContentSchemaDTO";

interface IContentRepository {
  create({ title, description, reference, challenge, deadline, is_done, _roadmap_id }: IContentSchemaDTO): object;
  turnContentDone(_id: String): object
  turnContentNotDone(_id: String): object
  updateTitle(_id: String, title: String): object
  updateDescription(_id: String, description: String): object
  updateDeadline(_id: String, deadline: String): object
  updateReference(_id: String, reference: String): object
  updateChallenge(_id: String, challenge: String): object
  readAll(): IContentSchemaDTO;
  readById(_id: string): IContentSchemaDTO;
  readByRoadmapId(_roadmap_id: string): IContentSchemaDTO;
  readByTitle(title: string): IContentSchemaDTO;
  readAllDoneRepositories(): object;
  readAllInProgressRepositories(): object;
  readLateContents(_roadmap_id: String, today: String): object;

  update(id: String): object;
  delete(_id: string): object;
  deleteByRoadmapId(_roadmap_id: String): object
}

export { IContentRepository };
