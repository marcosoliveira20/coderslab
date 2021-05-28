  import { IRoadmapDTO } from "../interfaces/IRoadmapDTO";
  import { IRoadmapRepository } from "../interfaces/IRoadmapRepository";

  import RoadmapSchema from "../database/Schema/RoadmapSchema"


  class Roadmap implements IRoadmapRepository {
    createDefault({
      name,
      objective,
      level,
      quantity_contents,
      quantity_of_challenge, 
      user_id
    }: IRoadmapDTO): Promise<IRoadmapDTO> {
      const roadmap = RoadmapSchema.create({
        name,
        objective,
        level,
        quantity_contents,
        quantity_of_challenge,
        user_id
      });

      return roadmap;
    }

    createCustom({
      name,
      objective,
      level,
      quantity_contents,
      quantity_challenges,
      user_id,
    }: IRoadmapDTO): Promise<IRoadmapDTO> {
      const roadmap = RoadmapSchema.create({
        name,
        objective,
        is_default: false,
        level,
        quantity_contents,
        quantity_challenges,
        user_id,
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

    updateLevel(_id: String, level: Number): object {
      const roadmap = RoadmapSchema.findByIdAndUpdate(
        {_id},
        {level},
        {new: true}
      );

      return roadmap;
    }

    updateQuantityOfContents(_id: String, quantity: Number): object {
      const roadmap = RoadmapSchema.findByIdAndUpdate(
        {_id},
        {quantity},
        {new: true}
      );

      return roadmap;
    }

    updateQuantityOfChallenges(_id: String, quantityChallenge: Number): object {
      const roadmap = RoadmapSchema.findByIdAndUpdate(
        {_id},
        {quantityChallenge},
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

    readLateContents(_roadmap_id: String, today: String): object {
      const content = RoadmapSchema.find({
        deadline: {$lte: today}
      });

      return content;
    }

    readByName(name: string): object {
      const roadmap = RoadmapSchema.findOne({name});

      return roadmap;
    }

    readAll(user_id: String): object {
      const roadmaps = RoadmapSchema.find({user_id});

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
      const roadmap = RoadmapSchema.find({
        is_default: true
      })      

      return roadmap;
    }

    readAllDefaultRepositoriesByUserId(user_id: String): object {
      const roadmap = RoadmapSchema.find({
        user_id,
        is_default: true
      })      

      return roadmap;
    }


    readAllCustomRepositories(user_id: String): object {
      const roadmap = RoadmapSchema.find({
        user_id,
        is_default: false
      })      

      return roadmap;
    }

    readAllDoneRepositories(user_id: String): object {
      const roadmap = RoadmapSchema.find({
        user_id,
        is_done: true
      })      

      return roadmap;
    }

    readAllInProgressRepositories(user_id: String): object {
      const roadmap = RoadmapSchema.find({
        user_id,
        is_done: false
      })   

      return roadmap
    }

    UpdateContentListByRoadmapId(_roadmap_id: String, content_list: String): object {
      const content = RoadmapSchema.updateMany({_roadmap_id}, {content_list});

      return content;
    }
  }

  export { Roadmap };
