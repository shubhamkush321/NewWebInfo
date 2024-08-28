// controllers/webDesigningController.js
const WebDesigning = require('../../models/Services/WebDesign');

// Create a new WebDesigning document
exports.createWebDesigning = async (req, res) => {
  try {
    const webDesigning = new WebDesigning(req.body);
    await webDesigning.save();
    res.status(201).json(webDesigning);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all WebDesigning documents
exports.getAllWebDesignings = async (req, res) => {
  try {
    const webDesignings = await WebDesigning.find();
    res.status(200).json(webDesignings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single WebDesigning document by ID
exports.getWebDesigningById = async (req, res) => {
  try {
    const webDesigning = await WebDesigning.findById(req.params.id);
    if (!webDesigning) {
      return res.status(404).json({ message: 'WebDesigning not found' });
    }
    res.status(200).json(webDesigning);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a WebDesigning document by ID
exports.updateWebDesigning = async (req, res) => {
  try {
    const webDesigning = await WebDesigning.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!webDesigning) {
      return res.status(404).json({ message: 'WebDesigning not found' });
    }
    res.status(200).json(webDesigning);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a WebDesigning document by ID
exports.deleteWebDesigning = async (req, res) => {
  try {
    const webDesigning = await WebDesigning.findByIdAndDelete(req.params.id);
    if (!webDesigning) {
      return res.status(404).json({ message: 'WebDesigning not found' });
    }
    res.status(200).json({ message: 'WebDesigning deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
