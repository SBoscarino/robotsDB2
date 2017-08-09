const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const data = require('./data');

mongoose.Promist = global.Promise;

const app = express();

app.use(express.static('public'));

const mustache = mustacheExpress();
mustache.cache = null;
app.engine('mustache', mustache);
app.set('view engine', 'mustache');

app.use(bodyParser.urlencoded({ extended : false }));

app.use(require('/routes/routes.js'));

let url = 'mongodb://localhost:27017/robotsData';

mongoose.connect(url, { useMongoClient: true }).then(function(){console.log("connected to database for robotsdb2")});

app.listen(3500, function(){
  console.log("App is listening for you on port 3500.")
});
