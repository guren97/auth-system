import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please enter a username"],
    unique: true,
  },
  user_role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
  email: {
    type: String,
    required: [true, "Please provide an email"],
    unique: true,
    match: [
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please provide a valid email",
    ],
  },
  password: {
    type: String,
    required: [true, "Please enter a password"],
    minlength: [6, "Password must be at least 6 characters long"],
    select: false, // This excludes the password field from query results
  },
  createdAt: {
    type: Date,
    default: () => Date.now(), // Use a function to set the default value dynamically
  },
});

UserSchema.set("toJSON", {
  transform: function (doc, ret) {
    delete ret.password;
    delete ret.createdAt;
    delete ret.updatedAt; // Add this line
    delete ret.__v;
  },
});
//Hash password and create salt before sending to database
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

UserSchema.methods.matchPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

UserSchema.methods.getSignedToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

const User = mongoose.model("User", UserSchema);
export default User;
