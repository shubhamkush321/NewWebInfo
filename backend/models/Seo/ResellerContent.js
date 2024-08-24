const mongoose = require('mongoose');

const resellerContentSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    enum: ['header', 'subheader', 'paragraph', 'section', 'list'],
  },
  text: {
    type: String,
    required: function () {
      return this.type !== 'list'; // `text` is not required for 'list' type
    },
  },
  title: {
    type: String,
    required: function () {
      return this.type === 'section'; // `title` is required for 'section' type
    },
  },
  items: {
    type: [String],
    required: function () {
      return this.type === 'list'; // `items` is required for 'list' type
    },
  },
});

module.exports = mongoose.model('ResellerContent', resellerContentSchema);
