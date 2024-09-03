const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the schema for different types of content
const contentSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  description: {
    type: String
  },

  
  link: {
    text: {
      type: String
    },
    url: {
      type: String
    }
  }
});

// Define the schema for a single FAQ item
const faqSchema = new Schema({
  question: {
    type: String,
    required: true
  },
  answer: {
    type: String,
    required: true
  }
});

// Define the schema for the FAQ model
const FAQModelSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  faqs: [faqSchema], 
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Define the schema for the main content model
const mainSchema = new Schema({
  items: [contentSchema] 
});

// Create models
const FAQModel = mongoose.model('FAQModel', FAQModelSchema);
const MainModel = mongoose.model('MainModel', mainSchema);

// Export models
module.exports = {
  FAQModel,
  MainModel
};
