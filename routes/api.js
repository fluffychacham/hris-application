const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json({ message: "you are in API" });
});

module.exports = router;
