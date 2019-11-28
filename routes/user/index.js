const router = require("express").Router(),
  passport = require("passport"),
  apiResponse = require("../../helpers/apiResponse");

router.use("/login", require("./login"));
router.use("/register", require("./register"));

module.exports = router;
