import express from "express";
import { findByEmail, postTaskToServer } from "../model/userModel.js";

const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    const data = req.body;
    const result = await postTaskToServer(data);
    res.json({
      status: "success",
      message: "user created Successfully",
      result,
    });
  } catch (error) {
    error && console.log(error);
  }
});

router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const response = await findByEmail({ email, password });
    response?.password === password
      ? res.json({
          status: "success",
          message: "Loggedin Successfully",
          response,
        })
      : res.json({
          status: "error",
          message: "Please check uername and password",
        });
    console.log(response);
  } catch (error) {
    error && console.log(error);
  }
});

export default router;