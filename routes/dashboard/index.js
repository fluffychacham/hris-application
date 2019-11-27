const router = require("express").Router(),
  passport = require("passport");

router.use(
  "/company",
  passport.authenticate("jwt", { session: false }),
  require("./company")
);
router.use(
  "/employees",
  passport.authenticate("jwt", { session: false }),
  require("./employees")
);
router.use(
  "/permissions",
  passport.authenticate("jwt", { session: false }),
  require("./permissions")
);

module.exports = router;
