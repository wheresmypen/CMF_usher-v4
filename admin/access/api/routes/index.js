var express = require('express');
var router = express.Router();

//handlers
var EmployeeHandler = require('../handlers/employee_handler');
var employeehandler = new EmployeeHandler();

// routes
router.get('/heartbeat', function(req, res) {
	res.send('this is the api');
});


module.exports = router;
