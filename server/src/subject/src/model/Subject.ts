import {
  ISubjecAlltDTO,
  ISubjectIdDTO,
  ISubjectLabelDTO,
} from "../interfaces/ISubjectDTO";
import { ISubjectRepository } from "../interfaces/ISubjectRepository";

// TODO conexão com BD
const subjects = [];

class Subject implements ISubjectRepository {
  create({
    id,
    label,
    categories,
  }: ISubjecAlltDTO): { message: string; status: number } {
    if (subjects.findIndex((s) => s.label === label) >= 0) {
      return { message: "Subject already exists", status: 403 };
    }
    if (subjects.findIndex((s) => s.id === id) >= 0) {
      return { message: "Subject already exists", status: 403 };
    }

    subjects.push({
      id,
      label,
      categories,
    });
    return { message: "Subject created", status: 201 };
  }

  readById({
    id,
  }: ISubjectIdDTO): {
    subject: string;
    message: string;
    status: number;
  } {
    let subject = subjects.find((s) => s.id === id);
    if (!subject) {
      subject = "";
      return { subject, message: "Subject don't exists", status: 404 };
    }
    return { subject, message: "", status: 200 };
  }

  readByLabel({
    label,
  }: ISubjectLabelDTO): {
    subject: string;
    message: string;
    status: number;
  } {
    let subject = subjects.find((s) => s.label === label);
    if (!subject) {
      subject = "";
      return { subject, message: "Subject don't exists", status: 404 };
    }
    return { subject, message: "", status: 200 };
  }

  readAll(): {
    subject_list: Array<string>;
    message: string;
    status: number;
  } {
    if (subjects.length === 0) {
      const subject_list = [];
      return { subject_list, message: "Subjects is empty", status: 200 };
    }
    return { subject_list: subjects, message: "", status: 200 };
  }

  update({
    id,
    label,
    categories,
  }: ISubjecAlltDTO): { message: string; status: number } {
    const findSubject: ISubjecAlltDTO = subjects.find((s) => s.id === id);
    if (!findSubject) {
      return { message: "Subject don't exists", status: 404 };
    }
    if (findSubject.label === label) {
      return { message: "Subject label already exists", status: 403 };
    }
    findSubject.label = label;
    findSubject.categories = categories;

    return { message: "Subject updated", status: 204 };
  }

  delete({
    id,
  }: ISubjectIdDTO): {
    message: string;
    status: number;
  } {
    const subjectIndex = subjects.findIndex((s) => s.id === id);
    if (subjectIndex < 0) {
      return { message: "Subject don't exists", status: 404 };
    }
    subjects.splice(subjectIndex, 1);
    return { message: "Subject deleted", status: 204 };
  }
}

export { Subject };
