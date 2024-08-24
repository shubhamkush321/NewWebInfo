const mongoose = require('mongoose');

const sectionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: [String],
  list: [String],
  links: [
    {
      text: { type: String },
      url: { type: String },
    },
  ],
});

const brandReputationSchema = new mongoose.Schema({
  sections: [sectionSchema],
});

const BrandReputation = mongoose.model('BrandReputation', brandReputationSchema);

module.exports = BrandReputation;
