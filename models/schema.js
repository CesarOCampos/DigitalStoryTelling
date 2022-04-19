const mongodb = require("mongodb");
// const mongoose = require("mongoose");
const { stringify } = require("querystring");

const Schema = mongodb.schema;

const digitalStoryTellingSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: {type: String, required: true},
  username: {type: String},
  videos: {type: Array},
  isAdmin: {type: Boolean},
  myvideos: {type: Array},
});

const DST = mongodb.model("DigitalStoryTelling", digitalStoryTellingSchema);

module.exports = DST;