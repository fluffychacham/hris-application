const passport = require("passport");
const apiResponse = require("../../helpers/apiResponse");
const router = require("express").Router();

router.post("/", (req, res, next) => {
  passport.authenticate("register", (err, user, info) => {
    if (err) {
      console.log(err);
    }
    if (info !== undefined) {
      console.log(info.message);
      apiResponse.success(res, info.message);
    } else {
      req.logIn(user, err => {
        const data = {
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email,
          companyName: req.body.companyName,
          domainName: req.body.domainName,
          role: req.body.role
        };
        // TODO check if user exists, if not save to database
      });
    }
  })(req, res, next);
});

router.get("/", (req, res) => {
  res.json({ message: "You are in user Delete" });
});
module.exports = router;
