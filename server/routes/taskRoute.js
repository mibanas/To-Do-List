const express = require("express");
const {getAll, addTask } = require('../controllers/taskController')

routes.post('/addtask', addTask)
routes.get("/alltasks", getAll);

module.exports = routes;
