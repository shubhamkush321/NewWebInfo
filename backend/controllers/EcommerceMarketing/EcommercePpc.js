const EcommercePpc = require('../../models/EcommerceMarketing/EcommercePpc');

// Create new content
exports.createEcommercePpcContent = async (req, res) => {
  try {
    const contents = req.body; // Expect an array of content objects
    const savedContents = await EcommercePpc.insertMany(contents);
    res.status(201).json(savedContents);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all content
exports.getAllEcommercePpcContent = async (req, res) => {
  try {
    const contents = await EcommercePpc.find();
    res.status(200).json(contents);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get content by ID
exports.getEcommercePpcContentById = async (req, res) => {
  try {
    const content = await EcommercePpc.findById(req.params.id);
    if (!content) return res.status(404).json({ message: 'Content not found' });
    res.status(200).json(content);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update content by ID
exports.updateEcommercePpcContent = async (req, res) => {
  try {
    const content = await EcommercePpc.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!content) return res.status(404).json({ message: 'Content not found' });
    res.status(200).json(content);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete content by ID
exports.deleteEcommercePpcContent = async (req, res) => {
  try {
    const content = await EcommercePpc.findByIdAndDelete(req.params.id);
    if (!content) return res.status(404).json({ message: 'Content not found' });
    res.status(200).json({ message: 'Content deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
