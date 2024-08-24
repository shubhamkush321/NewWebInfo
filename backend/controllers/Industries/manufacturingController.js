const Manufacturing = require('../../models/Industries/manufacturingModel');

// Create new manufacturing data
exports.createManufacturing = async (req, res) => {
  try {
    const newData = new Manufacturing(req.body);
    await newData.save();
    res.status(201).json(newData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all manufacturing data
exports.getAllManufacturing = async (req, res) => {
  try {
    const data = await Manufacturing.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get single manufacturing data by ID
exports.getManufacturingById = async (req, res) => {
  try {
    const data = await Manufacturing.findById(req.params.id);
    if (!data) return res.status(404).json({ message: 'Data not found' });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update manufacturing data
exports.updateManufacturing = async (req, res) => {
  try {
    const data = await Manufacturing.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!data) return res.status(404).json({ message: 'Data not found' });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete manufacturing data
exports.deleteManufacturing = async (req, res) => {
  try {
    const data = await Manufacturing.findByIdAndDelete(req.params.id);
    if (!data) return res.status(404).json({ message: 'Data not found' });
    res.status(200).json({ message: 'Data deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
