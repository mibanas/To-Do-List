const express = require("express");
const routes = express.Router();
const { login, register } = require("../controllers/userController");
const checkUser = require("../middlewares/userMiddleware");

routes.get("/login", login);
routes.post("/register", checkUser, register);

module.exports = routes;
