const MagentoDevelopment = require('../../models/DesignDevelopment/MagentoDevelopment');

// Create a new MagentoDevelopment document
exports.createMagentoDevelopment = async (req, res) => {
  try {
    const newMagentoDevelopment = new MagentoDevelopment(req.body);
    const savedMagentoDevelopment = await newMagentoDevelopment.save();
    res.status(201).json(savedMagentoDevelopment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all MagentoDevelopment documents
exports.getAllMagentoDevelopment = async (req, res) => {
  try {
    const magentoDevelopmentData = await MagentoDevelopment.find();
    res.status(200).json(magentoDevelopmentData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single MagentoDevelopment document by ID
exports.getMagentoDevelopmentById = async (req, res) => {
  try {
    const magentoDevelopment = await MagentoDevelopment.findById(req.params.id);
    if (magentoDevelopment) {
      res.status(200).json(magentoDevelopment);
    } else {
      res.status(404).json({ message: 'MagentoDevelopment document not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a single MagentoDevelopment document by ID
exports.updateMagentoDevelopment = async (req, res) => {
  try {
    const updatedMagentoDevelopment = await MagentoDevelopment.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (updatedMagentoDevelopment) {
      res.status(200).json(updatedMagentoDevelopment);
    } else {
      res.status(404).json({ message: 'MagentoDevelopment document not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a single MagentoDevelopment document by ID
exports.deleteMagentoDevelopment = async (req, res) => {
  try {
    const deletedMagentoDevelopment = await MagentoDevelopment.findByIdAndDelete(req.params.id);
    if (deletedMagentoDevelopment) {
      res.status(200).json({ message: 'MagentoDevelopment document deleted' });
    } else {
      res.status(404).json({ message: 'MagentoDevelopment document not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
