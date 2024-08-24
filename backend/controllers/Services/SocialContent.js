const SocialContent = require('../../models/Services/SocialContent');

// Create a new social content
exports.createSocialContent = async (req, res) => {
  try {
    const socialContent = new SocialContent(req.body);
    await socialContent.save();
    res.status(201).json(socialContent);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all social contents
exports.getAllSocialContent = async (req, res) => {
  try {
    const socialContents = await SocialContent.find();
    res.status(200).json(socialContents);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get social content by ID
exports.getSocialContentById = async (req, res) => {
  try {
    const socialContent = await SocialContent.findById(req.params.id);
    if (!socialContent) {
      return res.status(404).json({ error: 'SocialContent not found' });
    }
    res.status(200).json(socialContent);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update social content by ID
exports.updateSocialContentById = async (req, res) => {
  try {
    const socialContent = await SocialContent.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!socialContent) {
      return res.status(404).json({ error: 'SocialContent not found' });
    }
    res.status(200).json(socialContent);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete social content by ID
exports.deleteSocialContentById = async (req, res) => {
  try {
    const socialContent = await SocialContent.findByIdAndDelete(req.params.id);
    if (!socialContent) {
      return res.status(404).json({ error: 'SocialContent not found' });
    }
    res.status(200).json({ message: 'SocialContent deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
