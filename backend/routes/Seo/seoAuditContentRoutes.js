const express = require('express');
const router = express.Router();
const auditContentController = require('../../controllers/Seo/auditContentController');

// Create a new AuditContent
router.post('/', auditContentController.createAuditContents);

// Read all AuditContent
router.get('/', auditContentController.getAllAuditContents);

// Read a single AuditContent by ID
router.get('/:id', auditContentController.getAuditContentById);

// Update an AuditContent by ID
router.put('/:id', auditContentController.updateAuditContent);

// Delete an AuditContent by ID
router.delete('/:id', auditContentController.deleteAuditContent);

module.exports = router;
