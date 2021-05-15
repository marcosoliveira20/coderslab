import { IScheduleDTO } from "./IScheduleDTO";

interface IScheduleRepository {
  create(
    datetime: Date,
    link: string,
    description: string,
    owner: string
  ): Promise<void>; // TODO transformar em IScheduleDTO que não passa id
  readById(id: string): Promise<IScheduleDTO>;
  readAll(): Promise<Array<IScheduleDTO>>;
  update(
    _id: string,
    datetime: Date,
    link: string,
    description: string
  ): Promise<IScheduleDTO>;
  delete(id: string): Promise<void>;
}

export { IScheduleRepository };
