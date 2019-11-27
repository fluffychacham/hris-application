const passport = require("passport"),
  apiResponse = require("../../helpers/apiResponse");

const validationError = "Something went wrong!",
  loginError = "Not logged in!",
  token = "some token";

exports.Login = (req, res, next) => {
  return passport.authenticate("login", (err, user, info) => {
    if (err) {
      return apiResponse.error(res, err);
    }
    if (info !== undefined) {
      return apiResponse.validationError(res, validationError);
    }
    if (user) {
      return apiResponse.success(res, token);
    }
    return apiResponse.unauthorized(res, loginError);
  })(req, res, next);
};
