const PhpDevelopment = require('../../models/DesignDevelopment/PhpData');

// Create a new PhpDevelopment document
exports.createPhpDevelopment = async (req, res) => {
  try {
    const newPhpDevelopment = new PhpDevelopment(req.body);
    const savedPhpDevelopment = await newPhpDevelopment.save();
    res.status(201).json(savedPhpDevelopment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all PhpDevelopment documents
exports.getAllPhpDevelopment = async (req, res) => {
  try {
    const phpDevelopments = await PhpDevelopment.find();
    res.status(200).json(phpDevelopments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single PhpDevelopment document by ID
exports.getPhpDevelopmentById = async (req, res) => {
  try {
    const phpDevelopment = await PhpDevelopment.findById(req.params.id);
    if (phpDevelopment) {
      res.status(200).json(phpDevelopment);
    } else {
      res.status(404).json({ message: 'PhpDevelopment not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a single PhpDevelopment document by ID
exports.updatePhpDevelopment = async (req, res) => {
  try {
    const updatedPhpDevelopment = await PhpDevelopment.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (updatedPhpDevelopment) {
      res.status(200).json(updatedPhpDevelopment);
    } else {
      res.status(404).json({ message: 'PhpDevelopment not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a single PhpDevelopment document by ID
exports.deletePhpDevelopment = async (req, res) => {
  try {
    const deletedPhpDevelopment = await PhpDevelopment.findByIdAndDelete(req.params.id);
    if (deletedPhpDevelopment) {
      res.status(200).json({ message: 'PhpDevelopment deleted' });
    } else {
      res.status(404).json({ message: 'PhpDevelopment not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
