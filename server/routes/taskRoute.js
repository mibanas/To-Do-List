const express = require("express");
const {
  getAll,
  addTask,
  updateTask,
  changeStatus,
  deleteTask
} = require("../controllers/taskController");
const routes = express.Router();

routes.post("/addtask", addTask);
routes.get("/alltasks", getAll);
routes.put("/:id", changeStatus);
routes.put("/deletetask/:id", deleteTask);
routes.put("/updatetask/:id", updateTask);

module.exports = routes;
