var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('admins/index');
});

router.get('/modal_result', function(req, res, next) {
  res.render('admins/index');
});

module.exports = router;
