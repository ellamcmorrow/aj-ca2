const mongoose = require('mongoose');
//mongoose allows us to work with relationships 
const UserSchema = mongoose.Schema({
  name: String,
  picture: String
});

module.exports = mongoose.model('User', UserSchema);
