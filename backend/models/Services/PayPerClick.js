// models/PayPer.js
const mongoose = require('mongoose');

// Define a schema for the PPC sections
const sectionSchema = new mongoose.Schema({
  type: { type: String, required: true },
  id: { type: String, required: true },
  title: { type: String },
  paragraphs: [{ type: String }],
  list: [{ text: { type: String }, checked: { type: Boolean } }],
  image: { type: String }  // Optional field for storing image URLs
});

// Define the main schema
const payPerSchema = new mongoose.Schema({
  sections: [sectionSchema]
});

// Create the model
const PayPer = mongoose.model('PayPer', payPerSchema);

module.exports = PayPer;
