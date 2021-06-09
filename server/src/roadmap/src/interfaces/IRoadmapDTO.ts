interface IRoadmapDTO {
  _id?: String,
  name: String,
  is_default?: Boolean,
  objective: String,
  is_done?: Boolean,
  level: String,
  content_list?: [Object],
  quantity_contents?: Number,
  percent_contents?: Number,
  quantity_challenges?: Number,
  quantity_of_challenge?: Number,
  percent_challenges?: Number,
  user_id: String,
}

export { IRoadmapDTO };
