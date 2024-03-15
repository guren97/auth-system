import jwt from "jsonwebtoken";
import User from "../models/UserSchema.js";
import ErrorResponse from "../utils/errorResponse.js";

export const protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return next(new ErrorResponse("Token not provided", 401));
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);

    if (!user) {
      return next(new ErrorResponse("User not found", 404));
    }

    req.user = user;
    next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return next(new ErrorResponse("Token expired", 401));
    }
    return next(new ErrorResponse("Invalid token", 401));
  }
};
