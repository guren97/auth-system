import express from "express";
const privateRouter = express.Router();

import { createPost, getPrivateData } from "../controllers/private.js";

privateRouter.route("/").get(getPrivateData);
privateRouter.route("/createPost").post(createPost);

export default privateRouter;
