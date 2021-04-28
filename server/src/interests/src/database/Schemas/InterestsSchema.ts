import { Schema, model } from "mongoose"

const InterestsSchema = new Schema({
  subject_label: { type: String, required: true },
  level: { type: Number, required: true }
}, {
  timestamps: true,
})

export default model("Interests", InterestsSchema)