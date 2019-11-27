const router = require("express").Router();

router.use("/company", require("./company"));
router.use("/employees", require("./employees"));
router.use("/permissions", require("./permissions"));

module.exports = router;
