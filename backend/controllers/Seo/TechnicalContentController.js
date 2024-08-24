const TechnicalContent = require('../../models/Seo/TechnicalContent');

// Create new content
exports.createContent = async (req, res) => {
  try {
    const content = await TechnicalContent.insertMany(req.body);
    res.status(201).json(content);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Validation failed', error: error.message });
  }
};

// Get all content
exports.getAllContent = async (req, res) => {
  try {
    const content = await TechnicalContent.find();
    res.status(200).json(content);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
};

// Get content by ID
exports.getContentById = async (req, res) => {
  try {
    const content = await TechnicalContent.findById(req.params.id);
    if (!content) {
      return res.status(404).json({ message: 'Content not found' });
    }
    res.status(200).json(content);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
};

// Update content by ID
exports.updateContent = async (req, res) => {
  try {
    const content = await TechnicalContent.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!content) {
      return res.status(404).json({ message: 'Content not found' });
    }
    res.status(200).json(content);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Validation failed', error: error.message });
  }
};

// Delete content by ID
exports.deleteContent = async (req, res) => {
  try {
    const content = await TechnicalContent.findByIdAndDelete(req.params.id);
    if (!content) {
      return res.status(404).json({ message: 'Content not found' });
    }
    res.status(200).json({ message: 'Content deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
};
