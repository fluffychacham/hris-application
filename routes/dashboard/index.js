const router = require("express").Router(),
  { Auth } = require("../../helpers/passportResponse");

router.use("/company", Auth, require("./company"));
router.use("/employees", Auth, require("./employees"));
router.use("/permissions", Auth, require("./permissions"));

module.exports = router;
