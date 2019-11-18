const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json({ message: "You are in User" });
});

router.use("/login", require("./login"));
router.use("/register", require("./register"));
router.use("/delete", require("./delete"));
router.use("/update", require("./update"));
router.use("/find", require("./find"));

module.exports = router;
