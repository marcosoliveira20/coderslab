import { IRoadmapDTO } from "../interfaces/IRoadmapDTO";
import { IRoadmapRepository } from "../interfaces/IRoadmapRepository";

import RoadmapSchema from "../database/Schema/RoadmapSchema"


class Roadmap implements IRoadmapRepository {
  createDefault({
    name,
    objective,
    level
  }: IRoadmapDTO): Promise<IRoadmapDTO> {
    const roadmap = RoadmapSchema.create({
      name,
      objective,
      level,
    });

    return roadmap;
  }

  createCustom({
    name,
    objective,
    level
  }: IRoadmapDTO): Promise<IRoadmapDTO> {
    const roadmap = RoadmapSchema.create({
      name,
      objective,
      is_default: false,
      level,
    });

    return roadmap;
  }

  turnRoadmapCustomized(_id: String): object {
    const roadmap = RoadmapSchema.findByIdAndUpdate(
      {_id},
      {is_default: false},
      {new: true}
    );

    return roadmap;
  }

  turnRoadmapDefault(_id: String): object {
    const roadmap = RoadmapSchema.findByIdAndUpdate(
      {_id},
      {is_default: true},
      {new: true}
    );

    return roadmap;
  }

  turnRoadmapDone(_id: String): object {
    const roadmap = RoadmapSchema.findByIdAndUpdate(
      {_id},
      {is_done: true},
      {new: true}
    );

    return roadmap;
  }

  turnRoadmapNotDone(_id: String): object {
    const roadmap = RoadmapSchema.findByIdAndUpdate(
      {_id},
      {is_done: false},
      {new: true}
    );

    return roadmap;
  }

  updateName(_id: String, name: String): object {
    const roadmap = RoadmapSchema.findByIdAndUpdate(
      {_id},
      {name},
      {new: true}
    );

    return roadmap;
  }

  updateObjective(_id: String, objective: String): object {
    const roadmap = RoadmapSchema.findByIdAndUpdate(
      {_id},
      {objective},
      {new: true}
    );

    return roadmap;
  }

  updateContent_list(_id: String, content_list: String): object {
    const roadmap = RoadmapSchema.findByIdAndUpdate(
      {_id},
      {content_list},
      {new: true}
    );

    return roadmap;
  }

  readById(_id: string): object {
    const roadmap = RoadmapSchema.findById({_id});

    return roadmap;
  }

  readByName(name: string): object {
    const roadmap = RoadmapSchema.findOne({name});

    return roadmap;
  }

  readAll(): object {
    const roadmaps = RoadmapSchema.find();

    return roadmaps;
  }

  update(id: String): object {
    const roadmap = RoadmapSchema.findByIdAndUpdate(id);

    return roadmap;
  }

  delete(_id: String): object {
    const roadmap = RoadmapSchema.findByIdAndDelete(_id);

    return roadmap;
  }

  readAllDefaultRepositories(): object {
    const roadmap = RoadmapSchema.find({is_default: true});

    return roadmap;
  }

  readAllCustomRepositories(): object {
    const roadmap = RoadmapSchema.find({is_default: false});

    return roadmap;
  }

  readAllDoneRepositories(): object {
    const roadmap = RoadmapSchema.find({is_done: true});

    return roadmap;
  }

  readAllInProgressRepositories(): object {
    const roadmap = RoadmapSchema.find({is_done: false});

    return roadmap;
  }
}

export { Roadmap };
