const app = require("../index");

require("./cors")(app.server);
require("./auth")(app.server);
