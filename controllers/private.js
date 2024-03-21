import User from "../models/UserSchema.js";
import generateToken from "../utils/generateToken.js";
import ErrorResponse from "../utils/errorResponse.js";

const getPrivateData = (req, res, next) => {
  res
    .status(200)
    .json({
      success: true,
      data: "You have acccess to this route.",
    })
    .send("You have access to this route");
};

const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    if (!users) {
      return next(new ErrorResponse("No users found in the database", 404));
    }
    res.status(200).json({
      success: true,
      users,
    });
  } catch (error) {
    next(new ErrorResponse("Internal Server Error", 500));
  }
};

export { getPrivateData, getUsers };
