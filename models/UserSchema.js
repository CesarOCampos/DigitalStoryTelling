const mongoose = require("mongoose");

const Schema = mongoose.schema;

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: {type: String, required: true},
  username: {type: String},
  videos: {type: Array},
  isAdmin: {type: Boolean},
  myvideos: {type: Array},
});

const User = mongoose.model('User', UserSchema);

module.exports = UserSchema;