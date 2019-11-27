const router = require("express").Router(),
  { Permissions } = require("../../controllers/dashboard/permissions");

router.get("/", Permissions);

module.exports = router;
