const DigitalMarketing = require('../../models/Services/DigitalMarketing');

// Get all Digital Marketing data
const getAll = async (req, res) => {
  try {
    const digitalMarketing = await DigitalMarketing.find();
    res.json(digitalMarketing);
  } catch (err) {
    res.status(500).send(err);
  }
};

// Create new Digital Marketing data
const create = async (req, res) => {
  try {
    const newDigitalMarketing = new DigitalMarketing(req.body);
    await newDigitalMarketing.save();
    res.status(201).json(newDigitalMarketing);
  } catch (err) {
    res.status(500).send(err);
  }
};

// Update existing Digital Marketing data
const update = async (req, res) => {
  try {
    const digitalMarketing = await DigitalMarketing.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!digitalMarketing) return res.status(404).send('Digital Marketing not found');
    res.json(digitalMarketing);
  } catch (err) {
    res.status(500).send(err);
  }
};

// Delete Digital Marketing data
const deleteData = async (req, res) => {
  try {
    const result = await DigitalMarketing.findByIdAndDelete(req.params.id);
    if (!result) return res.status(404).send('Digital Marketing not found');
    res.status(204).send();
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = {
  getAll,
  create,
  update,
  delete: deleteData,
};
