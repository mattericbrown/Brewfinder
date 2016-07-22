var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/brewfinder");

module.exports.Location = require('./location.js');
module.exports.User = require('./user.js');
module.exports.Locations_Types = require('./locations_types.js');
