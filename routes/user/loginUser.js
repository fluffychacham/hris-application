import jwt from "jsonwebtoken";
import passport from "passport";
import apiResponse from "../helpers/apiResponse";

const jwtSecret = process.env.JWT_SECRET;

module.exports = server => {
  server.get("/loginUser", (req, res, next) => {
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
  });
};
