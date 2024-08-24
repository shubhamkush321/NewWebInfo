const AmazonContent = require('../../models/EcommerceMarketing/AmazonSeo');

// Get all AmazonContent
exports.getAllContent = async (req, res) => {
  try {
    const content = await AmazonContent.find();
    res.json(content);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get content by ID
exports.getContentById = async (req, res) => {
  try {
    const content = await AmazonContent.findById(req.params.id);
    if (!content) return res.status(404).json({ message: 'Content not found' });
    res.json(content);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create new content
exports.createContent = async (req, res) => {
  try {
    const contents = req.body; // Expecting an array of content items
    const newContents = await AmazonContent.insertMany(contents);
    res.status(201).json(newContents);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update content
exports.updateContent = async (req, res) => {
  try {
    const content = await AmazonContent.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!content) return res.status(404).json({ message: 'Content not found' });
    res.json(content);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete content
exports.deleteContent = async (req, res) => {
  try {
    const content = await AmazonContent.findByIdAndDelete(req.params.id);
    if (!content) return res.status(404).json({ message: 'Content not found' });
    res.json({ message: 'Content deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
