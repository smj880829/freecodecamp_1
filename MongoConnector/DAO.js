var mongo = require('mongodb').MongoClient
var db_Config = require('./Conf')

function find(filter,callback){
  mongo.connect(db_Config.url,function(err,db){
    if (err) throw err
    var parrots = db.collection('test')
    parrots.find(filter).toArray(function(err, docs) {
      if (err) throw err
      db.close()
      callback(docs)})
})
}

function insert(query,callback){
  mongo.connect(db_Config.url,function(err,db){
    if (err) throw err
    var parrots = db.collection('test')
    parrots.insert(query,function(err) {
      if (err) throw err
      db.close()})
})
}


exports.find = find;
exports.insert = insert;
