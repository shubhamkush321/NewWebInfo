const BrandReputation = require('../../models/Services/BrandReputation');

// Create
const createBrandReputation = async (req, res) => {
  try {
    const data = new BrandReputation(req.body);
    const savedData = await data.save();
    res.status(201).json(savedData);
  } catch (error) {
    console.error('Error saving data:', error); 
    res.status(500).json({ message: error.message });
  }
};

// Read All
const getAllBrandReputations = async (req, res) => {
  try {
    const data = await BrandReputation.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Read One by ID
const getBrandReputationById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await BrandReputation.findById(id);
    if (!data) {
      return res.status(404).json({ message: 'Data not found' });
    }
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update
const updateBrandReputation = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = await BrandReputation.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedData) {
      return res.status(404).json({ message: 'Data not found' });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete
const deleteBrandReputation = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await BrandReputation.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).json({ message: 'Data not found' });
    }
    res.status(200).json({ message: 'Data deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createBrandReputation,
  getAllBrandReputations,
  getBrandReputationById,
  updateBrandReputation,
  deleteBrandReputation,
};
