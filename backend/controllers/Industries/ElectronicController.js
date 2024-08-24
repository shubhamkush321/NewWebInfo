// controllers/Industries/ElectronicController.js
const ElectronicsContent = require('../../models/Industries/ElectronicModel');

// Create multiple content entries
exports.createContent = async (req, res) => {
  try {
    const contentArray = req.body;
    const content = await ElectronicsContent.insertMany(contentArray);
    res.status(201).send(content);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

// Get all content
exports.getAllContent = async (req, res) => {
  try {
    const content = await ElectronicsContent.find();
    res.status(200).send(content);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Get content by ID
exports.getContentById = async (req, res) => {
  try {
    const content = await ElectronicsContent.findById(req.params.id);
    if (!content) {
      return res.status(404).send();
    }
    res.status(200).send(content);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Update content by ID
exports.updateContentById = async (req, res) => {
  try {
    const content = await ElectronicsContent.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!content) {
      return res.status(404).send();
    }
    res.status(200).send(content);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Delete content by ID
exports.deleteContentById = async (req, res) => {
  try {
    const content = await ElectronicsContent.findByIdAndDelete(req.params.id);
    if (!content) {
      return res.status(404).send();
    }
    res.status(200).send(content);
  } catch (error) {
    res.status(500).send(error);
  }
};