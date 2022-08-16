import express from "express";
import { hashPassword } from "../helpers/bcrypt.js";
import {
  validateRegistration,
  validEmailVerify,
} from "../middleware/joiMiddleWare/joiHandler.js";
import {
  fetchAllTransactions,
  insertTransaction,
} from "../model/Transaction/TransactionModel.js";
import {
  findByEmail,
  findOneAndUpdate,
  postTaskToServer,
} from "../model/userModel.js";
import { v4 as uuidv4 } from "uuid";
import { sendEmail, sendEmailVerification } from "../helpers/nodeMailer.js";

const router = express.Router();

router.post("/", validateRegistration, async (req, res, next) => {
  try {
    req.body.password = hashPassword(req.body.password);
    req.body.emailCode = uuidv4();
    console.log(req.body);
    const result = await postTaskToServer(req.body);
    if (result?._id) {
      res.json({
        status: "success",
        message: "user created Successfully",
        result,
      });
      const url = `http://localhost:3000/email-verify?e=${result.email}&c=${result.emailCode}`;
      sendEmail({
        email: result.email,
        url,
      });
    } else {
      res.json({
        status: "error",
        message: "Please check your details",
        result,
      });
    }
  } catch (error) {
    error && console.log(error);
  }
});

router.patch("/", validEmailVerify, async (req, res, next) => {
  try {
    const result = await findOneAndUpdate(req.body, {
      status: "active",
      emailCode: "",
    });
    if (result?._id) {
      res.json({
        status: "success",
        message: "Your account has been activated",
      });
      sendEmailVerification({
        email: result.email,
      });
    } else {
      res.json({
        status: "error",
        message: "Please check your details",
      });
    }
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

router.post("/login/dashboard", async (req, res, next) => {
  try {
    const response = await insertTransaction(req.body);
    res.json({
      status: "success",
      message: "Transaction Added Successfully",
      response,
    });
  } catch (error) {
    error && console.log(error);
  }
});

router.get("/login/dashboard", async (req, res, next) => {
  try {
    const response = await fetchAllTransactions();
    res.json({
      status: "success",
      message: "Transaction Added Successfully",
      response,
    });
  } catch (error) {
    error && console.log(error);
  }
});

export default router;
