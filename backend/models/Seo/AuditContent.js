// models/AuditContent.js
const mongoose = require('mongoose');

const auditContentSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['header', 'subheader', 'paragraph', 'list'],
    required: true
  },
  text: {
    type: String
  },
  items: {
    type: [String]
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('AuditContent', auditContentSchema);
