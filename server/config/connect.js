const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(process.env.URL_MONGODB, {
    dbname: process.env.DB_NAME,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => {
    console.log("Failed to connect to MongoDB", err);
  });

module.exports = mongoose;
