const VideoContent = require('../../models/Seo/videoContentModel');


// Create multiple video content entries
const createVideoContent = async (req, res) => {
  try {
    const content = req.body;
    const createdContent = await VideoContent.insertMany(content);
    res.status(201).json(createdContent);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all video content entries
const getVideoContent = async (req, res) => {
  try {
    const content = await VideoContent.find();
    res.status(200).json(content);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a specific video content entry by ID
const updateVideoContent = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    const updatedContent = await VideoContent.findByIdAndUpdate(id, updates, { new: true });
    if (!updatedContent) {
      return res.status(404).json({ message: 'Content not found' });
    }
    res.status(200).json(updatedContent);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a specific video content entry by ID
const deleteVideoContent = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedContent = await VideoContent.findByIdAndDelete(id);
    if (!deletedContent) {
      return res.status(404).json({ message: 'Content not found' });
    }
    res.status(200).json({ message: 'Content deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createVideoContent,
  getVideoContent,
  updateVideoContent,
  deleteVideoContent,
};