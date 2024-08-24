const mongoose = require('mongoose');

const designECommerceSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['heading', 'paragraph', 'list'],
    required: true
  },
  level: {
    type: Number,
    min: 1,
    max: 6
  },
  text: {
    type: String,
    required: true
  },
  link: {
    href: String,
    text: String,
    className: String
  },
  continuation: String,
  items: [String]
}, { timestamps: true });

const DesignECommerce = mongoose.model('DesignECommerce', designECommerceSchema);

module.exports = DesignECommerce;
