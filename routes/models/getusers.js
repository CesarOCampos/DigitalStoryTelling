const mongoose = require('mongoose')
const User = require('./User')
const db = require('../config/keys').MongoURI

mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
	.then(() => console.log("Connected"))
	.catch((err) => console.log("Error: " + err))


User.find({}, function(err, result) {
    if (err) {
      console.log(err);
    } else {
      console.log(result[3].videos[0].video1)
    }
  });