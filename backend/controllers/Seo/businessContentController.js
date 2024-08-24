const BusinessContent = require('../../models/Seo/BusinessContent');

// Create new content
exports.createContent = async (req, res) => {
  try {
    const content = new BusinessContent(req.body);
    await content.save();
    res.status(201).json(content);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all content
exports.getContent = async (req, res) => {
  try {
    const contents = await BusinessContent.find();
    res.status(200).json(contents);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get content by ID
exports.getContentById = async (req, res) => {
  try {
    const content = await BusinessContent.findById(req.params.id);
    if (!content) {
      return res.status(404).json({ message: 'Content not found' });
    }
    res.status(200).json(content);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update content by ID
exports.updateContent = async (req, res) => {
  try {
    const content = await BusinessContent.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!content) {
      return res.status(404).json({ message: 'Content not found' });
    }
    res.status(200).json(content);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete content by ID
exports.deleteContent = async (req, res) => {
  try {
    const content = await BusinessContent.findByIdAndDelete(req.params.id);
    if (!content) {
      return res.status(404).json({ message: 'Content not found' });
    }
    res.status(200).json({ message: 'Content deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
