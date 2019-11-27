const apiResponse = require("../../helpers/apiResponse"),
  router = require("express").Router();

router.get("/", (req, res, next) => {
  apiResponse.success(res, "You are in update!");
});
module.exports = router;
