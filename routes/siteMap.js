// Need to finish route to load SiteMap
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
    res.render('../views/siteMap');
});

module.exports = router;
