import mongoose from "mongoose";
const schema = mongoose.Schema(
  {
    tuit: String,
    likes: Number,
    liked: Boolean,
    dislikes: Number,
    replies: Number,
    retuits: Number,
    title: String,
    topic: String,
    username: String,
    handle: String,
    time: String,
    image: String,
    icon: String,
  },
  { collection: "tuits" }
);
export default schema;
