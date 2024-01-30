const express = require("express");

const app = express();

// import routes 
const userRoute = require('./routes/userRoute')


// routes management
app.use('/user', userRoute)

module.exports = app;