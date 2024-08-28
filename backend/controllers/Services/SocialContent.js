const SocialContent = require('../../models/Services/SocialContent');

// Get all social content
exports.getAllSocialContents = async (req, res) => {
  try {
    const socialContents = await SocialContent.find();
    res.status(200).json(socialContents);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single social content by ID
exports.getSocialContentById = async (req, res) => {
  try {
    const socialContent = await SocialContent.findById(req.params.id);
    if (!socialContent) return res.status(404).json({ message: 'SocialContent not found' });
    res.status(200).json(socialContent);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new social content
exports.createSocialContent = async (req, res) => {
  try {
    // Extract data from request body
    const { title, schemaName, sections, faqs } = req.body;

    // Create new SocialContent instance with provided data
    const newSocialContent = new SocialContent({
      title,
      schemaName,
      sections: sections.map(section => ({
        header: section.header || null, // Handle optional header
        description: section.description || [],
        list: section.list || [],
        links: section.links || [],
        services: section.services || [],
        locations: section.locations || []
      })),
      faqs: faqs || []
    });

    // Save to database
    const savedSocialContent = await newSocialContent.save();
    res.status(201).json(savedSocialContent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update social content by ID
exports.updateSocialContent = async (req, res) => {
  try {
    const updatedSocialContent = await SocialContent.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedSocialContent) return res.status(404).json({ message: 'SocialContent not found' });
    res.status(200).json(updatedSocialContent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete social content by ID
exports.deleteSocialContent = async (req, res) => {
  try {
    const deletedSocialContent = await SocialContent.findByIdAndDelete(req.params.id);
    if (!deletedSocialContent) return res.status(404).json({ message: 'SocialContent not found' });
    res.status(200).json({ message: 'SocialContent deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};