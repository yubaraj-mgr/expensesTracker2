import userSchema from "./userSchema.js";

export const postTaskToServer = (data) => {
  return userSchema(data).save();
};

export const findByEmail = (email) => {
  return userSchema.findOne(email);
};

export const findOneAndUpdate = (filter, update) => {
  return userSchema.findOneAndUpdate(filter, update, { new: true });
};
