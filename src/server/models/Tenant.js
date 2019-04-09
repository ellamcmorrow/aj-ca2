//mongoose allows us to work with relationships
const Tenant = require('../models/Tenant.js');
const mongoose = require('mongoose');

const TenantSchema = mongoose.Schema({
  name: String,
  body: String,
  advert_id : { type: mongoose.Schema.Types.ObjectId, ref: 'Advert' }
});

module.exports = mongoose.model('Tenant', TenantSchema);
