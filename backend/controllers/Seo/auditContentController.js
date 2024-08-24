// controllers/auditContentController.js
const AuditContent = require('../../models/Seo/AuditContent');

exports.createAuditContents = async (req, res) => {
  try {
    const auditContents = req.body; // Assuming body is an array of audit content items
    const createdContents = await AuditContent.insertMany(auditContents);
    res.status(201).json(createdContents);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Read all AuditContent
exports.getAllAuditContents = async (req, res) => {
  try {
    const auditContents = await AuditContent.find();
    res.status(200).json(auditContents);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Read a single AuditContent by ID
exports.getAuditContentById = async (req, res) => {
  try {
    const auditContent = await AuditContent.findById(req.params.id);
    if (!auditContent) {
      return res.status(404).json({ error: 'AuditContent not found' });
    }
    res.status(200).json(auditContent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update an AuditContent by ID
exports.updateAuditContent = async (req, res) => {
  try {
    const auditContent = await AuditContent.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!auditContent) {
      return res.status(404).json({ error: 'AuditContent not found' });
    }
    res.status(200).json(auditContent);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete an AuditContent by ID
exports.deleteAuditContent = async (req, res) => {
  try {
    const auditContent = await AuditContent.findByIdAndDelete(req.params.id);
    if (!auditContent) {
      return res.status(404).json({ error: 'AuditContent not found' });
    }
    res.status(200).json({ message: 'AuditContent deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
