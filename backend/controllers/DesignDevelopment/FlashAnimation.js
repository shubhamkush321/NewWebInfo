const FlashData = require('../../models/DesignDevelopment/FlashAnimation');

// Create a new FlashData entry
exports.createFlashData = async (req, res) => {
  console.log(req.body); // Log request body for debugging
  try {
    const flashData = Array.isArray(req.body) ? req.body : [req.body];
    const result = await FlashData.insertMany(flashData); // Use insertMany if sending an array
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Read all FlashData entries
exports.getAllFlashData = async (req, res) => {
  try {
    const flashData = await FlashData.find();
    res.status(200).json(flashData);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Read a single FlashData entry by ID
exports.getFlashDataById = async (req, res) => {
  try {
    const flashData = await FlashData.findById(req.params.id);
    if (!flashData) return res.status(404).json({ error: 'FlashData not found' });
    res.status(200).json(flashData);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update a FlashData entry by ID
exports.updateFlashData = async (req, res) => {
  try {
    const updatedFlashData = await FlashData.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedFlashData) return res.status(404).json({ error: 'FlashData not found' });
    res.status(200).json(updatedFlashData);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a FlashData entry by ID
exports.deleteFlashData = async (req, res) => {
  try {
    const deletedFlashData = await FlashData.findByIdAndDelete(req.params.id);
    if (!deletedFlashData) return res.status(404).json({ error: 'FlashData not found' });
    res.status(200).json({ message: 'FlashData deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
