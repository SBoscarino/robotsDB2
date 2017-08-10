//provide schema for registration
const mongoose = require('mongoose');


//wireframe for username and password
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  address: {
    city: { type: String, required: true},
    country: {type: String, required: true}
  },
  company: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  university: {
    type: String,
    required: true
  },
  skills: {
    type: String,
    required: true
  }

})

const User = mongoose.model('User', userSchema);

module.exports = User;
