const BrandReputation = require('../../models/Services/BrandReputation');

// Create a new Brand Reputation document
exports.createBrandReputation = async (req, res) => {
  try {
    const brandReputation = new BrandReputation(req.body);
    await brandReputation.save();
    res.status(201).json(brandReputation);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all Brand Reputation documents
exports.getAllBrandReputations = async (req, res) => {
  try {
    const brandReputations = await BrandReputation.find();
    res.status(200).json(brandReputations);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get a single Brand Reputation document by ID
exports.getBrandReputationById = async (req, res) => {
  try {
    const brandReputation = await BrandReputation.findById(req.params.id);
    if (!brandReputation) {
      return res.status(404).json({ error: 'Brand Reputation not found' });
    }
    res.status(200).json(brandReputation);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update a Brand Reputation document by ID
exports.updateBrandReputation = async (req, res) => {
  try {
    const brandReputation = await BrandReputation.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!brandReputation) {
      return res.status(404).json({ error: 'Brand Reputation not found' });
    }
    res.status(200).json(brandReputation);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a Brand Reputation document by ID
exports.deleteBrandReputation = async (req, res) => {
  try {
    const brandReputation = await BrandReputation.findByIdAndDelete(req.params.id);
    if (!brandReputation) {
      return res.status(404).json({ error: 'Brand Reputation not found' });
    }
    res.status(200).json({ message: 'Brand Reputation deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
