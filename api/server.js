import express from "express";
import dotenv from "dotenv";
//dotenv configuration
dotenv.config();
import cookieParser from "cookie-parser";
//database
import { connectDb } from "./config/db.js";

//routes
import userRoutes from "./routes/userRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";

//database connection
connectDb();
const app = express();

//middleware
app.use(cookieParser());
app.use(express.json());

//routes
app.use("/api", userRoutes);
app.use("/api", categoryRoutes);

//server port
const port = process.env.PORT;

//server started
app.listen(port, () => {
  console.log(`server started at port number : ${port}`);
});
