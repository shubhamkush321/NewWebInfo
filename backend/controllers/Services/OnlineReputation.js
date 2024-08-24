const OnlineReputation = require('../../models/Services/OnlineReputation');

// Create or Update
const createOnlineReputation = async (req, res) => {
  try {
    const data = new OnlineReputation(req.body);
    const savedData = await data.save();
    res.status(201).json(savedData);
  } catch (error) {
    console.error('Error:', error.message); 
    res.status(500).json({ message: error.message });
  }
};

// Read All
const getAllOnlineReputation = async (req, res) => {
  try {
    const data = await OnlineReputation.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Read One by ID
const getOnlineReputationById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await OnlineReputation.findById(id);
    if (!data) {
      return res.status(404).json({ message: 'Data not found' });
    }
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update
const updateOnlineReputation = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = await OnlineReputation.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedData) {
      return res.status(404).json({ message: 'Data not found' });
    }
    res.status(200).json(updatedData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Delete
const deleteOnlineReputation = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await OnlineReputation.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).json({ message: 'Data not found' });
    }
    res.status(200).json({ message: 'Data deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createOnlineReputation,
  getAllOnlineReputation,
  getOnlineReputationById,
  updateOnlineReputation,
  deleteOnlineReputation,
};
