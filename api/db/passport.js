const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const User = require("../models/User");

passport.use(
    new localStrategy(
      {
        usernameField: "email",
        passwordField: "password",
      },
      function (email, password, done) {
        User.findOne({ where: { email } })
          .then((user) => {
            if (!user) {
              console.log("User doesn't exist!");
              return done(null, false);
            }
  
            user.hash(password, user.salt).then((hash) => {
              if (hash !== user.password) {
                console.log("Wrong password!");
                return done(null, false);
              }
              return done(null, user);
            });
          })
          .catch(done);
      }
    )
  );
  
  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });
  
  passport.deserializeUser(function (id, done) {
    User.findByPk(id)
      .then((user) => {
        done(null, user);
      })
      .catch(done);
  });
  
  module.exports = passport;