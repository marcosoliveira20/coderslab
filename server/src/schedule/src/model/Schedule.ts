import ScheduleSchema from "../database/schemas/ScheduleSchema";
import { IScheduleDTO } from "../interfaces/IScheduleDTO";
import { IScheduleRepository } from "../interfaces/IScheduleRepository";

class Schedule implements IScheduleRepository {
  create(
    datetime: Date,
    link: string,
    description: string,
    owner: string,
    _id_group: string
  ): Promise<void> {
    return ScheduleSchema.create({
      datetime,
      link,
      description,
      owner,
      _id_group,
    });
  }

  readById(_id: string): Promise<IScheduleDTO> {
    return ScheduleSchema.findOne({ _id });
  }

  readByOwner(owner: string): Promise<IScheduleDTO> {
    return ScheduleSchema.findOne({ owner });
  }

  // TODO implementação
  readByDate(datetime: Date): Promise<IScheduleDTO> {
    return ScheduleSchema.findOne({ datetime });
  }

  readByGroup(_id_group: string, datetime: Date): Promise<Array<IScheduleDTO>> {
    return ScheduleSchema.find({
      _id_group,
      datetime: {
        $gte : datetime.toISOString()
      }
    }).sort({ datetime: 1 });
  }

  readByGroupNextSchedule(_id_group: string, datetime: Date): Promise<IScheduleDTO> {
    return ScheduleSchema.findOne({
      _id_group,
      datetime: {
        $gte : datetime.toISOString()
      }
    })
    .sort({ datetime: 1 })
    .limit(1);
  }

  readAll(): Promise<Array<IScheduleDTO>> {
    return ScheduleSchema.find();
  }

  update(
    _id: string,
    datetime: Date,
    link: string,
    description: string
  ): Promise<IScheduleDTO> {
    return ScheduleSchema.findByIdAndUpdate(
      _id,
      { datetime, link, description },
      { new: true }
    );
  }

  delete(_id: string): Promise<void> {
    return ScheduleSchema.deleteOne({ _id });
  }
}

export { Schedule };
