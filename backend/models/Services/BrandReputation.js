const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the schema for Brand Reputation data
const brandReputationSchema = new Schema({
  schemaName: {
    type: String,
    required: true
  },
  sections: [
    {
      header: {
        type: String,
        required: true
      },
      description: [String],
      links: [String],
      services: [String],
      locations: [String],
      list: [String]
    }
  ]
});

// Create the model
const BrandReputation = mongoose.model('BrandReputation', brandReputationSchema);

module.exports = BrandReputation;
