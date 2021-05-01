import { IContentSchemaDTO } from "../interfaces/IContentSchemaDTO";
import { IContentRepository } from "../interfaces/IContentRepository";

import ContentSchema from "../database/Schema/ContentSchema"


class Content implements IContentRepository {
  create({ title, description, reference, challange, deadline, is_done }: IContentSchemaDTO): object {
    const content = ContentSchema.create({ title, description, reference, challange, deadline, is_done});

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

  readAll(): object {
    const content = ContentSchema.find();

    return content;
  }

  readById(_id: string): object {
    const content = ContentSchema.findById({_id});

    return content;
  }

  readByTitle(title: string): object {
    const content = ContentSchema.findOne({title});

    return content;
  }

  readAllDoneRepositories(): object {
    const content = ContentSchema.find({is_done: true});

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
}

export { Content };
