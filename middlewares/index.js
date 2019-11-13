module.exports = function(server) {
  require("./cors")(server);
  require("./gql")(server);
};
