//mongoose allows us to work with relationships
const mongoose = require('mongoose');

const HunterSchema = mongoose.Schema({
  name: String,
  description: String,
  picture: String
});

module.exports = mongoose.model('Hunter', HunterSchema);
