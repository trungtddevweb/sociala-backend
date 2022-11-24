import mongoose from "mongoose";
const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    name: { type: String, required: [true, "Không thể để trống!"] },
    email: {
      type: String,
      required: [true, "Không thể để trống!"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Không thể để trống!"],
      minLength: 6,
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
