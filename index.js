const express = require("express");
require('./services/passport'); // In this Directory Nothing code will retuns so no need of  creating and assigning the const variables
const mongoose = require('mongoose');
const app = express();
const keys =  require('./config/keys');
require('./routes/authRoutes')(app);
require('./models/User');

mongoose.connect(keys.mongoURI);
app.listen(5000);
