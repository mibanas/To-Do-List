const express = require("express");
const { getAll } = require("../controllers/taskController");

const routes = express.Router();

routes.get("/alltasks", getAll);

module.exports = routes;
