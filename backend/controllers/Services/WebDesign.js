// controllers/Services/WebDesign.js
const WebDesign = require('../../models/Services/WebDesign');

// Create WebDesign
exports.createWebDesign = async (req, res) => {
  console.log('Request body:', req.body); // Log to verify the received data
  try {
    const webDesign = new WebDesign(req.body);
    const savedWebDesign = await webDesign.save(); 
    res.status(201).json(savedWebDesign);
  } catch (err) {
    console.error('Error:', err.message);
    res.status(500).json({ message: err.message });
  }
};

// Get all WebDesigns
exports.getWebDesigns = async (req, res) => {
  try {
    const webDesigns = await WebDesign.find();
    res.status(200).json(webDesigns);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get WebDesign by ID
exports.getWebDesignById = async (req, res) => {
  try {
    const webDesign = await WebDesign.findById(req.params.id);
    if (webDesign) {
      res.status(200).json(webDesign);
    } else {
      res.status(404).json({ message: 'WebDesign not found' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update WebDesign by ID
exports.updateWebDesign = async (req, res) => {
  try {
    const webDesign = await WebDesign.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (webDesign) {
      res.status(200).json(webDesign);
    } else {
      res.status(404).json({ message: 'WebDesign not found' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete WebDesign by ID
exports.deleteWebDesign = async (req, res) => {
  try {
    const webDesign = await WebDesign.findByIdAndDelete(req.params.id);
    if (webDesign) {
      res.status(200).json({ message: 'WebDesign deleted' });
    } else {
      res.status(404).json({ message: 'WebDesign not found' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
