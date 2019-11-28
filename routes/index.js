const router = require("express").Router(),
  apiResponse = require("../helpers/apiResponse");

router.use("/user", require("./user"));

router.use("/dashboard", require("./dashboard"));

router.use("/", (req, res, next) => {
  apiResponse.unauthorized(res, "Not Found");
});


module.exports = router;
