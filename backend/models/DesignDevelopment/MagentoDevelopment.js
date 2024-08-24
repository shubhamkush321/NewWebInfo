const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true }
}, { _id: false });

const magentoSchema = new mongoose.Schema({
  introduction: [{ type: String }],
  services: [serviceSchema],
  whyUs: { type: String }
}, { timestamps: true });

const MagentoDevelopment = mongoose.model('MagentoDevelopment', magentoSchema);

module.exports = MagentoDevelopment;
