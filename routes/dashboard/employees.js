const router = require("express").Router(),
  { Employees } = require("../../controllers/dashboard/employees");

router.get("/", Employees);

module.exports = router;
