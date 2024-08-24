const IndustriesECommerce = require('../../models/Industries/ECommerceModel');

// Create a new ECommerce document
exports.createECommerce = async (req, res) => {
  try {
    const newECommerce = new IndustriesECommerce(req.body);  // Corrected to use IndustriesECommerce
    const savedECommerce = await newECommerce.save();
    res.status(201).json(savedECommerce);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all ECommerce documents
exports.getAllECommerce = async (req, res) => {
  try {
    const eCommerces = await IndustriesECommerce.find();
    res.status(200).json(eCommerces);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single ECommerce document by ID
exports.getECommerceById = async (req, res) => {
  try {
    const eCommerce = await IndustriesECommerce.findById(req.params.id);
    if (eCommerce) {
      res.status(200).json(eCommerce);
    } else {
      res.status(404).json({ message: 'ECommerce not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a single ECommerce document by ID
exports.updateECommerce = async (req, res) => {
  try {
    const updatedECommerce = await IndustriesECommerce.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (updatedECommerce) {
      res.status(200).json(updatedECommerce);
    } else {
      res.status(404).json({ message: 'ECommerce not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a single ECommerce document by ID
exports.deleteECommerce = async (req, res) => {
  try {
    const deletedECommerce = await IndustriesECommerce.findByIdAndDelete(req.params.id);
    if (deletedECommerce) {
      res.status(200).json({ message: 'ECommerce deleted' });
    } else {
      res.status(404).json({ message: 'ECommerce not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
