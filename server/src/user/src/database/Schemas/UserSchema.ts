import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  username: { type: String, required: true, unique: true, lowercase: true },
  name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  discord_id: { type: String, required: true },
  github_id: { type: String, required: true },
  password: { type: String, required: true, selected: false },
  token: { type: String, required: false }
}, {
  timestamps: true,
})

export default model("Users", UserSchema)