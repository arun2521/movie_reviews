const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const registerUser = async (userData) => {
  try {
    const existedUser = await User.findOne({ email: userData.email });
    if (existedUser) {
      throw new Error("user already exists");
    }

    const user = new User(userData);
    const salt = await bcrypt.genSalt(10);
    const hassedPassword = await bcrypt.hash(userData.password, salt);

    user.password = hassedPassword;
    await user.save();

    return { user };
  } catch (err) {
    throw err;
  }
};

const loginUser = async (userData) => {
  try {
    const { email, password } = userData;
    const user = await User.findOne({ email });

    if (!user) {
      throw new Error("user not found");
    }

    const isPasswordMatch = await user.comparePassword(password);

    if (!isPasswordMatch) {
      throw new Error("invalid login credentials");
    }

    const token = jwt.sign({ id: user._id },"SECRET"); //process.env.SECRET
    return { user, token };
  } catch (err) {
    throw err;
  }
};

module.exports = { registerUser, loginUser };
