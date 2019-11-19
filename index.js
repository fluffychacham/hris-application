const express = require("express");
const server = express();
exports.server = server;
require("dotenv").config();

// Config
require("./config/passport");

// Middlewares
require("./middlewares");

// Routes
server.use("/", require("./routes"));

const port = process.env.PORT || 5000;
server.listen(port, () => {
  const serverRunMsg = `Server is active and listening on http://127.0.0.1:${port}`;
  console.log(serverRunMsg);
});
