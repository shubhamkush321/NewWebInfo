const mongoose = require('mongoose');

const SubsectionSchema = new mongoose.Schema({
  type: { type: String, required: true },
  title: { type: String },
  text: { type: String }
});

const SectionSchema = new mongoose.Schema({
  type: { type: String, required: true },
  text: { type: String },
  highlight: { type: [String] },
  link: {
    text: { type: String },
    href: { type: String }
  },
  title: { type: String },
  content: [SubsectionSchema]
});

const BusinessContentSchema = new mongoose.Schema({
  sections: [SectionSchema]
});

module.exports = mongoose.model('BusinessContent', BusinessContentSchema);
