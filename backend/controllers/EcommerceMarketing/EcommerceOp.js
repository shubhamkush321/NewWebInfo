const EcommerceOp = require('../../models/EcommerceMarketing/EcommerceOp');

// Create a new ecommerceOp content
exports.createEcommerceOpContent = async (req, res) => {
  try {
    const contents = req.body; 
    const savedContents = await EcommerceOp.insertMany(contents); 
    res.status(201).json(savedContents);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all ecommerceOp content
exports.getAllEcommerceOpContent = async (req, res) => {
  try {
    const ecommerceOps = await EcommerceOp.find();
    res.status(200).json(ecommerceOps);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get ecommerceOp content by ID
exports.getEcommerceOpContentById = async (req, res) => {
  try {
    const ecommerceOp = await EcommerceOp.findById(req.params.id);
    if (!ecommerceOp) {
      return res.status(404).json({ message: 'EcommerceOp not found' });
    }
    res.status(200).json(ecommerceOp);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update ecommerceOp content by ID
exports.updateEcommerceOpContent = async (req, res) => {
  try {
    const ecommerceOp = await EcommerceOp.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!ecommerceOp) {
      return res.status(404).json({ message: 'EcommerceOp not found' });
    }
    res.status(200).json(ecommerceOp);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete ecommerceOp content by ID
exports.deleteEcommerceOpContent = async (req, res) => {
  try {
    const ecommerceOp = await EcommerceOp.findByIdAndDelete(req.params.id);
    if (!ecommerceOp) {
      return res.status(404).json({ message: 'EcommerceOp not found' });
    }
    res.status(200).json({ message: 'EcommerceOp deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
