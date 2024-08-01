import userModel from "../../model/userSchema";

export const getAllUsers = async () => {
  console.log("getAllUsers");
  try {
    const users = await userModel.find({});
    return users;
  } catch (err) {
    console.log(err);
  }
};
