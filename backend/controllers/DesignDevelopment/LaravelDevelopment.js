const Laravel = require('../../models/DesignDevelopment/LaravelDevelopment');

// Create a new Laravel document
exports.createLaravel = async (req, res) => {
  console.log('Request Body:', req.body);  // Log request body

  try {
    if (!Array.isArray(req.body) || req.body.length === 0) {
      return res.status(400).json({ message: 'Request body must be a non-empty array.' });
    }

    for (const item of req.body) {
      if (!item.type) {
        return res.status(400).json({ message: 'Field "type" is required for each item.' });
      }
    }
    const newLaravel = await Laravel.insertMany(req.body);
    res.status(201).json(newLaravel);
  } catch (error) {
    console.error('Error:', error);  // Log error
    res.status(500).json({ message: error.message });
  }
};
// Get all Laravel documents
exports.getAllLaravel = async (req, res) => {
  try {
    const laravelData = await Laravel.find();
    res.status(200).json(laravelData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single Laravel document by ID
exports.getLaravelById = async (req, res) => {
  try {
    const laravel = await Laravel.findById(req.params.id);
    if (laravel) {
      res.status(200).json(laravel);
    } else {
      res.status(404).json({ message: 'Laravel document not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a single Laravel document by ID
exports.updateLaravel = async (req, res) => {
  try {
    const updatedLaravel = await Laravel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (updatedLaravel) {
      res.status(200).json(updatedLaravel);
    } else {
      res.status(404).json({ message: 'Laravel document not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a single Laravel document by ID
exports.deleteLaravel = async (req, res) => {
  try {
    const deletedLaravel = await Laravel.findByIdAndDelete(req.params.id);
    if (deletedLaravel) {
      res.status(200).json({ message: 'Laravel document deleted' });
    } else {
      res.status(404).json({ message: 'Laravel document not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
