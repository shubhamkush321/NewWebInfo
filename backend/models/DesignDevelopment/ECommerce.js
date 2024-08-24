const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eCommerceSchema = new Schema({
  title: { type: String, required: true },
  introduction: { type: String, required: true },
  image1: { type: String, required: true },
  servicesList: [String],
  customDesignTitle: { type: String, required: true },
  customDesignContent: { type: String, required: true },
  benefits: [String],
  expertise: [
    {
      title: String,
      description: String
    }
  ],
  process: [
    {
      title: String,
      description: String
    }
  ],
  additionalServices: [String],
  contactForm: { type: Boolean, default: true },
  servicesComponent: { type: Boolean, default: true },
  imageLocal: { type: String, required: true }
});

module.exports = mongoose.model('ECommerce', eCommerceSchema);
