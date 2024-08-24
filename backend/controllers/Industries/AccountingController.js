const AccountingContent = require('../../models/Industries/Accounting');

// Create new content
exports.createContent = async (req, res) => {
  try {
    const content = req.body; // Expecting an array of content objects
    if (!Array.isArray(content)) {
      return res.status(400).json({ message: 'Content should be an array' });
    }
    const savedContent = await AccountingContent.insertMany(content); // Insert many documents
    res.status(201).json(savedContent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all content
exports.getAllContent = async (req, res) => {
  try {
    const content = await AccountingContent.find();
    res.json(content);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get content by ID
exports.getContentById = async (req, res) => {
  try {
    const content = await AccountingContent.findById(req.params.id);
    if (!content) return res.status(404).json({ message: 'Content not found' });
    res.json(content);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update content by ID
exports.updateContentById = async (req, res) => {
  try {
    const content = await AccountingContent.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!content) return res.status(404).json({ message: 'Content not found' });
    res.json(content);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete content by ID
exports.deleteContentById = async (req, res) => {
  try {
    const content = await AccountingContent.findByIdAndDelete(req.params.id);
    if (!content) return res.status(404).json({ message: 'Content not found' });
    res.json({ message: 'Content deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
