import { IChallengeDTO } from "./IChallengeDTO";

interface IChallangeRepository {
  create({ title, description, is_done }: IChallengeDTO): object;
  turnChallengeDone(_id: String): object
  turnChallengeNotDone(_id: String): object
  updateTitle(_id: String, title: String): object
  updateDescription(_id: String, description: String): object
  readAll(): object;
  readById(_id: string): object;
  readByTitle(title: string): object;
  readAllDoneChallenges(): object;
  readAllInProgressChallenges(): object;

  update(id: String): object;
  delete(_id: string): object;
}

export { IChallangeRepository };
