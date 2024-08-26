// routes/digitalMarketingRoutes.js
const express = require('express');
const router = express.Router();
const {
  getAllData,
  getDataById,
  createData,
  updateData,
  deleteData
} = require('../../controllers/Services/SearchEngine');

// Define routes
router.get('/', getAllData);
router.get('/:id', getDataById);
router.post('/', createData);
router.put('/:id', updateData);
router.delete('/:id', deleteData);

module.exports = router;
