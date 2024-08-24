// controllers/searchEngineController.js
const SearchEngine = require('../../models/Services/SearchEngine');

// Create a new document
exports.createSearchEngine = async (req, res) => {
  try {
    const searchEngine = new SearchEngine(req.body);
    await searchEngine.save();
    res.status(201).json(searchEngine);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Read all documents
exports.getAllSearchEngines = async (req, res) => {
  try {
    const searchEngines = await SearchEngine.find();
    res.status(200).json(searchEngines);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Read a single document
exports.getSearchEngineById = async (req, res) => {
  try {
    const searchEngine = await SearchEngine.findById(req.params.id);
    if (!searchEngine) {
      return res.status(404).json({ error: 'SearchEngine not found' });
    }
    res.status(200).json(searchEngine);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update a document
exports.updateSearchEngine = async (req, res) => {
  try {
    const searchEngine = await SearchEngine.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!searchEngine) {
      return res.status(404).json({ error: 'SearchEngine not found' });
    }
    res.status(200).json(searchEngine);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a document
exports.deleteSearchEngine = async (req, res) => {
  try {
    const searchEngine = await SearchEngine.findByIdAndDelete(req.params.id);
    if (!searchEngine) {
      return res.status(404).json({ error: 'SearchEngine not found' });
    }
    res.status(200).json({ message: 'SearchEngine deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
