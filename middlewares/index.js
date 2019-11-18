module.exports = function(server) {
  require("./cors")(server);
  require("./jwt")(server);
  require("./auth")(server);
};
