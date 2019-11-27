const router = require("express").Router(),
  { Login } = require("../../controllers/users/login");

router.post("/", Login);

module.exports = router;
