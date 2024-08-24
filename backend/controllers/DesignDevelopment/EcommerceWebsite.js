const DesignECommerce = require('../../models/DesignDevelopment/EcommerceWebsite');

// Create or update content
const createOrUpdateDesignECommerce = async (req, res) => {
  try {
    const contents = req.body; // Array of content items
    // Optionally, validate contents before saving
    const result = await DesignECommerce.insertMany(contents, { ordered: false });
    res.status(200).json(result);
  } catch (error) {
    console.error('Error:', error.message);
    res.status(400).json({ message: error.message });
  }
};

// Get all content
const getAllDesignECommerce = async (req, res) => {
  try {
    const contents = await DesignECommerce.find();
    res.status(200).json(contents);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get content by ID
const getDesignECommerceById = async (req, res) => {
  try {
    const content = await DesignECommerce.findById(req.params.id);
    if (!content) return res.status(404).json({ message: 'Content not found' });
    res.status(200).json(content);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete content by ID
const deleteDesignECommerceById = async (req, res) => {
  try {
    const result = await DesignECommerce.findByIdAndDelete(req.params.id);
    if (!result) return res.status(404).json({ message: 'Content not found' });
    res.status(200).json({ message: 'Content deleted' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  createOrUpdateDesignECommerce,
  getAllDesignECommerce,
  getDesignECommerceById,
  deleteDesignECommerceById
};
