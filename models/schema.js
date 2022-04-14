const mongodb = require("mongodb");
const { stringify } = require("querystring");

const Schema = mongodb.schema;

const digitalStoryTellingSchema = new Schema({
  name: string
  

});

const DST = mongodb.model("DigitalStoryTelling", digitalStoryTellingSchema);

module.exports = DST;