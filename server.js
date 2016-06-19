// server.js

// modules ==============================================
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

// configuration =======================================

// config files
var db = require('./config/db');

// set the port
var port = process.env.PORT || 8080;

// connect to the mongodb database
// uncomment once you have added your credentials to the config file
 mongoose.connect(db.url);

// get all data of the body of a POST
// parse application/json
app.use(bodyParser.json());

// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));

// parse application/x0www0form-urlencoded
app.use(bodyParser.urlencoded({ extended: true}));


// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override'));

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public'));

// routes ============================================

require('./app/routes')(app); // configure our routes


// start app =========================================
// startup the app at http://localhost:8080
app.listen(port);

// write to the server console
console.log('The magic happens on port ' + port);

// expose the application
exports = module.exports = app;

