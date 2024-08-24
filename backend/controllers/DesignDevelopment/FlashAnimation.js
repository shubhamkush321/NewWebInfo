// controllers/flashAnimationController.js
const FlashAnimation = require('../../models/DesignDevelopment/FlashAnimation');

exports.createSection = async (req, res) => {
  try {
    const { type, id, title, paragraphs, image, imageAlt, listItems } = req.body;

    // Validate required fields
    if (!type || !id || !title) {
      return res.status(400).json({ message: "type, id, and title are required" });
    }

    // Create and save the new section
    const newSection = new FlashAnimation({ type, id, title, paragraphs, image, imageAlt, listItems });
    await newSection.save();
    res.status(201).json(newSection);
  } catch (err) {
    console.error("Error creating section:", err);
    res.status(500).json({ message: err.message });
  }
};

exports.getAllSections = async (req, res) => {
  try {
    const sections = await FlashAnimation.find();
    res.status(200).json(sections);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getSectionById = async (req, res) => {
  try {
    const section = await FlashAnimation.findById(req.params.id);
    if (!section) {
      return res.status(404).json({ message: "Section not found" });
    }
    res.status(200).json(section);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateSection = async (req, res) => {
  try {
    const section = await FlashAnimation.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!section) {
      return res.status(404).json({ message: "Section not found" });
    }
    res.status(200).json(section);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteSection = async (req, res) => {
  try {
    const section = await FlashAnimation.findByIdAndDelete(req.params.id);
    if (!section) {
      return res.status(404).json({ message: "Section not found" });
    }
    res.status(200).json({ message: "Section deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
