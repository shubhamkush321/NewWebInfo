const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  type: { type: String },
  level: { type: Number },
  content: { type: String },
  items: [
    {
      title: { type: String },
      description: { type: String }
    }
  ]
}, { _id: false });

const eCommerceSchema = new mongoose.Schema({
  type: { type: String, required: true },
  data: {
    title: { type: String },
    description: { type: String },
    keywords: { type: String },
    author: { type: String }
  },
  items: [itemSchema]
});

const IndustriesECommerce = mongoose.model('IndustriesECommerce', eCommerceSchema);

module.exports = IndustriesECommerce;
