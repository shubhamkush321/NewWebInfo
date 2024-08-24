const EnterPriceContent = require('../../models/Seo/EnterPriceContent');

// Create a new entry
exports.create = async (req, res) => {
  try {
    const { body } = req;
    if (!Array.isArray(body)) {
      return res.status(400).json({ error: 'Data must be an array' });
    }
    const invalidItems = body.filter(item => {
      if (item.type === 'list') {
        return !item.items || !item.items.every(subItem => subItem.text);
      }
      return !item.type || !item.text || !item.className;
    });

    if (invalidItems.length > 0) {
      return res.status(400).json({ 
        error: 'Some items are missing required fields.',
        details: invalidItems
      });
    }

    // Save each item to the database
    const results = [];
    for (const item of body) {
      const newContent = new EnterPriceContent(item);
      const savedContent = await newContent.save();
      results.push(savedContent);
    }

    res.status(201).json(results);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all entries
exports.getAll = async (req, res) => {
  try {
    const contents = await EnterPriceContent.find();
    res.status(200).json(contents);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get a single entry by ID
exports.getById = async (req, res) => {
  try {
    const content = await EnterPriceContent.findById(req.params.id);
    if (!content) {
      return res.status(404).json({ error: 'Content not found' });
    }
    res.status(200).json(content);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update an entry by ID
exports.update = async (req, res) => {
  try {
    const updatedContent = await EnterPriceContent.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedContent) {
      return res.status(404).json({ error: 'Content not found' });
    }
    res.status(200).json(updatedContent);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete an entry by ID
exports.delete = async (req, res) => {
  try {
    const deletedContent = await EnterPriceContent.findByIdAndDelete(req.params.id);
    if (!deletedContent) {
      return res.status(404).json({ error: 'Content not found' });
    }
    res.status(200).json({ message: 'Content deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};