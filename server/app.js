const express = require("express");
const cors = require('cors');

const app = express();
//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


// import routes
const userRoute = require("./routes/userRoute");
const taskRoute = require("./routes/taskRoute");

// routes management
app.use("/user", userRoute);
app.use("/task", taskRoute);

module.exports = app;
