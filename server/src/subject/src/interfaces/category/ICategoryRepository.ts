import { ICategoryAllDTO, ICategoryIdDTO } from "./ICategoryDTO";

interface ICategoryRepository {
  create(data: ICategoryAllDTO): { message: string; status: number };

  readById(
    data: ICategoryIdDTO
  ): {
    category: string;
    message: string;
    status: number;
  };

  readAll(): void;

  update(data: ICategoryAllDTO): { message: string; status: number };

  delete(
    data: ICategoryIdDTO
  ): {
    message: string;
    status: number;
  };
}

export { ICategoryRepository };
