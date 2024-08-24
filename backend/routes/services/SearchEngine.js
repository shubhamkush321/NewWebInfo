// routes/searchEngineRoutes.js
const express = require('express');
const router = express.Router();
const {
  createSearchEngine,
  getAllSearchEngines,
  getSearchEngineById,
  updateSearchEngine,
  deleteSearchEngine
} = require('../../controllers/Services/SearchEngine');

// CRUD routes
router.post('/', createSearchEngine);
router.get('/', getAllSearchEngines);
router.get('/:id', getSearchEngineById);
router.put('/:id', updateSearchEngine);
router.delete('/:id', deleteSearchEngine);

module.exports = router;
