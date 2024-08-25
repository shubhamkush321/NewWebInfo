// controllers/DesignDevelopment/graphicDesignController.js
const GraphicDesign = require('../../models/DesignDevelopment/GraphicDesign');

// Create a new GraphicDesign document
exports.createGraphicDesign = async (req, res) => {
  try {
    const graphicDesign = new GraphicDesign(req.body);
    await graphicDesign.save();
    res.status(201).json(graphicDesign);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all GraphicDesign documents
exports.getAllGraphicDesigns = async (req, res) => {
  try {
    const graphicDesigns = await GraphicDesign.find();
    res.status(200).json(graphicDesigns);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get a single GraphicDesign document by ID
exports.getGraphicDesignById = async (req, res) => {
  try {
    const graphicDesign = await GraphicDesign.findById(req.params.id);
    if (!graphicDesign) {
      return res.status(404).json({ message: 'GraphicDesign not found' });
    }
    res.status(200).json(graphicDesign);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update a GraphicDesign document by ID
exports.updateGraphicDesign = async (req, res) => {
  try {
    const graphicDesign = await GraphicDesign.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!graphicDesign) {
      return res.status(404).json({ message: 'GraphicDesign not found' });
    }
    res.status(200).json(graphicDesign);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a GraphicDesign document by ID
exports.deleteGraphicDesign = async (req, res) => {
  try {
    const graphicDesign = await GraphicDesign.findByIdAndDelete(req.params.id);
    if (!graphicDesign) {
      return res.status(404).json({ message: 'GraphicDesign not found' });
    }
    res.status(200).json({ message: 'GraphicDesign deleted' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
