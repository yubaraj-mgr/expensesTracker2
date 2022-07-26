import transactionSchema from "./TransactionSchema.js";

export const insertTransaction = (data) => {
  return transactionSchema(data).save();
};

export const fetchAllTransactions = () => {
  return transactionSchema.find();
};
