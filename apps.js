const express = require('express');
const mustacheExpress = require('mustache-express');
const app = express();
const data = require('./data');
const mongoClient = require('mongodb').MongoClient; //first thing -- require it.

app.use(express.static('public'));

app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

//render index page in views
//
app.get('/', function(req, res){
  db.collection('users').find({}).toArray(function(err, results) {
  res.render('index', {users : results});
  });
  console.log(data);
})

//gets then renders a robot to the detail.mustache page.
//look through my database collection
app.get('/detail/:id', function(req, res){
  db.collection('users').find({id: Number(req.params.id)}).toArray(function(err, results){
    res.render('detail', results[0]);
  });
});

let db;

// res.render renders to the page 'all', in views.
// the get creates the lookingforwork pages.
app.get('/unemployed', function(req, res){
  db.collection('users').find({job : {$type :  10}}).toArray(function(err, results){
  res.render('index', {users : results});
  });
});

// //res.render renders to the page 'employed', in views.
// //the get creates the employed page.
app.get('/employed', function(req, res){
  db.collection('users').find({job : {$type : 2}}).toArray(function(err, results) {
  res.render('index', {users : results});
  });
});


mongoClient.connect('mongodb://localhost:27017/robotsData', function(err, database){
  if(err){
    console.log("You have an error!", err);
  } else {
    db = database;
    app.listen(3500, function(){
      console.log("App is listening for you on port 3500.")
    });
  }
}); // (mongodb step 2. accepts the database and an error if one is passed.)
