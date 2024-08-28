const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the schema for list items
const listItemSchema = new Schema({
  text: { type: String, required: true },
  checked: { type: Boolean, default: false }
});

// Define the schema for each section
const sectionSchema = new Schema({
  header: { type: String, required: true },
  description: [{ type: String }],
  links: [{
    text: { type: String },
    url: { type: String }
  }],
  services: [{
    title: { type: String },
    description: { type: String }
  }],
  locations: [{ type: String }],
  list: [listItemSchema],
  image: { type: String }
});

// Define the schema for the PayPer component
const payPerSchema = new Schema({
  title: { type: String, required: true },
  schemaName: { type: String, default: "PayPer" },
  sections: [sectionSchema]
  
});

const PayPer = mongoose.model('PayPer', payPerSchema);

// Ensure all documents have the correct schemaName
PayPer.updateMany({ schemaName: { $ne: "PayPer" } }, { schemaName: "PayPer" })
  .then((result) => {
    console.log(`${result.modifiedCount} documents updated to have schemaName 'PayPer'`);
  })
  .catch((err) => {
    console.error('Error updating documents:', err);
  });

module.exports = PayPer;
