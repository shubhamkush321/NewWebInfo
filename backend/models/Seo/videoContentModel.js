// models/VideoContent.js
const mongoose = require('mongoose');

const videoContentSchema = new mongoose.Schema({
  type: { type: String, required: true },
  text: { type: String, required: false },
  list: { type: [String], required: false },
});

const VideoContent = mongoose.model('VideoContent', videoContentSchema);

module.exports = VideoContent;
