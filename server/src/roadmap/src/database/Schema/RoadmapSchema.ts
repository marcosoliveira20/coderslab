import { Schema, model } from "mongoose";

const RoadmapSchema = new Schema({
  name: { type: String, required: true, unique: true},
  is_default: { type: Boolean, required: false, default: true },
  objective: { type: String, required: true },
  content_list: { type: [String], required: true },
  is_done: { type: Boolean, required: false, default: false },
}, {
  timestamps: true,
});

export default model("roadmap", RoadmapSchema);
