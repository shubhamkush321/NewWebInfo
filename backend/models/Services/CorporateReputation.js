const mongoose = require('mongoose');

const listItemSchema = new mongoose.Schema({
  title: String,
  description: String
});

const sectionSchema = new mongoose.Schema({
  type: { type: String, required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  list: [{ 
    title: { type: String },
    description: { type: String },
    type: mongoose.Schema.Types.Mixed 
  }],  
  additionalContent: String // Optional
});

const corporateReputationSchema = new mongoose.Schema({
  sections: [sectionSchema] // Array of sections
});

const CorporateReputation = mongoose.model('CorporateReputation', corporateReputationSchema);

module.exports = CorporateReputation;
