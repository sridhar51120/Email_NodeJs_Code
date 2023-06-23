const passport = require("passport");
const keys = require("../config/keys");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

passport.use(
    new GoogleStrategy(
      {
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: "/auth/google/callback",
      },
      (accessToken, refreshToken, profile, done) => {
        //Identifying The User Information and Saved into the Database
        console.log("Access Token", accessToken);
        console.log("refreshToken", refreshToken);
        console.log("profile", profile);
      }
    )
  );
  