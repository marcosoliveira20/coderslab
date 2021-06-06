import ContentSchema from '../database/Schema/ContentSchema';
import { IContentRepository } from '../interfaces/IContentRepository';
import { IContentSchemaDTO } from '../interfaces/IContentSchemaDTO';

class Content implements IContentRepository {
  create({
    title,
    description,
    reference,
    challenge,
    deadline,
    is_done,
    _roadmap_id,
  }: IContentSchemaDTO): object {
    const content = ContentSchema.create({
      title,
      description,
      reference,
      challenge,
      deadline,
      is_done,
      _roadmap_id,
    });

    return content;
  }

  turnContentDone(_id: string): object {
    const content = ContentSchema.findByIdAndUpdate(
      { _id },
      { 
        is_done: true, 
        doneDateTime: new Date(new Date().valueOf() - new Date().getTimezoneOffset() * 60000)
      },
      { new: true },
    );

    return content;
  }

  turnContentNotDone(_id: string): object {
    const content = ContentSchema.findByIdAndUpdate(
      { _id },
      { 
        is_done: false,
        doneDateTime: null
      },
      { new: true },
    );

    return content;
  }

  updateTitle(_id: string, title: string): object {
    const content = ContentSchema.findByIdAndUpdate(
      { _id },
      { title },
      { new: true },
    );

    return content;
  }

  updateDescription(_id: string, description: string): object {
    const content = ContentSchema.findByIdAndUpdate(
      { _id },
      { description },
      { new: true },
    );

    return content;
  }

  updateDeadline(_id: string, deadline: string): object {
    const content = ContentSchema.findByIdAndUpdate(
      { _id },
      { deadline },
      { new: true },
    );

    return content;
  }

  updateReference(_id: string, reference: string): object {
    const content = ContentSchema.findByIdAndUpdate(
      { _id },
      { reference },
      { new: true },
    );

    return content;
  }

  updateChallenge(_id: string, challenge: string): object {
    const content = ContentSchema.findByIdAndUpdate(
      { _id },
      { challenge },
      { new: true },
    );

    return content;
  }

  readAll(): IContentSchemaDTO {
    const content = ContentSchema.find();

    return content;
  }

  readById(_id: string): IContentSchemaDTO {
    const content = ContentSchema.findById({ _id });

    return content;
  }

  readByRoadmapId(_roadmap_id: string): IContentSchemaDTO {
    const content = ContentSchema.find({ _roadmap_id });

    return content;
  }

  readByTitle(title: string): IContentSchemaDTO {
    const content = ContentSchema.find({ title });

    return content;
  }

  readAllDoneRepositories(): object {
    const content = ContentSchema.find({ is_done: true });

    return content;
  }

  readByRoadmapDeadlineContents(
    _roadmap_id: string,
    roadmap_deadline: string,
  ): object {
    const content = ContentSchema.find({
      _roadmap_id,
      deadline: { $gte: roadmap_deadline },
    });

    return content;
  }

  readLateContents(_roadmap_id: string, today: Date): object {
    const content = ContentSchema.find({
      _roadmap_id,
      deadline: { $lt: today.toISOString().substring(0, 10) },
    });

    return content;
  }

  readAllInProgressRepositories(): object {
    const content = ContentSchema.find({ is_done: false });

    return content;
  }

  update(id: string): object {
    const content = ContentSchema.findByIdAndUpdate(id);

    return content;
  }

  delete(_id: string): object {
    const content = ContentSchema.findByIdAndDelete(_id);

    return content;
  }

  deleteByRoadmapId(_roadmap_id: string): object {
    const content = ContentSchema.deleteMany({ _roadmap_id });

    return content;
  }

  // Concluidos - Quantidade
  // Progress - %
  // Late -

  readQuantity(_roadmap_id: string): object {
    const content = ContentSchema.find({ _roadmap_id });

    return content;
  }

  readQuantityInProgress(_roadmap_id: string): object {
    const content = ContentSchema.find({ _roadmap_id, is_done: true });

    return content;
  }
}

export { Content };
