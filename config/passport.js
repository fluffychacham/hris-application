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
        let userExists = await User.query().where("email", email);
        if (userExists.length <= 0) {
          return done(null, false);
        }
        let dbPassword = await User.query()
          .select("user.password")
          .where("email", email);
        bcrypt.compare(password, dbPassword[0].password, (err, res) => {
          if (err) {
            return done(null, false);
          }
          if (res) {
            return done(null, true);
          }
          return done(null, false);
        });
      } catch (err) {
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
    async (email, password, done) => {
      try {
        let userExists = await User.query().where("email", email);
        if (userExists.length > 0) {
          return done(null, false);
        }
        bcrypt.hash(password, 10, async (err, hash) => {
          try {
            if (err) {
              return done(null, err);
            }
            let insertUser = await User.query().insert({
              email: email,
              password: hash
            });
            if (insertUser instanceof User) {
              return done(null, true);
            }
          } catch (err) {
            console.log(err);
            return done(null, false);
          }
        });
      } catch (err) {
        console.log(err);
        return done(null, false);
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
