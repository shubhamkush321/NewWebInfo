const CelebrityReputation = require('../../models/Services/CelebrityReputation');

// Create a new document
exports.createCelebrityReputation = async (req, res) => {
  try {
    const data = req.body;
    if (!Array.isArray(data)) {
      return res.status(400).json({ message: 'Invalid data format. Expected an array of documents.' });
    }
    const results = await CelebrityReputation.insertMany(data);
    res.status(201).json(results);
  } catch (error) {
    console.error('Error creating celebrity reputations:', error); 
    res.status(500).json({ message: error.message });
  }
};

// Get all documents
exports.getAllCelebrityReputations = async (req, res) => {
  try {
    const reputations = await CelebrityReputation.find();
    res.status(200).json(reputations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single document by ID
exports.getCelebrityReputationById = async (req, res) => {
  try {
    const reputation = await CelebrityReputation.findById(req.params.id);
    if (!reputation) return res.status(404).json({ message: 'Document not found' });
    res.status(200).json(reputation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a document by ID
exports.updateCelebrityReputationById = async (req, res) => {
  try {
    const updatedReputation = await CelebrityReputation.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedReputation) return res.status(404).json({ message: 'Document not found' });
    res.status(200).json(updatedReputation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a document by ID
exports.deleteCelebrityReputationById = async (req, res) => {
  try {
    const deletedReputation = await CelebrityReputation.findByIdAndDelete(req.params.id);
    if (!deletedReputation) return res.status(404).json({ message: 'Document not found' });
    res.status(200).json({ message: 'Document deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
