const apiResponse = require("../../helpers/apiResponse"),
  passport = require("passport");

const validationError = "Something went wrong!",
  registerError = "Register not complete!",
  token = "some token";

exports.Register = (req, res, next) => {
  passport.authenticate("register", (err, user, info) => {
    if (err) {
      return apiResponse.error(res, err);
    }
    if (info !== undefined) {
      return apiResponse.validationError(res, validationError);
    } else {
      if (user) {
        return apiResponse.success(res, token);
      }
      return apiResponse.unauthorized(res, registerError);
    }
  })(req, res, next);
};
