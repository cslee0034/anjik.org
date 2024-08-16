import mongoose from "mongoose";

const mongoConnect = async () => {
<<<<<<< HEAD:src/lib/mongodb.ts
  if (mongoose.connection.readyState === 1) {
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI as string);
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw new Error("MongoDB connection failed");
=======
  try {
    await mongoose.connect(process.env.MONGODB_URI as string);
    console.log("MongoDB connected");
  } catch (error) {
    console.error(error);
>>>>>>> feature/login:src/libs/mongodb.ts
  }
};

export default mongoConnect;
