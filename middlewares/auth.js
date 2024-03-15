import jwt from "jsonwebtoken";
import User from "../models/UserSchema";
import ErrorResponse from "../utils/errorResponse";

export const protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
    // it will look like this
    // Bearer sdfghs12354425q324v234v2
    //   ""    [- it will get the second element which is the token]
  }

  if (!token) {
    return next(new ErrorResponse("Not authorized to acces this route", 401));
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);

    if (!user) {
      return next(new ErrorResponse("User not found", 404));
    }
    req.user = user;
  } catch (error) {
    return next(new ErrorResponse("Not authorized to acces this route", 401));
  }
};
