const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");
const mongoose = require("mongoose");

const User = mongoose.model("users");

// passport setup
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientId,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback"
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({
        googleId: profile.id
      }).then(existingUser => {
        if (existingUser) {
          // already have recored
        } else {
          // Don't have a user with that google id, save it
          new User({
            googleId: profile.id
          }).save();
        }
      });
    }
  )
);
