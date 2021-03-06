var express = require('express'),
    app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
var mongoose = require('mongoose');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

//serve static files from public folder
app.use(express.static(__dirname + '/public'));

//
app.use('/vendor', express.static(__dirname + '/bower_components'));

var controllers = require('./controllers');


//HTML endpoint
app.get('/', function homepage (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

//JSON API Endpoints
app.get('/api', controllers.api.index);

app.get('/api/locations', controllers.locations.index);

app.get('/api/locations/:id', controllers.locations.show);

app.post('/api/locations', controllers.locations.create);

app.delete('/api/locations/:id', controllers.locations.destroy);

app.put('/api/locations/:id', controllers.locations.update);

app.get('/api/locations/:id/info', controllers.locations.info);

//listen on port 3000
app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
