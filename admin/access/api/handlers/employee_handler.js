var MongoService = require('../services/mongo_service');
var mongo = new MongoService();


function EmployeeHandler() {}

// EmployeeHandler.prototype.add = function(req, res) {
// 	var employeeData = req.body;
// 	console.log('adding employee...');
// 	mongo.add();
// };

EmployeeHandler.prototype.show = function(req, res) {
	console.log('EmployeeHandler.show executed');
	var model = req.query.model || "Employee";
	mongo.show(model, function(err, data){
		if (err) {
			console.error(err);
			res.status(500).json({error: err, message: err.message, stack: err.stack});
		}
		res.status(200).send(data);
	});
};

module.exports = EmployeeHandler;	