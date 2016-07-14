var express = require('express');
var router = express.Router();
var db = require('../Mongoconnector/DAO')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('admins/index');
});

router.get('/test', function(req, res, next) {
  db.find({},function(re){
    console.log(re)
    res.render('admins/find_result',{"data":re} );
  })
});

router.post('/find', function(req, res, next) {
  var flter = {};
  if(req.param('filter') != ""){
    var getflter = req.param('filter')
    flter = JSON.parse(getflter);
    }
  db.find(flter,function(re){
    res.send(re );
  })
});

router.post('/insert', function(req, res, next) {
  if(req.param('query') != ""){
    var getquery = req.param('query')
    var query = JSON.parse(getquery);
    db.insert(query,function(re){
      res.send(re );}
    )}
    res.send("insert query!");
});

router.post('/update', function(req, res, next) {
  if(req.param('query') != "" && req.param('filter') != ""){
    var getquery = req.param('query')
    var query = JSON.parse(getquery);
    console.log(query)
    var getfilter = req.param('filter')
    var filter = JSON.parse(getfilter);
    console.log(filter)
    db.update(filter,query,function(re){
      res.send(re );}
    )}
    res.send("insert query!");
});

module.exports = router;
