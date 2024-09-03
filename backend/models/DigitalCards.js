const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  img: { type: String, required: true },
  caption: { type: String, required: true }
});

const Image = mongoose.model('Image', imageSchema);

module.exports = Image;
