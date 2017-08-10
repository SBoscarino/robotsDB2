//routes
const router = require('express').Router();
const parser = require('body-parser');
const User = require('../models/user');



//get pages
router.get('/', function(req, res){
  res.render('index');
});

router.get('/login', function(req, res){
  res.render('login');
  });

router.get('/register', function(req, res){
  res.render('register');
  });

router.get('/directory', function(req, res){
  res.render('directory');
  });

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/login');
})

//handling posts
router.post('/register', (req, res) => {
  console.log("post @ routes from registration", req.body)
  res.render('./directory')
});



module.exports = router;
