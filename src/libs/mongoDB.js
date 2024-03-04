import { connect } from "mongoose";
const DB_URL =
  "mongodb+srv://food-ordering:gFm3iVDZI6SnJl3s@cluster0.v9wyzzg.mongodb.net/";

const connectDB = async () => {
  try {
    await connect(DB_URL);
    console.log("→ MongoDB is connected");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
