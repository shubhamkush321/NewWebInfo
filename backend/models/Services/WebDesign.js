const mongoose = require('mongoose');

// Define the section schema
const sectionSchema = new mongoose.Schema({
  header: { type: String }, // Not required to handle cases without a header
  description: [{ type: String }],
  list: [{ type: String }]
});

// Define the main schema
const webDesigningSchema = new mongoose.Schema({
  title: { type: String, required: true },
  schemaName: { type: String, default: "WebDesigning" },
  sections: [sectionSchema]
});

// Create the model
const WebDesigning = mongoose.model('WebDesigning', webDesigningSchema);

module.exports = WebDesigning;
