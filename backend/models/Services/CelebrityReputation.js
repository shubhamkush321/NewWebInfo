const mongoose = require('mongoose');
const CorporateReputation = require('./CorporateReputation');

const CelebrityReputationSchema = new mongoose.Schema({
  title: { type: text, required: true },
  content: { type: String, required: true },
  list: [String],
  additionalContent: { type: String, default: '' }
});

const CelebrityReputation = mongoose.model('CelebrityReputation', CelebrityReputationSchema);

module.exports = CelebrityReputation;

// TODO: Add additionalContent  
// Schema Name 
// Arrays of objects
// 

