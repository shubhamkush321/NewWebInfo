const mongoose = require('mongoose');

const digitalMarketingSchema = new mongoose.Schema({
  title: String,
  sections: [
    {
      header: String,
      description: [String],
      links: [{ text: String, url: String }],
      services: [{ title: String, description: String }],
      locations: [String]
    }
  ]
});

const DigitalMarketing = mongoose.model('DigitalMarketing', digitalMarketingSchema);
module.exports = DigitalMarketing;
