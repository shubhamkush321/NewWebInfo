// models/Services/WebDesign.js
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
}, { timestamps: true });

const WebDesign = mongoose.model('WebDesign', contentSchema);
module.exports = WebDesign;
