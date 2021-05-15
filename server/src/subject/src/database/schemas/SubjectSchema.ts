import { Schema, model } from "mongoose";

const SubjectSchema = new Schema(
  {
    label: { type: String, required: true, unique: true, lowercase: true },
    categories: { type: [String], required: true, lowercase: true },
  },
  {
    timestamps: true,
  }
);

export default model("Subject", SubjectSchema);
