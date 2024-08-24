const ShopifySeo = require('../../models/EcommerceMarketing/ShopifySeo');

// Create new content
exports.createShopifySeoContent = async (req, res) => {
  try {
    const contents = req.body; // Expect an array of content objects
    const savedContents = await ShopifySeo.insertMany(contents);
    res.status(201).json(savedContents);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all content
exports.getAllShopifySeoContent = async (req, res) => {
  try {
    const contents = await ShopifySeo.find();
    res.status(200).json(contents);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get content by ID
exports.getShopifySeoContentById = async (req, res) => {
  try {
    const content = await ShopifySeo.findById(req.params.id);
    if (!content) return res.status(404).json({ message: 'Content not found' });
    res.status(200).json(content);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update content by ID
exports.updateShopifySeoContent = async (req, res) => {
  try {
    const content = await ShopifySeo.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!content) return res.status(404).json({ message: 'Content not found' });
    res.status(200).json(content);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete content by ID
exports.deleteShopifySeoContent = async (req, res) => {
  try {
    const content = await ShopifySeo.findByIdAndDelete(req.params.id);
    if (!content) return res.status(404).json({ message: 'Content not found' });
    res.status(200).json({ message: 'Content deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
