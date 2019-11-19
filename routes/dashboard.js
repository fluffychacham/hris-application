const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json({ message: "You are in Dashboard" });
});

module.exports = router;
