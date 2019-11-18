const apiResponse = require("../../helpers/apiResponse");
const passport = require("passport");
const router = require("express").Router();

router.get("/", (req, res, next) => {
  passport.authenticate("jwt", { session: false }, (err, user, info) => {
    if (err) {
      console.log(err);
    }
    if (info !== undefined) {
      console.log(info.message);
      apiResponse.success(res, info.message);
    } else {
      console.log("user found");
      res.status(200).send({
        auth: true,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        companyName: user.companyName,
        domainName: user.domainName,
        role: user.role
      });
    }
  })(req, res, next);
});
module.exports = router;
