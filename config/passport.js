// Passport Local and Passport
import bcrypt from "bcrypt";

const passport = require("passport"),
  local = require("passport-local"),
  jwtStrategy = require("passport-jwt").Strategy,
  jwtExtract = require("passport-jwt").ExtractJwt;

const jwtSecret = process.env.JWT_SECRET;

passport.use(
  "login",
  new local(
    {
      usernameField: "email",
      passwordField: "password",
      session: false
    },
    (email, password, done) => {
      try {
        // TODO find user in the database if it exists
      } catch (err) {
        done(err);
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
  jwtFromRequest: jwtExtract.fromAuthHeaderWithScheme("Bearer"),
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
