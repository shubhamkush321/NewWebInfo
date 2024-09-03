const mongoose = require('mongoose');
const { Schema } = mongoose;

const contentSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  }
});

const homeSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  content: [contentSchema]
});

module.exports = mongoose.model('Home', homeSchema);
