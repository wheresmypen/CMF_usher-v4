var mongoose = require('mongoose');
var db = mongoose.connection;
var Schema = mongoose.Schema;
var _ = require('lodash');

var Models = require('../models');

function MongoService(config) {
	this.config = config || {};

	_.defaults(this.config, {
		dbName: 'nosey',
		host: 'localhost'
	});

	var dbUrl = 'mongodb://' + this.config.host + '/' + this.config.dbName;
	console.log('dbUrl: ', dbUrl);
	mongoose.connect(dbUrl);
}

MongoService.prototype.show = function(model, callback) {
	console.log('MongooseService.show executed');

	Models[model].find({}, function(err, results) {
		if (err) return callback(err);
		return callback(null, results);
	})

	// body...
};


module.exports = MongoService;