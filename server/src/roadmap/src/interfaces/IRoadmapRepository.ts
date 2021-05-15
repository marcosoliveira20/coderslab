import { IRoadmapDTO } from "./IRoadmapDTO";

interface IRoadmapRepository {
  createDefault({ content_list, name, objective, is_default, is_done, level }: IRoadmapDTO): object;
  createCustomized(data: IRoadmapDTO): object;
  turnRoadmapCustomized(_id: String): object
  turnRoadmapDefault(_id: String): object
  turnRoadmapDone(_id: String): object
  turnRoadmapNotDone(_id: String): object
  updateName(_id: String, name: String): object
  updateObjective(_id: String, objective: String): object
  updateContent_list(_id: String, content_list: String): object
  readById(_id: string): object;
  readByName(name: string): object;
  readAllDefaultRepositories(): object;
  readAllCustomRepositories(): object;
  readAllDoneRepositories(): object;
  readAllInProgressRepositories(): object;
  readAll(): object;
  update(id: String): object;
  delete(_id: string): object;
}

export { IRoadmapRepository };
