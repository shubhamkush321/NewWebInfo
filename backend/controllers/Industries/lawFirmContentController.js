// controllers/lawFirmContentController.js
const LawFirmContent = require('../../models/Industries/LawFirmContent');

// Create new content
exports.createContent = async (req, res) => {
  try {
    const contentArray = req.body;
    if (!Array.isArray(contentArray)) {
      return res.status(400).json({ message: 'Request body must be an array' });
    }

    // Validate each content item
    for (const item of contentArray) {
      const content = new LawFirmContent(item);
      await content.validate(); // Validate individual content item
      await content.save();
    }

    res.status(201).json({ message: 'Content created successfully' });
  } catch (error) {
    console.error('Error:', error);
    res.status(400).json({ message: error.message });
  }
};


// Get all content
exports.getAllContent = async (req, res) => {
  try {
    const content = await LawFirmContent.find();
    res.json(content);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get content by ID
exports.getContentById = async (req, res) => {
  try {
    const content = await LawFirmContent.findById(req.params.id);
    if (!content) return res.status(404).json({ message: 'Content not found' });
    res.json(content);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update content by ID
exports.updateContentById = async (req, res) => {
  try {
    const content = await LawFirmContent.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!content) return res.status(404).json({ message: 'Content not found' });
    res.json(content);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete content by ID
exports.deleteContentById = async (req, res) => {
  try {
    const content = await LawFirmContent.findByIdAndDelete(req.params.id);
    if (!content) return res.status(404).json({ message: 'Content not found' });
    res.json({ message: 'Content deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
