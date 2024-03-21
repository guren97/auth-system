import express from "express";
const privateRouter = express.Router();

import { protect } from "../middlewares/auth.js";
import { getPrivateData, getUsers } from "../controllers/private.js";

privateRouter.route("/").get(protect, getPrivateData);
// privateRouter.route("/createPost").post(protect, createPost);
privateRouter.route("/profiles").get(protect, getUsers);
export default privateRouter;
