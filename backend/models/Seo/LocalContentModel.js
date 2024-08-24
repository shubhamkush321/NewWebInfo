const mongoose = require('mongoose');

const localContentSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['header', 'paragraph', 'link'],
    required: true
  },
  level: {
    type: Number,
    enum: [1, 2, 3], // Applicable for headers
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

const LocalContent = mongoose.model('LocalContent', localContentSchema);

module.exports = LocalContent;