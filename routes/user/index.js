const router = require("express").Router(),
  passport = require("passport"),
  apiResponse = require("../../helpers/apiResponse");

router.use("/login", require("./login"));
router.use("/register", require("./register"));

router.use(
  "/find",
  passport.authenticate("jwt", { session: false }),
  require("./find")
);
router.use(
  "/delete",
  passport.authenticate("jwt", { session: false }),
  require("./delete")
);
router.use(
  "/update",
  passport.authenticate("jwt", { session: false }),
  require("./update")
);

module.exports = router;
