const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the FAQ schema
const FAQSchema = new Schema({
  question: { type: String, required: true },
  answer: { type: String, required: true }
});

// Define the SocialContent schema
const SocialContentSchema = new Schema({
  introduction: {
    title: { type: String, required: true },
    content: { type: [String], required: true },
    image: { type: String, required: true }
  },
  businessStartUp: {
    title: { type: String, required: true },
    content: { type: [String], required: true }
  },
  importance: {
    title: { type: String, required: true },
    content: { type: [String], required: true }
  },
  strategy: {
    title: { type: String, required: true },
    content: { type: [String], required: true }
  },
  proposal: {
    title: { type: String, required: true },
    content: { type: [String], required: true }
  },
  conclusion: {
    title: { type: String, required: true },
    content: { type: [String], required: true }
  },
  faqs: [FAQSchema]
}, { timestamps: true }); // Add timestamps for createdAt and updatedAt fields

const SocialContent = mongoose.model('SocialContent', SocialContentSchema);

module.exports = SocialContent;
