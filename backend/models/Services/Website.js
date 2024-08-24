const mongoose = require('mongoose');

const webDevelopmentSchema = new mongoose.Schema({
  title: { type: String, required: false },
  text: { type: String, required: true },
  className: { type: String, required: false },
  heading: { type: String, required: false },
  order: { type: Number, required: false } 
});

const WebDevelopment = mongoose.model('WebDevelopment', webDevelopmentSchema);

module.exports = WebDevelopment;
