import { IContentSchemaDTO } from './IContentSchemaDTO';

interface IContentRepository {
  create({
    title,
    description,
    reference,
    challenge,
    deadline,
    is_done,
    _roadmap_id,
  }: IContentSchemaDTO): object;
  turnContentDone(_id: string): object;
  turnContentNotDone(_id: string): object;
  updateTitle(_id: string, title: string): object;
  updateDescription(_id: string, description: string): object;
  updateDeadline(_id: string, deadline: string): object;
  updateReference(_id: string, reference: string): object;
  updateChallenge(_id: string, challenge: string): object;
  readGraphic(_roadmap_id: string): Array<object>;
  readAll(): IContentSchemaDTO;
  readById(_id: string): IContentSchemaDTO;
  readByRoadmapId(_roadmap_id: string): IContentSchemaDTO;
  readByTitle(title: string): IContentSchemaDTO;
  readAllDoneRepositories(): object;
  readAllInProgressRepositories(): object;
  readLateContents(_roadmap_id: string, today: Date): object;
  readByRoadmapDeadlineContents(
    _roadmap_id: string,
    roadmap_deadline: string,
  ): object;
  update(id: string): object;
  delete(_id: string): object;
  deleteByRoadmapId(_roadmap_id: string): object;
  readQuantity(_roadmap_id: string): Object;
  readQuantityInProgress(_roadmap_id: string): Object;
}

export { IContentRepository };
