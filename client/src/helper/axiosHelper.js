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

export const checkLoginDetials = async (emalandPasswordinObject) => {
  try {
    const response = await axios.post(
      apiE + "/api/v1/login",
      emalandPasswordinObject
    );
    return response.data;
  } catch (error) {
    error && console.log(error);
  }
};
