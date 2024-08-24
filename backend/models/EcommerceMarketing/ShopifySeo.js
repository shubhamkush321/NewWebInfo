const mongoose = require('mongoose');

const shopifySeoSchema = new mongoose.Schema({
  type: { type: String, required: true },
  level: { type: Number, required: false },
  text: { type: String, required: false },
  className: { type: String, required: true },
  items: [{
    text: { type: String, required: false }
  }]
});

const ShopifySeo = mongoose.model('ShopifySeo', shopifySeoSchema);

module.exports = ShopifySeo;
