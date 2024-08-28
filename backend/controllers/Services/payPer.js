const PayPer = require('../../models/Services/PayPerClick');

// Create a new PayPer document
exports.createPayPer = async (req, res) => {
  try {
    const payPer = new PayPer(req.body);
    await payPer.save();
    res.status(201).json(payPer);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all PayPer documents
exports.getAllPayPer = async (req, res) => {
  try {
    const payPers = await PayPer.find();
    console.log(payPers + "woo");
    res.status(200).json(payPers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single PayPer document by ID
exports.getPayPerById = async (req, res) => {
  try {
    const payPer = await PayPer.findById(req.params.id);
    if (!payPer) return res.status(404).json({ message: 'PayPer not found' });
    res.status(200).json(payPer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a PayPer document by ID
exports.updatePayPer = async (req, res) => {
  try {
    const payPer = await PayPer.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!payPer) return res.status(404).json({ message: 'PayPer not found' });
    res.status(200).json(payPer);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a PayPer document by ID
exports.deletePayPer = async (req, res) => {
  try {
    const payPer = await PayPer.findByIdAndDelete(req.params.id);
    if (!payPer) return res.status(404).json({ message: 'PayPer not found' });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
