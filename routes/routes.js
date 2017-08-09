//routes
const router = require('express');
const parser = require('body-parser');


router.get('/', function(req, res){
  res.render('index', {users : results});
});

router.get('/login', function(req, res){
  res.render('login');
  });

router.get('/newuser', function(req, res){
  res.render('newuser');
  });

router.get('/directory', function(req, res){
  res.render('directory');
  });

//gets then renders a robot to the detail.mustache page.
//look through my database collection
router.get('/detail/:id', function(req, res){
  db.collection('users').find({id: Number(req.params.id)}).toArray(function(err, results){
    res.render('detail', results[0]);
  });
});

// let db;
//
// // res.render renders to the page 'all', in views.
// // the get creates the lookingforwork pages.
// router.get('/unemployed', function(req, res){
//   db.collection('users').find({job : {$type :  10}}).toArray(function(err, results){
//   res.render('index', {users : results});
//   });
// });
//
// // //res.render renders to the page 'employed', in views.
// // //the get creates the employed page.
// router.get('/employed', function(req, res){
//   db.collection('users').find({job : {$type : 2}}).toArray(function(err, results) {
//   res.render('index', {users : results});
//   });
// });
