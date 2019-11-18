import passport from "passport";
import apiResponse from "../helpers/apiResponse";

module.exports = server => {
  server.post("/registerUser", (req, res, next) => {
    passport.authenticate("register", (err, user, info) => {
      if (err) {
        console.log(err);
      }
      if (info !== undefined) {
        console.log(info.message);
        res.send(info.message);
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
};
