const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  text: { type: String },
  description: { type: String },
}, { _id: false });

const laravelSchema = new mongoose.Schema({
  type: { type: String, required: true },
  level: { type: Number },
  content: { type: String },
  boldText: { type: String },
  continuation: { type: String },
  continuation2: { type: String },
  link: {
    href: { type: String },
    text: { type: String },
    className: { type: String }
  },
  items: [itemSchema],
}, { timestamps: true });

const Laravel = mongoose.model('Laravel', laravelSchema);

module.exports = Laravel;
