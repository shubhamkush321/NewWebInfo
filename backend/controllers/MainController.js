// controllers/mainController.js

const { MainModel } = require('../models/mainModel'); // Adjust the path as needed

// Create a new item
exports.createItem = async (req, res) => {
  try {
    const newItem = new MainModel(req.body);
    await newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all items
exports.getAllItems = async (req, res) => {
  try {
    const items = await MainModel.find();
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get an item by ID
exports.getItemById = async (req, res) => {
  try {
    const item = await MainModel.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update an item by ID
exports.updateItem = async (req, res) => {
  try {
    const item = await MainModel.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.status(200).json(item);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete an item by ID
exports.deleteItem = async (req, res) => {
  try {
    const item = await MainModel.findByIdAndDelete(req.params.id);
    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.status(200).json({ message: 'Item deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
