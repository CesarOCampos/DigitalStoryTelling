const mongodb = require("mongodb");

const Schema = mongodb.schema;

const digitalStoryTellingSchema = new Schema({

});

const DST = mongodb.model("DigitalStoryTelling", digitalStoryTellingSchema);

module.exports = DST;