const modelTask = require("../models/taskModel");

exports.getAll = async (req, res) => {
  try {
    const tasks = await modelTask.find();
    res.status(200).send(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
