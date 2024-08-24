const EcommerceSeo = require('../../models/EcommerceMarketing/EcommerceSeo');

// Create new content
exports.createEcommerceSeoContent = async (req, res) => {
  try {
    const contents = req.body; // Expect an array of content objects
    const savedContents = await EcommerceSeo.insertMany(contents);
    res.status(201).json(savedContents);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all content
exports.getAllEcommerceSeoContent = async (req, res) => {
  try {
    const contents = await EcommerceSeo.find();
    res.status(200).json(contents);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get content by ID
exports.getEcommerceSeoContentById = async (req, res) => {
  try {
    const content = await EcommerceSeo.findById(req.params.id);
    if (!content) return res.status(404).json({ message: 'Content not found' });
    res.status(200).json(content);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update content by ID
exports.updateEcommerceSeoContent = async (req, res) => {
  try {
    const content = await EcommerceSeo.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!content) return res.status(404).json({ message: 'Content not found' });
    res.status(200).json(content);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete content by ID
exports.deleteEcommerceSeoContent = async (req, res) => {
  try {
    const content = await EcommerceSeo.findByIdAndDelete(req.params.id);
    if (!content) return res.status(404).json({ message: 'Content not found' });
    res.status(200).json({ message: 'Content deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
