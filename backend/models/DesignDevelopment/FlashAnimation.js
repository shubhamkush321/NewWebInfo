// models/FlashAnimation.js
const mongoose = require('mongoose');

const flashAnimationSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  paragraphs: [String],
  image: String,
  imageAlt: String,
  listItems: [String],
});

module.exports = mongoose.model('FlashAnimation', flashAnimationSchema);
