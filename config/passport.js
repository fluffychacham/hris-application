// Passport Local and Passport
const bcrypt = require("bcryptjs");
const passport = require("passport"),
  local = require("passport-local"),
  jwtStrategy = require("passport-jwt").Strategy,
  jwtExtract = require("passport-jwt").ExtractJwt;

const User = require("../models/users/users.model");

const jwtSecret = process.env.JWT_SECRET;

passport.use(
  "login",
  new local(
    {
      usernameField: "email",
      passwordField: "password",
      session: false
    },
    async (email, password, done) => {
      try {
        let userExists = await User.query()
          .where("email", email)
          .where("password", password);

        if (userExists.length > 0) {
          return done(null, true);
        } else {
          return done(null, false);
        }
      } catch (err) {
        console.log(err);
        return done(null, false);
      }
    }
  )
);
passport.use(
  "register",
  new local(
    {
      usernameField: "email",
      passwordField: "password",
      session: false
    },
    (email, password, done) => {
      try {
        // TODO find user in the database if it exists
        // TODO if user does not exist, store user info to database
        // TODO hash password with bcrypt and store encrypted password to database
      } catch (err) {
        done(err);
      }
    }
  )
);

const jwtOptions = {
  jwtFromRequest: jwtExtract.fromAuthHeaderAsBearerToken(),
  secretOrKey: jwtSecret
};

passport.use(
  "jwt",
  new jwtStrategy(jwtOptions, (jwtPayload, done) => {
    try {
      // NOTE: use User email as jwt payload
      // TODO find user if exists from jwt payload
    } catch (err) {
      done(err);
    }
  })
);
