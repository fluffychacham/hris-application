const express = require("express");
const server = express();
require("dotenv").config();

// Models
require("./models/mongoose");

// Middlewares
require("./middlewares")(server);

// Routes
require("./routes")(server);

const port = process.env.PORT || 5000;
server.listen(port, () => {
  const serverRunMsg = `Server is active and listening on http://127.0.0.1:${port}`;
  console.log(serverRunMsg);
});

module.exports = server;
