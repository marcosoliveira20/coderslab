import { IChallengeDTO } from "../interfaces/IChallengeDTO";
import { IchallengeRepository } from "../interfaces/IchallengeRepository";

import ChallengeSchema from "../database/Schema/ChallengeSchema"

class Challenge implements IchallengeRepository {
  create({ content_id, title, description, is_done }: IChallengeDTO): object {
    const challenge = ChallengeSchema.create({ content_id, title, description, is_done});

    return challenge;
  }

  turnChallengeDone(_id: String): object {
    const challenge = ChallengeSchema.findByIdAndUpdate(
      {_id},
      {is_done: true},
      {new: true}
    );

    return challenge;
  }

  turnChallengeNotDone(_id: String): object {
    const challenge = ChallengeSchema.findByIdAndUpdate(
      {_id},
      {is_done: false},
      {new: true}
    );

    return challenge;
  }

  updateTitle(_id: String, title: String): object {
    const challenge = ChallengeSchema.findByIdAndUpdate(
      {_id},
      {title},
      {new: true}
    );

    return challenge;
  }

  updateDescription(_id: String, description: String): object {
    const challenge = ChallengeSchema.findByIdAndUpdate(
      {_id},
      {description},
      {new: true}
    );

    return challenge;
  }

  readAll(): object {
    const challenge = ChallengeSchema.find();

    return challenge;
  }

  readById(_id: string): object {
    const challenge = ChallengeSchema.findById({_id});

    return challenge;
  }

  readByTitle(title: string): object {
    const challenge = ChallengeSchema.findOne({title});

    return challenge;
  }

  readAllDoneChallenges(): object {
    const challenge = ChallengeSchema.find({is_done: true});

    return challenge;
  }

  readAllInProgressChallenges(): object {
    const challenge = ChallengeSchema.find({is_done: false});

    return challenge;
  }

  update(id: String): object {
    const challenge = ChallengeSchema.findByIdAndUpdate(id);

    return challenge;
  }

  delete(_id: string): object {
    const challenge = ChallengeSchema.findByIdAndDelete(_id);

    return challenge;
  }
}

export { Challenge };
