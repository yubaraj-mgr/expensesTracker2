import axios from "axios";

const apiE = "http://localhost:8000";

export const insertRegistration = async (data) => {
  try {
    const response = await axios.post(apiE + "/api/v1", data);
    return response.data;
  } catch (error) {
    error && console.log(error);
  }
};

export const checkEmailVerification = async (data) => {
  try {
    const response = await axios.patch(apiE + "/api/v1", data);
    return response.data;
  } catch (error) {
    error && console.log(error);
  }
};

export const checkLoginDetials = async ({ email, password }) => {
  try {
    const response = await axios.post(apiE + "/api/v1/login", {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    error && console.log(error);
  }
};

export const insertTransaction = async (data) => {
  try {
    const response = await axios.post(apiE + "/api/v1/login/dashboard", data);
    return response.data;
  } catch (error) {
    error && console.log(error);
  }
};

export const fetchAllTransactions = async () => {
  try {
    const response = await axios.get(apiE + "/api/v1/login/dashboard");
    return response.data;
  } catch (error) {
    error && console.log(error);
  }
};
