const express = require('express');
const passport = require('passport');
const GoogleSttrategy = require('passport-google-oauth20').Strategy;


const app = express();


passport.use(new GoogleSttrategy());

// https://console.cloud.google.com/apis/dashboard?pli=1&project=eng-nuance-386407 => API keys

const PORT = process.env.PORT || 5000
app.listen(5000);

