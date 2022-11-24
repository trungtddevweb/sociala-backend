import mongoose from "mongoose";

const { Schema } = mongoose;

const PostSchema = new Schema({
  userId: { type: String, required: true },
  content: { type: String },
  image: { type: String },
  likes: { type: [String], default: [] },
});

export default mongoose.model("Post", PostSchema);
