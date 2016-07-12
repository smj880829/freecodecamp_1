var mongo = require('mongodb').MongoClient
var db_Config = require('./Conf')

mongo.connect(db_Config.url,function(err,db){
  if (err) throw err
    var parrots = db.collection('test')
    parrots.find(
  ).toArray(function(err, docs) {
      if (err) throw err
      console.log(docs)
      db.close()
    })
})
