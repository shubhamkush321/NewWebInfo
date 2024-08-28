const mongoose = require('mongoose');

// Define the FAQ schema
const faqSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
    trim: true
  },
  answer: {
    type: String,
    required: true,
    trim: true
  }
}, { _id: false }); // Prevents creation of additional _id for FAQ sub-documents

// Define the section schema
const sectionSchema = new mongoose.Schema({
  header: {
    type: String,
    trim: true
  },
  description: [
    {
      type: String,
      trim: true
    }
  ],
  list: [
    {
      type: String,
      trim: true
    }
  ],
  links: [
    {
      text: {
        type: String,
        trim: true
      },
      url: {
        type: String,
        trim: true,
        match: /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i // Optional URL validation
      }
    }
  ],
  services: [
    {
      title: {
        type: String,
        trim: true
      },
      description: {
        type: String,
        trim: true
      }
    }
  ],
  locations: [
    {
      type: String,
      trim: true
    }
  ]
});

// Define the main schema
const SocialContentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  schemaName: {
    type: String,
    default: "SocialContent",
    trim: true
  },
  sections: [sectionSchema],
  faqs: [faqSchema]
}, {
  timestamps: true
});

// Create and export the model
const SocialContent = mongoose.model('SocialContent', SocialContentSchema);

module.exports = SocialContent;
