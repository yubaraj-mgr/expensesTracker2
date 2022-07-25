import express from "express";
import router from "./src/router/userRouter.js";
import cors from "cors";
import { dbConnect } from "./src/config/dbConnect.js";

const app = express();
app.use(express.json());
app.use(cors());
dbConnect();

app.use("/api/v1", router);

app.listen(8000, (error) => {
  error && console.log(error);
});
