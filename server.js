var express = require('express');
var app = express();
var logger = require('morgan');
var bodyParser = require('body-parser');

var PORT = process.env.PORT || 3000;

//db config

app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(express.static(__dirname + "/public"));
app.use('/public', express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/public/views"));
app.use('/bower_components', express.static(__dirname + "/bower_components"));

var routes = require('./routes/index');
app.use('/', routes);

app.listen(PORT, function(req, res) {
  console.log("App listening on PORT:" + PORT);
});
