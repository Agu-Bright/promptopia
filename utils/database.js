import mongoose from "mongoose";

let isConnected = false;

export const connectDB = async () => {
  mongoose.set("strictQuery", true);
  if (isConnected) {
    console.log("Goose is already connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "share_propmt",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
    console.log("Goose connected");
  } catch (error) {
    console.log(eror);
  }
};
