// models/ElectronicsContent.js
const mongoose = require('mongoose');

const electronicsContentSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  level: {
    type: Number,
    required: function() { return this.type === 'heading'; }
  },
  text: {
    type: String,
    required: function() { return this.type === 'paragraph' || this.type === 'heading'; }
  },
  className: {
    type: String,
    required: true,
  },
  items: {
    type: [String],
    required: function() { return this.type === 'list'; }
  }
});

module.exports = mongoose.model('ElectronicsContent', electronicsContentSchema);
