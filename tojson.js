//for getting the data in our files here to the mongo database.
const data = require('./data')

data.users.forEach(function(user){
  console.log(JSON.stringify(user));
});
