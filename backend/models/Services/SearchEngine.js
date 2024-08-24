// models/searchEngineModel.js
const mongoose = require('mongoose');

const searchEngineSchema = new mongoose.Schema({
  heroImage: [String],
  sections: [
    {
      title: String,
      content: [String],
    }
  ],
  servicesAndBenefits: {
    services: [String],
    benefits: [String]
  },
  keywords: [String],
  faqs: [
    {
      question: String,
      answer: String,
    }
  ]
});

const SearchEngine = mongoose.model('SearchEngine', searchEngineSchema);

module.exports = SearchEngine;