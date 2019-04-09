//mongoose allows us to work with relationships
const mongoose = require('mongoose');

const AdvertSchema = mongoose.Schema({
  name: String,
  description: String,
  picture: String
});

module.exports = mongoose.model('Advert', AdvertSchema);
