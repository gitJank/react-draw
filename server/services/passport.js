const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('User');

passport.serializeUser((user, done) => {
  console.log('serilize', user.id);
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  console.log('deserial', id);
  User.findById(id).then(user => {
    console.log('found user', user);
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      callbackURL: '/auth/google/callback',
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const existingUser = await User.findOne({ googleId: profile.id });
        if (existingUser) {
          console.log('existing', existingUser);
          return done(null, existingUser);
        }
        const user = await new User({
          googleId: profile.id,
          displayName: profile.displayName
        }).save();
        console.log('new user', user);
        done(null, user);
      } catch (err) {
        console.log('user error', err);
        done(err, null);
      }
    }
  )
);
