import userModel from "../../../model/userSchema";
import { CreateUserInput } from "@/generated/index";

export const createUser = async (
  _: CreateUserInput,
  { input }: { input: CreateUserInput }
) => {
  const { fullName, email, password, avatar, address, paymentInfo, favorites } =
    input;
  console.log({
    fullName,
    email,
    password,
    avatar,
    address,
    paymentInfo,
    favorites,
  });
  try {
    const createdUser = await userModel.create({
      fullName,
      email,
      password,
      avatar,
      address,
      paymentInfo,
      favorites,
    });
    return createdUser;
  } catch (error) {
    console.error("Error creating user:", error);
    throw new Error("Failed to create user");
  }
};
