module.exports = function(server) {
  require("./api")(server);
  require("./dashboard")(server);
};
