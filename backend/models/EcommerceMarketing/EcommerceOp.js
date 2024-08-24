const mongoose = require('mongoose');

const contentItemSchema = new mongoose.Schema({
  text: { type: String, required: false }
});

const ecommerceOpSchema = new mongoose.Schema({
  type: { type: String, required: true },
  level: { type: Number, required: false },
  text: { type: String, required: false },
  className: { type: String, required: true },
  items: [contentItemSchema]
});

const EcommerceOp = mongoose.model('EcommerceOp', ecommerceOpSchema);

module.exports = EcommerceOp;
