const authService = require("../services/authService.js");

const register = async (req, res) => {
  try {
    const userData = req.body;
    const user = await authService.registerUser(userData);

    res.status(201).json({
      message: "User Registered Successfully",
      userId: user,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const login = async (req, res) => {
  try {
    const userData = req.body;
    const { token, userId } = await authService.loginUser(userData);
    res
      .status(200)
      .json({ message: "user logged in succesfully", token, userId });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { register, login };
