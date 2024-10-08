import mongoose from "mongoose";

export const ConnectDB = async () => {
  try {
    await mongoose.connect('');
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
};
