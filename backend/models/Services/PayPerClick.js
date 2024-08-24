const mongoose = require('mongoose');

const payPerClickSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    enum: ['header', 'intro', 'campaignManagement', 'image', 'section', 'importance', 'benefits', 'conclusion']
  },
  content: {
    type: mongoose.Schema.Types.Mixed,
    required: true
  }
});

module.exports = mongoose.model('PayPerClick', payPerClickSchema);
