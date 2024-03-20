import User from "../models/UserSchema.js";
import generateToken from "../utils/generateToken.js";
import ErrorResponse from "../utils/errorResponse.js";

//-------------------------------------------------------------------------------//
//                          :: REGISTER FUNCTION ::                              //
//-------------------------------------------------------------------------------//
export const register = async (req, res, next) => {
  const { username, user_role, email, password } = req.body;

  try {
    // Check if user with username or email already exists
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });

    // If no existing user found, existingUser will be null
    if (!existingUser) {
      // Proceed to create a new user
      const user = await User.create({ username, user_role, email, password });

      // Send token in response
      generateToken(user, 201, res);
    } else {
      // If existing user found, return error response
      const message =
        existingUser.username === username
          ? "User with this username already exists"
          : "User with this email already exists";
      return next(new ErrorResponse(message, 401));
    }
  } catch (error) {
    // If an error occurs during user creation or token sending, pass it to the error handler middleware
    next(new ErrorResponse("Internal Server Error", 500));
  }
};

//-------------------------------------------------------------------------------//
//                          :: LOGIN FUNCTION ::                                 //
//-------------------------------------------------------------------------------//
export const login = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new ErrorResponse("Please provide an email and password", 400));
  }

  try {
    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return next(new ErrorResponse("Invalid Credentials", 401));
    }

    const isMatchedPassword = await user.matchPassword(password);

    if (!isMatchedPassword) {
      return next(new ErrorResponse("Password do not match", 401));
    }

    // Corrected order of parameters: user, res, statusCode
    generateToken(user, 200, res);
  } catch (error) {
    return next(new ErrorResponse("Internal Server Error", 500));
  }
};
