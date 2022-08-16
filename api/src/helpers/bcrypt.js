import bcrypt from "bcryptjs";
const salt = 15;

export const hashPassword = (password) => {
  return bcrypt.hashSync(password, salt);
};
