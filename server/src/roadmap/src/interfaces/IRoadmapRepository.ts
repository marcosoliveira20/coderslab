import { IRoadmapDTO } from "./IRoadmapDTO";

interface IRoadmapRepository {
  createDefault({ name, objective, is_default, is_done, level, quantity_contents, quantity_of_challenge, user_id }: IRoadmapDTO): Promise<IRoadmapDTO>;
  createCustom({ name, objective, is_default, is_done, level, quantity_contents, quantity_of_challenge, user_id }: IRoadmapDTO): Promise<IRoadmapDTO>;
  turnRoadmapCustomized(_id: String): object
  turnRoadmapDefault(_id: String): object
  turnRoadmapDone(_id: String): object
  turnRoadmapNotDone(_id: String): object
  updateName(_id: String, name: String): object
  updateObjective(_id: String, objective: String): object
  updateContent_list(_id: String, content_list: String): object
  updateLevel(_id: String, level: Number): object
  updateQuantityOfContents(_id: String, quantity: Number): object
  updateQuantityOfChallenges(_id: String, quantity_challenges: Number): object
  readById(_id: string): object;
  readByName(name: string): object;
  readAllDefaultRepositories(): object;
  readAllDefaultRepositoriesByUserId(user_id: String)
  readAllCustomRepositories(user_id: String): object;
  readAllDoneRepositories(user_id: String): object;
  readAllInProgressRepositories(user_id: String): object;
  readLateContents(_roadmap_id: String, today: String): object;
  readAll(user_id: String): object;
  update(id: String): object;
  delete(_id: string): object;
  UpdateContentListByRoadmapId(_roadmap_id: String, content_list: String): object
}

export { IRoadmapRepository };
