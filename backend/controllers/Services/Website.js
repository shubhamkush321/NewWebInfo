const Content = require('../../models/Services/Website');

// Create a new content
exports.createContent = async (req, res) => {
  try {
    const contents = req.body;
    // Assuming you need to handle an array of contents
    const result = await Content.insertMany(contents);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all content with optional sorting
exports.getAllContent = async (req, res) => {
  try {
    const contents = await Content.find().sort({ order: 1 }); // Sort by order field
    res.status(200).json(contents);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get content by ID
exports.getContentById = async (req, res) => {
  try {
    const content = await Content.findById(req.params.id);
    if (!content) return res.status(404).json({ message: 'Content not found' });
    res.status(200).json(content);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update content
exports.updateContent = async (req, res) => {
  try {
    const content = await Content.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!content) return res.status(404).json({ message: 'Content not found' });
    res.status(200).json(content);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete content
exports.deleteContent = async (req, res) => {
  try {
    const content = await Content.findByIdAndDelete(req.params.id);
    if (!content) return res.status(404).json({ message: 'Content not found' });
    res.status(200).json({ message: 'Content deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
