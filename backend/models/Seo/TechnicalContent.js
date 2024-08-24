const mongoose = require('mongoose');

const technicalContentSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    enum: ['header', 'subheader', 'paragraph'],
  },
  text: {
    type: String,
    required: function() {
      return this.type !== 'list'; // `text` is not required for 'list' type
    },
  },
});

module.exports = mongoose.model('TechnicalContent', technicalContentSchema);
