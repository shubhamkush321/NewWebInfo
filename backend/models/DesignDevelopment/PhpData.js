const mongoose = require('mongoose');

const contentItemSchema = new mongoose.Schema({
  type: { type: String, required: true },  // 'heading', 'paragraph', 'list'
  level: { type: Number },
  content: { type: String },
  continuation: { type: String },
  boldText: { type: String },
  continuation2: { type: String },
  items: [{ type: String }],  // For list items
  description: { type: String }  // Description for lists
}, { _id: false });

const phpDevelopmentSchema = new mongoose.Schema({
  type: { type: String, required: true },  // e.g., 'phpDevelopment'
  items: [contentItemSchema]
});

const PhpDevelopment = mongoose.model('PhpDevelopment', phpDevelopmentSchema);

module.exports = PhpDevelopment;
