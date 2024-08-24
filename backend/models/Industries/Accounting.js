const mongoose = require('mongoose');

const contentSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true
  },
  level: {
    type: Number,
    required: false
  },
  text: {
    type: String,
    required: true
  },
  className: {
    type: String,
    required: false
  },
});

module.exports = mongoose.model('AccountingContent', contentSchema);
