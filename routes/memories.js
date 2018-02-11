var express = require('express');
var router = express.Router();

const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = process.env.MONGODB_URI;

// Database Name
const dbName = process.env.MONGODB_NAME;

/* GET users listing. */
router.get('/', function(req, res, next) {

  // Use connect method to connect to the server
  MongoClient.connect(url, function(err, client) {
    const db = client.db(dbName);
    const data = db.collection('memories').find().toArray((err, docs) => res.status(200).json(docs));
  });
});

module.exports = router;
