const mongoose = require('mongoose');

const CelebrityReputationSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  list: [String], // Array of strings for list items
  additionalContent: { type: String, default: '' }
});

const CelebrityReputation = mongoose.model('CelebrityReputation', CelebrityReputationSchema);

module.exports = CelebrityReputation;