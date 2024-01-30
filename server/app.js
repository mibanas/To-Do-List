const express = require("express");

const app = express();
//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// import routes
const userRoute = require("./routes/userRoute");

// routes management
app.use("/user", userRoute);

module.exports = app;
