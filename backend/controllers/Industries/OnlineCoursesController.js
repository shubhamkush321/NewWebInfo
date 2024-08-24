const OnlineContent = require('../../models/Industries/OnlineCoursesModel');

// Create new content
exports.createContent = async (req, res) => {
  try {
    const contents = req.body; // Assuming req.body is an array of content objects
    const result = await OnlineContent.insertMany(contents);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all content
exports.getAllContent = async (req, res) => {
  try {
    const contents = await OnlineContent.find();
    res.status(200).json(contents);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get content by ID
exports.getContentById = async (req, res) => {
  try {
    const content = await OnlineContent.findById(req.params.id);
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
    const content = await OnlineContent.findByIdAndUpdate(req.params.id, req.body, { new: true });
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
    const content = await OnlineContent.findByIdAndDelete(req.params.id);
    if (!content) {
      return res.status(404).json({ error: 'Content not found' });
    }
    res.status(200).json({ message: 'Content deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
