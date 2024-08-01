import mongoose from "mongoose";

const url =
  "mongodb+srv://Moline:9588@cluster0.tgezrzd.mongodb.net/coffee-shop";

const connect = async () => {
  try {
    await mongoose.connect(url);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
};

export default connect;
