import { Schema, model } from "mongoose";

const RoadmapSchema = new Schema({
  name: { type: String, required: true, unique: false},
  is_default: { type: Boolean, required: false, default: true },
  objective: { type: String, required: true },
  is_done: { type: Boolean, required: false, default: false },
  level: {type: Number, required: true, default: 0},
  content_list: { type: [], required: false },
  quantity_contents: { type: Number, required: false },
  percent_contents: { type: Number, required: false },
  quantity_challenges: { type: Number, required: false },
  percent_challenges: { type: Number, required: false },
}, {
  timestamps: true,
});

export default model("roadmap", RoadmapSchema);
