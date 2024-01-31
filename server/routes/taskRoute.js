const express = require("express");
const { addTask } = require('../controllers/taskController')

const routes = express.Router();

routes.get('')
routes.post('/addtask', addTask)

module.exports = routes;