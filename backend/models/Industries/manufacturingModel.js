const mongoose = require('mongoose');

const ManufacturingSchema = new mongoose.Schema({
  header: { type: String, required: true },
  paragraphs: { type: [String], required: true }
});

module.exports = mongoose.model('Manufacturing', ManufacturingSchema);
