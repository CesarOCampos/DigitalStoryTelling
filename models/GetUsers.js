const mongoose = require("mongoose");
const User = require("../models/UserSchema");
const db = require("../models/Key").MongoURI;

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected, 100%!"))
  .catch((error) => console.log("Error: " + error));

User.find({}, (err, result) => { (error) ? console.log(error) :console.log("rip")}); //console.log(result[i].videos[i]