import mongoose from "mongoose";

const transactionSchema = mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  amount: {
    type: Number,
    require: true,
  },
  type: {
    type: String,
    require: true,
  },
});

export default mongoose.model("Transactions", transactionSchema);
