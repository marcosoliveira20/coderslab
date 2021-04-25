interface ISubjecAlltDTO {
  id: string;
  label: string;
  // TO DO Transformar em lista de categorias
  categories: Array<string>;
}
interface ISubjectIdDTO {
  id: string;
}

interface ISubjectLabelDTO {
  label: string;
}
export { ISubjecAlltDTO, ISubjectIdDTO, ISubjectLabelDTO };