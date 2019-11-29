const passport = require("passport");
exports.Auth = (req, res, next) => {
  passport.authenticate("jwt", { session: false })(req, res, next);
};
