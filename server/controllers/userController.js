const modelUser = require("../models/userModel");
const bcrypt = require("bcrypt");

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const checkUser = await modelUser.findOne({
      email: email,
    });
  } catch (error) {}
};
exports.register = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const checkEmail = await modelUser.findOne({
      email: email,
    });
    if (checkEmail) {
      return res.status(400).json({
        sucess: true,
        message: "User already exists",
      });
    }
    const cryptedPassword = await bcrypt.hash(password, 10);
    const addUser = await modelUser.create({
      username: username,
      email: email,
      password: cryptedPassword,
    });
    return res.status(201).json({
      sucess: true,
      message: "User created successfully",
      data: addUser,
    });
  } catch (error) {
    return res.status(400).json({
      sucess: false,
      message: "Something went wrong",
    });
  }
};
