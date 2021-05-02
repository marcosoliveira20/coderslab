import { IScheduleDTO } from "../interfaces/IScheduleDTO";
import { IScheduleRepository } from "../interfaces/IScheduleRepository";

// TODO conexão com BD
const schedules = [];

class Schedule implements IScheduleRepository {
  create({
    id,
    datetime,
    link,
    description,
    owner,
  }: IScheduleDTO): { message: string; status: number } {
    const findIndex: number = schedules.findIndex((s) => s.id === id);
    if (findIndex >= 0) {
      return { message: "Schedule already exists", status: 403 };
    }

    schedules.push({
      id,
      datetime,
      link,
      description,
      owner,
    });
    return { message: "Schedule created", status: 201 };
  }

  readById(
    id: string
  ): {
    schedule?: IScheduleDTO;
    message?: string;
    status: number;
  } {
    const schedule: IScheduleDTO = schedules.find((s) => s.id === id);
    if (!schedules) {
      return { message: "Schedules does not exist", status: 404 };
    }
    return { schedule, status: 200 };
  }

  readByLabel(
    label: string
  ): {
    schedule?: IScheduleDTO;
    message?: string;
    status: number;
  } {
    const schedule: IScheduleDTO = schedules.find((s) => s.label === label);
    if (!schedule) {
      return { message: "Schedule does not exist", status: 404 };
    }
    return { schedule, status: 200 };
  }

  readAll(): {
    schedules: Array<IScheduleDTO>;
    status: number;
  } {
    if (schedules.length === 0) {
      const schedules = [];
      return { schedules, status: 200 };
    }
    return { schedules, status: 200 };
  }

  update({
    id,
    datetime,
    link,
    description,
    owner,
  }: IScheduleDTO): {
    schedule?: IScheduleDTO;
    message?: string;
    status: number;
  } {
    const schedule: IScheduleDTO = schedules.find((s) => s.id === id);
    if (!schedule) {
      return { message: "Schedule does not exist", status: 404 };
    }
    if (schedule.datetime === datetime) {
      return { message: "Schedule label already exists", status: 403 };
    }
    schedule.datetime = datetime;
    schedule.link = link;
    schedule.description = description;
    schedule.owner = owner;

    return { schedule, status: 200 };
  }

  delete(
    id: string
  ): {
    message?: string;
    status: number;
  } {
    const ScheduleIndex = schedules.findIndex((s) => s.id === id);

    if (ScheduleIndex < 0) {
      return { message: "Schedule does not exist", status: 404 };
    }

    schedules.splice(ScheduleIndex, 1);
    return { status: 204 };
  }
}

export { Schedule };
