const express = require("express");
const passport = require("passport");
const keys = require("./config/keys");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const app = express();

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
    },
    (accessToken) => {
      console.log(accessToken);
    }
  )
);

app.get(
  "/auth/google",
  passport.authenticate("google", {
    //google -> string is a one of the identifiers in statergy of "GoogleStrategy"
    scope: ["profile", "email"], //Accessing Scopes for google to Administratater
  })
);

app.get("/auth/google/callback", passport.authenticate("google"));
const PORT = process.env.PORT || 5000;
app.listen(5000);
