const mongoose = require('mongoose');

const ecommercePpcSchema = new mongoose.Schema({
  type: { type: String, required: true },
  level: { type: Number, required: false },
  text: { type: String, required: false },
  className: { type: String, required: true },
  items: [{
    text: { type: String, required: false }
  }]
});

const EcommercePpc = mongoose.model('EcommercePpc', ecommercePpcSchema);

module.exports = EcommercePpc;
