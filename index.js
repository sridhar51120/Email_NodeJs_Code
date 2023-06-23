const express = require("express");
require('./services/passport'); // In this Directory Nothing code will retuns so no need of  creating and assigning the const variables

const app = express();

require('./routes/authRoutes')(app);

// const PORT = process.env.PORT || 5000;
app.listen(5000);
