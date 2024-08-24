const MediaContent = require('../../models/Industries/MediaContent');

// Create new content
exports.createContent = async (req, res) => {
  try {
    const contentArray = req.body;
    const content = await MediaContent.insertMany(contentArray);
    res.status(201).json(content);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all content
exports.getAllContent = async (req, res) => {
  try {
    const content = await MediaContent.find();
    res.status(200).json(content);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get content by ID
exports.getContentById = async (req, res) => {
  try {
    const content = await MediaContent.findById(req.params.id);
    if (!content) {
      return res.status(404).json({ error: 'Content not found' });
    }
    res.status(200).json(content);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update content by ID
exports.updateContentById = async (req, res) => {
  try {
    const content = await MediaContent.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!content) {
      return res.status(404).json({ error: 'Content not found' });
    }
    res.status(200).json(content);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete content by ID
exports.deleteContentById = async (req, res) => {
  try {
    const content = await MediaContent.findByIdAndDelete(req.params.id);
    if (!content) {
      return res.status(404).json({ error: 'Content not found' });
    }
    res.status(200).json({ message: 'Content deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
