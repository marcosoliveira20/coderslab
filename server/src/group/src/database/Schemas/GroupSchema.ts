import { Schema, model } from "mongoose"

const GroupSchema = new Schema({
  name: { type: String, required: true },
  category: { type: [String], required: true },
  subject_label: { type: String, required: true },
  level: { type: Number, required: true },
  token: { type: String, required: true, unique: true },
  is_public: { type: Boolean, required: true },
  _owner: { type: Schema.Types.ObjectId, required: true },
  _schedule_list: { type: [Schema.Types.ObjectId], required: true },
}, {
  timestamps: true,
})

export default model("Groups", GroupSchema);