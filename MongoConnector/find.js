var mongo = require('mongodb').MongoClient
var db_Config = require('./Conf')

function find(filter,callback){
  mongo.connect(db_Config.url,function(err,db){
    if (err) throw err
      var parrots = db.collection('test')
      parrots.findOne(filter,function(err, docs) {
        if (err) throw err
        db.close()
        callback(docs)
      })
  })
}

exports.find = find;
