const mongoose = require('mongoose');

const amazonContentSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['heading', 'paragraph', 'list'],
    required: true
  },
  level: {
    type: Number,
    min: 1,
    max: 6
  },
  text: {
    type: String,
    required: true
  },
  className: {
    type: String,
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('AmazonContent', amazonContentSchema);
