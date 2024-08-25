const mongoose = require('mongoose');

const flashDataSchema = new mongoose.Schema({
  heading: { type: String, required: true },
  paragraphs: [String],
  listItems: [String]
});

const FlashData = mongoose.model('FlashData', flashDataSchema);

module.exports = FlashData;
