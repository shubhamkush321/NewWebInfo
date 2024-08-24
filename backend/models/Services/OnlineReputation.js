const mongoose = require('mongoose');

// Define the schema for a section
const sectionSchema = new mongoose.Schema({
  header: { type: String, required: true },
  description: { type: String, required: true },
});

// Define the schema for the online reputation document
const onlineReputationSchema = new mongoose.Schema({
  sections: [sectionSchema] 
});

const OnlineReputation = mongoose.model('OnlineReputation', onlineReputationSchema);

module.exports = OnlineReputation;
