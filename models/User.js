import mongoose from "mongoose";
const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Không thể để trống!"],
      maxLength: 32,
    },
    email: {
      type: String,
      required: [true, "Không thể để trống!"],
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "Không thể để trống!"],
      min: 6,
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
