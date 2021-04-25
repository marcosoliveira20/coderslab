import {
  ICategoryAllDTO,
  ICategoryIdDTO,
} from "../interfaces/category/ICategoryDTO";
import { ICategoryRepository } from "../interfaces/category/ICategoryRepository";

// TODO conexão com BD
const categories = [];

class Category implements ICategoryRepository {
  create({ id, label }: ICategoryAllDTO): { message: string; status: number } {
    if (categories.findIndex((c) => c.label === label) >= 0) {
      return { message: "Category already exists", status: 403 };
    }
    if (categories.findIndex((c) => c.id === id) >= 0) {
      return { message: "Category already exists", status: 403 };
    }

    categories.push({
      id,
      label,
    });
    return { message: "Category created", status: 201 };
  }

  readById({
    id,
  }: ICategoryIdDTO): {
    category: string;
    message: string;
    status: number;
  } {
    const category = categories.find((c) => c.id === id);
    if (!category) {
      return { category: "", message: "Category don't exists", status: 404 };
    }
    return { category, message: "", status: 200 };
  }

  readAll(): {
    categories: Array<string>;
    message: string;
    status: number;
  } {
    if (categories.length === 0) {
      return { categories: [], message: "Categories is empty", status: 200 };
    }
    return { categories, message: "", status: 200 };
  }

  update({ id, label }: ICategoryAllDTO): { message: string; status: number } {
    const findCategory: ICategoryAllDTO = categories.find((c) => c.id === id);
    if (!findCategory) {
      return { message: "Category don't exists", status: 404 };
    }
    if (findCategory.label === label) {
      return { message: "Category label already exists", status: 403 };
    }
    findCategory.label = label;

    return { message: "Category updated", status: 204 };
  }

  delete({
    id,
  }: ICategoryIdDTO): {
    message: string;
    status: number;
  } {
    const categoryIndex = categories.findIndex((c) => c.id === id);
    if (categoryIndex < 0) {
      return { message: "Category don't exists", status: 404 };
    }
    categories.splice(categoryIndex, 1);
    return { message: "Category deleted", status: 204 };
  }
}

export { Category };
