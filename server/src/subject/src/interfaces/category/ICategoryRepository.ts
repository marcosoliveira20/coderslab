import {
  ICategoryCreateDTO,
  ICategoryDTO,
  ICategoryIdDTO,
} from "./ICategoryDTO";

interface ICategoryRepository {
  read(data: ICategoryIdDTO): void;
  create(data: ICategoryCreateDTO): void;
  update(data: ICategoryDTO): void;
  delete(data: ICategoryIdDTO): void;
}

export { ICategoryRepository };
