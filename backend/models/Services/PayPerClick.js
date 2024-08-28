const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the schema for list items
const listItemSchema = new Schema({
  text: String,
  checked: Boolean
});

// Define the schema for each section
const sectionSchema = new Schema({
  header: { type: String, required: true },
  description: [String],
  links: [{ text: String, url: String }],
  services: [{ title: String, description: String }],
  locations: [String],
  list: [listItemSchema], 
  image: String 
});

// Define the schema for the PayPer component
const payPerSchema = new Schema({
  title: { type: String, required: true },
  schemaName: { type: String, default: "PayPer" },
  sections: [sectionSchema]
  
});

module.exports = mongoose.model('PayPer', payPerSchema);
