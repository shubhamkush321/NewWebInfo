const mongoose = require('mongoose');

const contentSchema = new mongoose.Schema({
  type: { type: String, required: true },
  level: { type: Number }, 
  text: { type: String, required: true },
  className: { type: String }
});

const Content = mongoose.model('GoogleRecoveryContent', contentSchema);

module.exports = Content;
