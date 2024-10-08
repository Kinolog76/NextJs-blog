import mongoose from "mongoose";

const ConnectDB = async () => {
  try {
    await mongoose.connect('');
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
};
