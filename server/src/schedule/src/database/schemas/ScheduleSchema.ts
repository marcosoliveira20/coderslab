import { Schema, model } from "mongoose";

const ScheduleSchema = new Schema(
  {
    datetime: { type: Date, required: true },
    link: { type: String, required: true },
    description: { type: String, required: true },
    owner: { type: String, required: true, lowercase: true },
    _id_group: { type: String, required: true, lowercase: true },
  },
  {
    timestamps: true,
  }
);

export default model("Schedule", ScheduleSchema);
