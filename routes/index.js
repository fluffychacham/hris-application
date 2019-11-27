const router = require("express").Router(),
  apiResponse = require("../helpers/apiResponse");

router.get("/", (req, res, next) => {
  res.json({ message: "You are in Home" });
});

router.use("/user", require("./user/index"));

router.use("/api", require("./api"));

router.use("/dashboard", require("./dashboard"));

router.use("/", (req, res, next) => {
  apiResponse.unauthorized(res, "Not Found");
});

module.exports = router;
