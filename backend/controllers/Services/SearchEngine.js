// controllers/digitalMarketingController.js
const DigitalMarketing = require('../../models/Services/SearchEngine');

// Get all SEO service data
exports.getAllData = async (req, res) => {
  try {
    const data = await DigitalMarketing.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a specific SEO service data by ID
exports.getDataById = async (req, res) => {
  try {
    const data = await DigitalMarketing.findById(req.params.id);
    if (!data) return res.status(404).json({ message: 'Data not found' });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create new SEO service data
exports.createData = async (req, res) => {
  const data = new DigitalMarketing(req.body);
  try {
    const newData = await data.save();
    res.status(201).json(newData);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update SEO service data by ID
exports.updateData = async (req, res) => {
  try {
    const data = await DigitalMarketing.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!data) return res.status(404).json({ message: 'Data not found' });
    res.json(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete SEO service data by ID
exports.deleteData = async (req, res) => {
  try {
    const data = await DigitalMarketing.findByIdAndDelete(req.params.id);
    if (!data) return res.status(404).json({ message: 'Data not found' });
    res.json({ message: 'Data deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
