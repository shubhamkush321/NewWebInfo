const { MainModel } = require('../models/Main');

const createMainDocument = async (req, res) => {
  try {
    const { items } = req.body;
    if (!items) {
      return res.status(400).json({ error: 'Invalid data: "items" should be an array.' });
    }
    const newDocument = new MainModel({ items });
    const savedDocument = await newDocument.save();
    res.status(201).json(savedDocument);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const getAllDocuments = async (req, res) => {
  try {
    const documents = await MainModel.find();
    res.status(200).json(documents);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createMainDocument,
  getAllDocuments,
};
