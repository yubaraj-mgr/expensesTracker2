import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  status: {
    type: String,
    default: "inactive",
  },
  firstName: {
    type: String,
    require: true,
  },
  lastName: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  emailCode: {
    type: String,
    require: true,
  },
});

export default mongoose.model("user", userSchema);
