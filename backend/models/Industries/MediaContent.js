const mongoose = require('mongoose');

// Define the schema for media content
const mediaContentSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true
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
    required: true
  },
  isHtml: {
    type: Boolean,
    default: false
  },
  items: {
    type: [String],
    required: function() { return this.type === 'list'; }
  }
});

// Create the model from the schema
module.exports = mongoose.model('MediaContent', mediaContentSchema);
