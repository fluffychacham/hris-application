const router = require("express").Router(),
  { Company } = require("../../controllers/dashboard/company");

router.get("/", Company);

module.exports = router;
