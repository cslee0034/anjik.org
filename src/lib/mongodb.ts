import mongoose from "mongoose";

const mongoConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI as string);
    console.log("MongoDB connected");
  } catch (error) {
    console.error(error);
  }
};

export default mongoConnect;
