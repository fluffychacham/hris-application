const apiResponse = require("../../helpers/apiResponse"),
  jwt = require("jsonwebtoken"),
  passport = require("passport"),
  jwtSecret = process.env.JWT_SECRET,
  router = require("express").Router();

router.get("/", (req, res, next) => {
  passport.authenticate("login", (err, user, info) => {
    if (err) {
      console.log(err);
    }
    if (info !== undefined) {
      console.log(info.message);
      apiResponse.success(res, info.message);
    } else {
      req.logIn(user, err => {
        // NOTE: add username to jwt payload
        // TODO check user if exist, if exists then send message and token to client
      });
    }
  })(req, res, next);
  res.json({ message: "You are in login" });
});

module.exports = router;
