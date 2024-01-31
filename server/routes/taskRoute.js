const express = require("express");
const {
  getAll,
  addTask,
  updateTask,
} = require("../controllers/taskController");
const routes = express.Router();

routes.post("/addtask", addTask);
routes.get("/alltasks", getAll);
routes.put("/updatetask/:id", updateTask);

module.exports = routes;
