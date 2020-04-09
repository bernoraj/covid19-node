const express = require('express'),
      router = express.Router(),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose'),
      config = require('../DB');

      
var data;
mongoose.Promise = global.Promise;

router.get('/', function(req, res, next)
{
    mongoose.connect(config.DB, { useUnifiedTopology: true,useNewUrlParser: true }).then(
        () => {console.log('Database is connected') },
        err => { console.log('Can not connect to the database'+ err)}
      );

    var connection=mongoose.connection;  
    connection.on('error', console.error.bind(console, 'connection error:'));
    connection.once('open', function () {

    connection.db.collection("covid_coll", function(err, collection){
        collection.find({'statecode':'TN'}).toArray(function(err, data){
            if (err) throw err;
            res.json(data);
            connection.close(); 
            //console.log(data); // it will print your collection data
        })
    }); 

    });
});

module.exports = router;