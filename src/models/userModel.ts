import mongoose, { model } from "mongoose";

interface UserInterface {
  name: string;
  email: string;
  password: string;
}

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

export const User = model<UserInterface>("User", userSchema);
