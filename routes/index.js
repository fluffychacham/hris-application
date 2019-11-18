module.exports = function(server) {
  require("./api")(server);
  require("./dashboard")(server);
  require("./deleteUser")(server);
  require("./findUser")(server);
  require("./registerUser")(server);
  require("./loginUser")(server);
  require("./updateUser")(server);
};
