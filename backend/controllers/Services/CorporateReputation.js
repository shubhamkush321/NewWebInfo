const CorporateReputation = require('../../models/Services/CorporateReputation');

// Create or Update
const createCorporateReputation = async (req, res) => {
  try {
    const data = new CorporateReputation({ sections: req.body });
    const savedData = await data.save();
    res.status(201).json(savedData);
  } catch (error) {
    console.error('Error saving data:', error); 
    res.status(500).json({ message: error.message });
  }
};

// Read All
const getAllCorporateReputation = async (req, res) => {
  try {
    const data = await CorporateReputation.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Read One by ID
const getCorporateReputationById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await CorporateReputation.findById(id);
    if (!data) {
      return res.status(404).json({ message: 'Data not found' });
    }
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete
const deleteCorporateReputation = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await CorporateReputation.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).json({ message: 'Data not found' });
    }
    res.status(200).json({ message: 'Data deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createCorporateReputation,
  getAllCorporateReputation,
  getCorporateReputationById,
  deleteCorporateReputation,
};
