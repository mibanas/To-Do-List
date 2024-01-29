const server = require("./app");
require("./config/connect");
require("dotenv").config();

server.listen(process.env.PORT, () => {
  console.log("Server is running on port : " + process.env.PORT);
});
