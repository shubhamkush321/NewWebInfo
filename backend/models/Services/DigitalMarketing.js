const mongoose = require('mongoose');

const sectionSchema = new mongoose.Schema({
  header: { type: String, required: true },
  description: [{ type: String, required: true }],
  links: [{ text: { type: String, required: true }, 
    url: { type: String, required: true } }],
  services: [{ title: { type: String, required: true }, 
    description: { type: String, required: true } }],
  locations: [{ type: String, required: true }]
});

// Define the main schema
const digitalMarketingSchema = new mongoose.Schema({
  title: { type: String, required: true },
  schemaName: { type: String, default: "DigitalMarketing" },
  sections: [sectionSchema]
});

// Create the model
const DigitalMarketing = mongoose.model('DigitalMarketing', digitalMarketingSchema);

module.exports = DigitalMarketing;
