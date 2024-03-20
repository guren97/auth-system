import jwt from "jsonwebtoken";
import User from "../models/UserSchema.js";
import ErrorResponse from "../utils/errorResponse.js";

export const protect = async (req, res, next) => {
  let token;

  token = req.cookies.jwt;

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id).select("-password");

      next();
    } catch (error) {
      next(new ErrorResponse("Not authorized, invalid token", 401));
    }
  } else {
    next(new ErrorResponse("Not authorized, Token not provided", 401));
  }

  // let token;

  // if (
  //   req.headers.authorization &&
  //   req.headers.authorization.startsWith("Bearer")
  // ) {
  //   token = req.headers.authorization.split(" ")[1];
  // }

  // if (!token) {
  //   return next(new ErrorResponse("Token not provided", 401));
  // }

  // try {
  //   const decoded = jwt.verify(token, process.env.JWT_SECRET);
  //   const user = await User.findById(decoded.id);

  //   if (!user) {
  //     return next(new ErrorResponse("User not found", 404));
  //   }

  //   // Attach the user object to the request
  //   req.user = user;
  //   // Call next to pass control to the next middleware or route handler
  //   next();
  // } catch (error) {
  //   if (error.name === "TokenExpiredError") {
  //     return next(new ErrorResponse("Token expired", 401));
  //   }
  //   // Handle other JWT verification errors
  //   return next(new ErrorResponse("Invalid token", 401));
  // }
};
