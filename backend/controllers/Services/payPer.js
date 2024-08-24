const PayPerClick = require('../../models/Services/PayPerClick'); 

// Create a new PayPer entry
exports.createPayPer = async (req, res) => {
  try {
    console.log('Request Body:', req.body); 
    const payPerArray = req.body;
    if (!Array.isArray(payPerArray)) {
      return res.status(400).json({ error: 'Request body should be an array of items' });
    }
    const createdItems = await PayPerClick.insertMany(payPerArray);
    res.status(201).json(createdItems);
  } catch (error) {
    console.error('Error:', error.message); // Additional logging
    res.status(400).json({ error: error.message });
  }
};

// Get all PayPer entries
exports.getPayPer = async (req, res) => {
  try {
    const payPer = await PayPerClick.find();
    res.status(200).json(payPer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single PayPer entry by ID
exports.getPayPerById = async (req, res) => {
  try {
    const payPer = await PayPerClick.findById(req.params.id);
    if (!payPer) {
      return res.status(404).json({ error: 'PayPer entry not found' });
    }
    res.status(200).json(payPer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a PayPer entry by ID
exports.updatePayPer = async (req, res) => {
  try {
    const payPer = await PayPerClick.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!payPer) {
      return res.status(404).json({ error: 'PayPer entry not found' });
    }
    res.status(200).json(payPer);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a PayPer entry by ID
exports.deletePayPer = async (req, res) => {
  try {
    const payPer = await PayPerClick.findByIdAndDelete(req.params.id);
    if (!payPer) {
      return res.status(404).json({ error: 'PayPer entry not found' });
    }
    res.status(200).json({ message: 'PayPer entry deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
