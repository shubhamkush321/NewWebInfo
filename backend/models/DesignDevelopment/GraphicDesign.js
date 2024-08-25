const mongoose = require('mongoose');

const textDataSchema = new mongoose.Schema({
  title: { type: String, required: true },
  introduction: [{ text: String, href: String }],
  description: [{ text: String, strong: Boolean }],
  commitment: [{ text: String, strong: Boolean }],
  commitmentsList: [String],
  industries: [String],
  industriesList: [String],
  serviceOffer: [String],
  graphicDesignServices: [String],
  graphicDesignServicesList: [String],
  servicesList: [String],
  closing: { type: String }
});

const GraphicDesign = mongoose.model('GraphicDesign', textDataSchema);

module.exports = GraphicDesign;
