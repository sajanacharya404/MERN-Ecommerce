import mongoose from "mongoose";

export const connectDb = () => {
  try {
    mongoose.connect(process.env.MONGO_URL);
    console.log("Database Connected");
  } catch (error) {
    console.log("Database Connection failed", error);
  }
};
