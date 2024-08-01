import postModel from "../../model/postSchema";

export const getAllPosts = async () => {
  console.log("getAllPosts");
  try {
    const users = await postModel.find({});
    return users;
  } catch (err) {
    console.log(err);
  }
};
