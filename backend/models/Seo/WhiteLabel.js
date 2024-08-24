const mongoose = require('mongoose');

const WhiteLabelSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['header', 'paragraph', 'link'],
    required: true
  },
  level: {
    type: Number,
    enum: [1, 2, 3], 
  },
  text: {
    type: String,
    required: true
  },
  className: {
    type: String,
    required: true
  },
  href: {
    type: String
  }
}, { timestamps: true });

const WhiteLabel = mongoose.model('WhiteLabel', WhiteLabelSchema);

module.exports = WhiteLabel;