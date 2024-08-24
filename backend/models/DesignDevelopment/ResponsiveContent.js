// models/Content.js

const mongoose = require('mongoose');

const contentSchema = new mongoose.Schema({
  heroImage: [String],
  introduction: [String],
  webDesign: [String],
  competitiveAdvantage: {
    title: String,
    benefits: [String]
  },
  services: [String],
  reasonsToChoose: [String]
});

const Content = mongoose.model('ResponsiveContent', contentSchema);

module.exports = Content;
