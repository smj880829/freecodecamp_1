var express = require('express');
var router = express.Router();
var db = require('../Mongoconnector/find')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('admins/index');
});

router.get('/find', function(req, res, next) {
  db.find({},function(re){
    res.render('admins/find_result',re );
  })
});

module.exports = router;
