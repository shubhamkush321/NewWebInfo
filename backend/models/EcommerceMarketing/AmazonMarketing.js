// models/AdvertiseContent.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MarketingContentSchema = new Schema({
  type: { type: String, required: true },
  level: { type: Number, required: false },
  text: { type: String, required: true },
  className: { type: String, required: true },
  items: { type: [String], required: false }
});

const MarketingContent = mongoose.model('MarketingContent', MarketingContentSchema);

module.exports = MarketingContent;