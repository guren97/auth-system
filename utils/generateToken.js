const generateToken = (user, statusCode, res) => {
  const token = user.getSignedToken();
  res.cookie("jwt", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
    sameSite: "strict",
    maxAge: 10 * 60 * 1000,
  });
  res.status(statusCode).json({ success: true, token });
};

export default generateToken;

// import jwt from "jsonwebtoken";
// const generateToken = (res, userId) => {
//   const token = jwt.sign(
//     { userId },
//     process.env.JWT_SECRET,
//     process.env.JWT_EXPIRE
//   );

//   res.cookie("jwt", token, {
//     httpOnly: true,
//     secure: process.env.NODE_ENV !== "development",
//     sameSite: "strict",
//     maxAge: 10 * 60 * 1000,
//   });
// };

// export default generateToken;
