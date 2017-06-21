const mongoose = require('mongoose');
// added these 2++ because "app" was undefined
const express = require('express');
const app = express();
// +++++++

module.exports.connect = (uri) => {
  mongoose.connect(uri);
  // plug in the promise library:
  mongoose.Promise = global.Promise;


  mongoose.connection.on('error', (err) => {
    console.error(`Mongoose connection error: ${err}`);
    process.exit(1);
  });
  
app.get("/*", function(req, res) {
res.sendFile(__dirname + '/server/static/index.html')
})
  // load models
  require('./user');
};