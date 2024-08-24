const mongoose = require('mongoose');

const onlineContentSchema = new mongoose.Schema({
  type: { type: String, required: true },
  level: { type: Number }, // Only for headings
  text: { type: String, required: true },
  className: { type: String, required: true },
  items: { type: [String] } // Only for lists
});

module.exports = mongoose.model('OnlineContent', onlineContentSchema);
