// controllers/PayPerController.js
const PayPer = require('../../models/Services/PayPerClick');

exports.getAll = async (req, res) => {
  try {
    const data = await PayPer.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.create = async (req, res) => {
  try {
    const newPayPer = new PayPer(req.body);
    await newPayPer.save();
    res.status(201).json(newPayPer);
  } catch (error) {
    res.status(400).json({ error: 'Bad request' });
  }
};

exports.update = async (req, res) => {
  try {
    const updatedPayPer = await PayPer.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedPayPer) {
      return res.status(404).json({ error: 'PayPer not found' });
    }
    res.json(updatedPayPer);
  } catch (error) {
    res.status(400).json({ error: 'Bad request' });
  }
};

exports.delete = async (req, res) => {
  try {
    const deletedPayPer = await PayPer.findByIdAndDelete(req.params.id);
    if (!deletedPayPer) {
      return res.status(404).json({ error: 'PayPer not found' });
    }
    res.json({ message: 'PayPer deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};
