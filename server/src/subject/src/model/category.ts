import {
  ICategoryCreateDTO,
  ICategoryDTO,
  ICategoryIdDTO,
} from "../interfaces/category/ICategoryDTO";
import { ICategoryRepository } from "../interfaces/category/ICategoryRepository";

// TODO conexão com BD
const categories = [];

class Category implements ICategoryRepository {
  read({
    id,
  }: ICategoryIdDTO): {
    category: string;
    message: string;
    status: number;
  } {
    let category = categories.find((s) => s.id === id);
    if (!category) {
      category = "";
      return { category, message: "Category don't exists", status: 404 };
    }
    return { category, message: "Category created", status: 201 };
  }
  create(data: ICategoryCreateDTO): void {
    throw new Error("Method not implemented.");
  }
  update(data: ICategoryDTO): void {
    throw new Error("Method not implemented.");
  }
  delete(data: ICategoryIdDTO): void {
    throw new Error("Method not implemented.");
  }
}

export { Category };
