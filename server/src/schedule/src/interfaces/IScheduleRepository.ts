import { IScheduleDTO } from "./IScheduleDTO";

interface IScheduleRepository {
  create(data: IScheduleDTO): void; // TODO transformar em IScheduleDTO que não passa id
  readById(id: string): void;
  readAll(): void;
  update(data: IScheduleDTO): void;
  delete(id: string): void;
}

export { IScheduleRepository };
