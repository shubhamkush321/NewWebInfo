const WhiteLabel = require('../../models/Seo/WhiteLabel');

// Create new content
exports.createContent = async (req, res) => {
  try {
    const contents = req.body; 
    if (!Array.isArray(contents)) {
      return res.status(400).json({ message: 'Invalid data format' });
    }
    const savedContents = await WhiteLabel.insertMany(contents); 
    res.status(201).json(savedContents);
  } catch (error) {
    console.error('Error creating content:', error);
    res.status(500).json({ message: 'Error creating content', error });
  }
};


// Get all content
exports.getAllContent = async (req, res) => {
  try {
    const content = await WhiteLabel.find();
    res.status(200).json(content);
  } catch (error) {
    console.error('Error retrieving content:', error);
    res.status(500).json({ message: 'Error retrieving content', error });
  }
};

// Get content by ID
exports.getContentById = async (req, res) => {
  try {
    const content = await WhiteLabel.findById(req.params.id);
    if (!content) {
      return res.status(404).json({ message: 'Content not found' });
    }
    res.status(200).json(content);
  } catch (error) {
    console.error('Error retrieving content:', error);
    res.status(500).json({ message: 'Error retrieving content', error });
  }
};

// Update content by ID
exports.updateContent = async (req, res) => {
  try {
    const content = await WhiteLabel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!content) {
      return res.status(404).json({ message: 'Content not found' });
    }
    res.status(200).json(content);
  } catch (error) {
    console.error('Error updating content:', error);
    res.status(500).json({ message: 'Error updating content', error });
  }
};

// Delete content by ID
exports.deleteContent = async (req, res) => {
  try {
    const content = await WhiteLabel.findByIdAndDelete(req.params.id);
    if (!content) {
      return res.status(404).json({ message: 'Content not found' });
    }
    res.status(200).json({ message: 'Content deleted successfully' });
  } catch (error) {
    console.error('Error deleting content:', error);
    res.status(500).json({ message: 'Error deleting content', error });
  }
};
