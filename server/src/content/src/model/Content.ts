import { IContentSchemaDTO } from "../interfaces/IContentSchemaDTO";
import { IContentRepository } from "../interfaces/IContentRepository";

import ContentSchema from "../database/Schema/ContentSchema"


class Content implements IContentRepository {
  create({ title, description, reference, challenge, deadline, is_done, _roadmap_id }: IContentSchemaDTO): object {
    const content = ContentSchema.create({ title, description, reference, challenge, deadline, is_done, _roadmap_id});

    return content;
  }

  turnContentDone(_id: String): object {
    const content = ContentSchema.findByIdAndUpdate(
      {_id},
      {is_done: true},
      {new: true}
    );

    return content;
  }

  turnContentNotDone(_id: String): object {
    const content = ContentSchema.findByIdAndUpdate(
      {_id},
      {is_done: false},
      {new: true}
    );

    return content;
  }

  updateTitle(_id: String, title: String): object {
    const content = ContentSchema.findByIdAndUpdate(
      {_id},
      {title},
      {new: true}
    );

    return content;
  }

  updateDescription(_id: String, description: String): object {
    const content = ContentSchema.findByIdAndUpdate(
      {_id},
      {description},
      {new: true}
    );

    return content;
  }

  updateDeadline(_id: String, deadline: String): object {
    const content = ContentSchema.findByIdAndUpdate(
      {_id},
      {deadline},
      {new: true}
    );

    return content;
  }

  updateReference(_id: String, reference: String): object {
    const content = ContentSchema.findByIdAndUpdate(
      {_id},
      {reference},
      {new: true}
    );

    return content;
  }

  updateChallenge(_id: String, challenge: String): object {
    const content = ContentSchema.findByIdAndUpdate(
      {_id},
      {challenge},
      {new: true}
    );

    return content;
  }

  readAll(): IContentSchemaDTO {
    const content = ContentSchema.find();

    return content;
  }

  readById(_id: string): IContentSchemaDTO {
    const content = ContentSchema.findById({_id});

    return content;
  }

  readByRoadmapId(_roadmap_id: String): IContentSchemaDTO {
    const content = ContentSchema.find({_roadmap_id});

    return content;
  }

  readByTitle(title: string): IContentSchemaDTO {
    const content = ContentSchema.find({title});

    return content;
  }

  readAllDoneRepositories(): object {
    const content = ContentSchema.find({is_done: true});

    return content;
  }

  readByRoadmapDeadlineContents(_roadmap_id: String, roadmap_deadline: String): object {
    let content = ContentSchema.find({
      _roadmap_id,
      deadline: {$gte: roadmap_deadline}
    });

    console.log(content)

    return content;
  }

  readLateContents(_roadmap_id: String, today: String): object {
    const content = ContentSchema.find({
      _roadmap_id,
      deadline: {$lte: today}
    });

    return content;
  }

  readAllInProgressRepositories(): object {
    const content = ContentSchema.find({is_done: false});

    return content;
  }

  update(id: String): object {
    const content = ContentSchema.findByIdAndUpdate(id);

    return content;
  }

  delete(_id: string): object {
    const content = ContentSchema.findByIdAndDelete(_id);

    return content;
  }

  deleteByRoadmapId(_roadmap_id: String): object {
    const content = ContentSchema.deleteMany({_roadmap_id});

    return content;
  }
}

export { Content };