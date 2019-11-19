const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json({ message: "You are in Home" });
});

router.use("/user", require("./user/index"));

router.use("/api", require("./api"));

router.use("/dashboard", require("./dashboard"));

module.exports = router;
