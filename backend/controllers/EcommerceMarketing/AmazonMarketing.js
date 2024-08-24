// controllers/advertiseController.js
const MarketingContent = require('../../models/EcommerceMarketing/AmazonMarketing');

// Get all content
exports.getAllContent = async (req, res) => {
  try {
    const contents = await MarketingContent.find();
    res.json(contents);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get content by ID
exports.getContentById = async (req, res) => {
  try {
    const content = await MarketingContent.findById(req.params.id);
    if (content) {
      res.json(content);
    } else {
      res.status(404).json({ message: 'Content not found' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create new content
exports.createContent = async (req, res) => {
  try {
    const contents = await MarketingContent.insertMany(req.body);
    res.status(201).json(contents);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update content by ID
exports.updateContent = async (req, res) => {
  try {
    const content = await MarketingContent.findById(req.params.id);
    if (content) {
      content.type = req.body.type || content.type;
      content.level = req.body.level || content.level;
      content.text = req.body.text || content.text;
      content.className = req.body.className || content.className;
      content.items = req.body.items || content.items;

      const updatedContent = await content.save();
      res.json(updatedContent);
    } else {
      res.status(404).json({ message: 'Content not found' });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete content by ID
exports.deleteContent = async (req, res) => {
  try {
    const content = await MarketingContent.findById(req.params.id);
    if (content) {
      await content.remove();
      res.json({ message: 'Content deleted' });
    } else {
      res.status(404).json({ message: 'Content not found' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
