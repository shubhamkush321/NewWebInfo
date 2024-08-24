const ResellerContent = require('../../models/Seo/ResellerContent');

// Create a new content entry
exports.createContent = async (req, res) => {
  try {
    const content = await ResellerContent.insertMany(req.body);
    res.status(201).json(content);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Validation failed', error: error.message });
  }
};

// Get all content entries
exports.getAllContent = async (req, res) => {
  try {
    const content = await ResellerContent.find();
    res.status(200).json(content);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
};

// Get a single content entry by ID
exports.getContentById = async (req, res) => {
  try {
    const content = await ResellerContent.findById(req.params.id);
    if (!content) {
      return res.status(404).json({ message: 'Content not found' });
    }
    res.status(200).json(content);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
};

// Update a content entry by ID
exports.updateContent = async (req, res) => {
  try {
    const content = await ResellerContent.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!content) {
      return res.status(404).json({ message: 'Content not found' });
    }
    res.status(200).json(content);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Validation failed', error: error.message });
  }
};

// Delete a content entry by ID
exports.deleteContent = async (req, res) => {
  try {
    const content = await ResellerContent.findByIdAndDelete(req.params.id);
    if (!content) {
      return res.status(404).json({ message: 'Content not found' });
    }
    res.status(200).json({ message: 'Content deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
};
