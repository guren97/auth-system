//::import required modules
import dotenv from "dotenv";
import cors from "cors";
import express from "express";
import cookieParser from "cookie-parser";
import router from "./routes/auth.js";
import privateRouter from "./routes/private.js";
import connectDb from "./config/db.js";
import errorHandler from "./middlewares/errorHandler.js";

//::require ENV File
dotenv.config({ path: "./config.env" });

//::declare app variable
const app = express();

//::use middlewares
app.use(express.json());
app.use(cors());
app.use(cookieParser());

//::import the routers
app.use("/api/auth", router);
app.use("/api/private", privateRouter);

// Error Handler
app.use(errorHandler);

//::create Start Server Function
const startServer = async () => {
  const PORT = process.env.PORT || 5000;
  try {
    await connectDb();
    await app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.log(`Cannot start server`);
  }
};
//::Start the server
startServer();
