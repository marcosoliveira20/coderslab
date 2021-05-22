interface IContentSchemaDTO {
  title: String,
  description: String,
  deadline: Date,
  reference: String,
  is_done?: Boolean,
  challenge: [],
  _roadmap_id?: String,
}

export { IContentSchemaDTO };
