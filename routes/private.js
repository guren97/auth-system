import express from "express";
const privateRouter = express.Router();

import { protect } from "../middlewares/auth.js";
import { createPost, getPrivateData } from "../controllers/private.js";

privateRouter.route("/").get(protect, getPrivateData);
privateRouter.route("/createPost").post(protect, createPost);

export default privateRouter;
