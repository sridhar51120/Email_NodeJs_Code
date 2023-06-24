const express = require("express");
const mongoose = require("mongoose");
const coolieSession = require("cookie-session");
const keys = require("./config/keys");
const passport = require("passport");
require("./models/User");
require("./services/passport");

mongoose.connect(keys.mongoURI);

const app = express();

//Cookies

app.use(
  coolieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, // Cookie Age
    keys: [keys.cookieKey],
  })
);

app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);

// const PORT = process.env.PORT || 5000;
app.listen(5000);
