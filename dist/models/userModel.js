import mongoose, { model } from "mongoose";
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
});
export const User = model("User", userSchema);
