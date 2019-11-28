const router = require("express").Router(),
  apiResponse = require("../helpers/apiResponse");

router.use("/user", require("./user/index"));

router.use("/dashboard", require("./dashboard/index"));

router.use("/", (req, res, next) => {
  apiResponse.unauthorized(res, "Not Found");
});


module.exports = router;
