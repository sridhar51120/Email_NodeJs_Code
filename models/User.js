const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const { Schema } = mongoose; --> Another form of Coding in Line => 2

const userSchema = new Schema({
  googleId: String
});

mongoose.model('users',userSchema); // Create User Schemas
