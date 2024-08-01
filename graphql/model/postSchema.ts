import mongoose from "mongoose";

const { Schema } = mongoose;

const postSchema = new Schema({
  image: String,
  description: String,
});

const postModel = mongoose.models.posts || mongoose.model("posts", postSchema);

export default postModel;
