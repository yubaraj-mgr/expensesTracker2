import mongoose from "mongoose";

export const dbConnect = () => {
  try {
    const apiEnd = "mongodb://localhost:27017/expensesTracker2";
    const conn = mongoose.connect(apiEnd);
    conn && console.log("Database Connected");
  } catch (error) {
    error && console.log(error);
  }
};
