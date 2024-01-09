import express from "express";
import dotenv from "dotenv";
//dotenv configuration
dotenv.config();
import cookieParser from "cookie-parser";
import { connectDb } from "./config/db.js";

//database connection
connectDb();
const app = express();

//middleware
app.use(cookieParser());
app.use(express.json());

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`server started at port number : ${port}`);
});
