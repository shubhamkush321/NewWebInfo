const mongoose = require('mongoose');

// Define the section schema
const sectionSchema = new mongoose.Schema({
  header: { type: String, required: true },
  description: [{ type: String, required: true }],
  links: [
    {
      text: { type: String, required: true },
      url: { type: String, required: true }
    }
  ],
  services: [
    {
      title: { type: String, required: true },
      description: { type: String, required: true }
    }
  ],
  locations: [{ type: String }]
});

// Define the main schema
const searchEngineSchema = new mongoose.Schema({
  title: { type: String, required: true },
  schemaName: { type: String, default: "SearchEngine" },
  sections: [sectionSchema],
  faqs: [
    {
      question: { type: String, required: true },
      answer: { type: String, required: true }
    },
    {
      timestamps: true // Automatically manage createdAt and updatedAt fields
    }
  ]
});

// Create the model
const SearchEngine = mongoose.model('SearchEngine', searchEngineSchema);

module.exports = SearchEngine;
