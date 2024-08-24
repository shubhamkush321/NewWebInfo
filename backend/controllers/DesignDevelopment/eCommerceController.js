const ECommerce = require('../../models/DesignDevelopment/ECommerce');

// Create or update eCommerce data
exports.createOrUpdateECommerce = async (req, res) => {
  try {
    const data = req.body;
    const result = await ECommerce.findOneAndUpdate({}, data, { upsert: true, new: true });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all eCommerce data
exports.getAllECommerce = async (req, res) => {
  try {
    const data = await ECommerce.find({});
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get eCommerce data by ID
exports.getECommerceById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await ECommerce.findById(id);
    if (!data) return res.status(404).json({ message: 'Data not found' });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete eCommerce data by ID
exports.deleteECommerceById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await ECommerce.findByIdAndDelete(id);
    if (!result) return res.status(404).json({ message: 'Data not found' });
    res.status(200).json({ message: 'Data deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
