module.exports = function(server) {
  require("./deleteUser")(server);
  require("./findUser")(server);
  require("./registerUser")(server);
  require("./loginUser")(server);
  require("./updateUser")(server);
};
