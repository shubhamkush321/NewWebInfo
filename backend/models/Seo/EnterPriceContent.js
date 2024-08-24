const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const enterPriceContentSchema = new Schema({
  type: {
    type: String,
    required: true,
    enum: ['header', 'paragraph', 'list'] 
  },
  text: {
    type: String,
    required: function() { return this.type !== 'list'; } 
  },
  className: {
    type: String,
    required: function() { return this.type !== 'list'; } 
  },
  bold: {
    type: [String],
    default: []
  },
  links: {
    type: [{ text: String, href: String }],
    default: []
  },
  items: [{
    text: {
      type: String,
      required: true
    },
    className: {
      type: String,
      default: ''
    }
  }]
});

module.exports = mongoose.model('EnterPriceContent', enterPriceContentSchema);
