// Passport Local and Passport
const bcrypt = require("bcryptjs");
const passport = require("passport"),
  local = require("passport-local"),
  jwt = require("jsonwebtoken"),
  jwtStrategy = require("passport-jwt").Strategy,
  jwtExtract = require("passport-jwt").ExtractJwt;

const User = require("../models/users/users.model");

const signOptions = {
  expiresIn: "24h",
  algorithm: "HS256"
};
const jwtOptions = {
  jwtFromRequest: jwtExtract.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET,
  jsonWebTokenOptions: signOptions
};

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
            // Password match
            let token = jwt.sign(
              { email: email },
              jwtOptions.secretOrKey,
              signOptions
            );
            return done(null, { token: token });
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
              return done(null, false);
            }
            let insertUser = await User.query().insert({
              email: email,
              password: hash
            });
            if (insertUser instanceof User) {
              return done(null, true);
            }
          } catch (err) {
            return done(null, false);
          }
        });
      } catch (err) {
        return done(null, false);
      }
    }
  )
);

passport.use(
  "jwt",
  new jwtStrategy(jwtOptions, async (jwtPayload, done) => {
    try {
      // NOTE: use User email as jwt payload
      // TODO find user if exists from jwt payload
      let userExists = await User.query().where("email", jwtPayload.email);
      if (userExists.length > 0) {
        done(null, true);
      }
      done(null, false);
    } catch (err) {
      done(null, false);
    }
  })
);
