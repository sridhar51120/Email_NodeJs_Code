const express = require('express');
const passport = require('passport');
const fs = require('fs');

const filePath = 'E:/AppConfig.json';
fs.readFile(filePath, 'utf8', (err, data) => {
    try {
      const jsonData = JSON.parse(data);
      const Google_site_api_keys = jsonData.Google_site_api_keys;
      console.log('Data',Google_site_api_keys );

    } catch (err) {
      console.error('Error parsing JSON:', err);
    }
  });

const GoogleSttrategy = require('passport-google-oauth20').Strategy;
passport.use(new GoogleSttrategy());

const app = express();



// const PORT = process.env.PORT || 5000
// app.listen(5000);

