const router = require("express").Router(),
  { Register } = require("../../controllers/users/register");

router.post("/", Register);
module.exports = router;
