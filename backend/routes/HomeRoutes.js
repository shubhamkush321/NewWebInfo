const express = require('express');
const router = express.Router();
const homeController = require('../controllers/HomeController');

// Define routes
router.post('/homes', homeController.createHome);
router.get('/homes', homeController.getAllHomes);

module.exports = router;
