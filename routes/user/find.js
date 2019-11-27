const apiResponse = require("../../helpers/apiResponse");
const router = require("express").Router();

router.get("/", (req, res, next) => {
  apiResponse.success(res, "You are in find!");
});
module.exports = router;
