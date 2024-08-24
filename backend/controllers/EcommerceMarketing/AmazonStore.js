const AmazonStore = require('../../models/EcommerceMarketing/AmazonStore');

// Create new content
exports.createStoreContent = async (req, res) => {
  try {
    const contents = req.body;
    const newContents = await AmazonStore.insertMany(contents);
    res.status(201).json(newContents);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all content
exports.getAllStoreContent = async (req, res) => {
  try {
    const contents = await AmazonStore.find();
    res.status(200).json(contents);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get content by ID
exports.getStoreContentById = async (req, res) => {
  try {
    const content = await AmazonStore.findById(req.params.id);
    if (!content) {
      return res.status(404).json({ message: 'Content not found' });
    }
    res.status(200).json(content);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update content by ID
exports.updateStoreContent = async (req, res) => {
  try {
    const content = await AmazonStore.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!content) {
      return res.status(404).json({ message: 'Content not found' });
    }
    res.status(200).json(content);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete content by ID
exports.deleteStoreContent = async (req, res) => {
  try {
    const content = await AmazonStore.findByIdAndDelete(req.params.id);
    if (!content) {
      return res.status(404).json({ message: 'Content not found' });
    }
    res.status(200).json({ message: 'Content deleted successfully' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
