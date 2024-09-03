const express = require('express');
const router = express.Router();
const homeController = require('../controllers/HomeController');

// Define routes
router.post('/homes', homeController.createHome);
router.get('/homes', homeController.getAllHomes);
router.get('/homes/:id', homeController.getHomeById);
router.put('/homes/:id', homeController.updateHomeById);
router.delete('/homes/:id', homeController.deleteHomeById);

module.exports = router;
