const mongoose = require('mongoose');

const lawFirmContentSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,  // Type is required
    enum: ['header', 'paragraph', 'list'], // Valid types
  },
  text: {
    type: String,
    required: function() {
      return this.type !== 'list'; // Text is required if not a list
    }
  },
  level: {
    type: Number,
    required: function() {
      return this.type === 'header'; // Level is only required for headers
    }
  },
  className: String,
  title: {
    type: String,
    required: function() {
      return this.type === 'list'; // Title is required for lists
    }
  },
  items: {
    type: [String],
    required: function() {
      return this.type === 'list'; // Items are required for lists
    }
  },
  listClassName: String
});

const LawFirmContent = mongoose.model('LawFirmContent', lawFirmContentSchema);

module.exports = LawFirmContent;
