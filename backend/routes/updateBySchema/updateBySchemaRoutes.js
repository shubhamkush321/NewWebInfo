const express = require("express")
const router = express.Router();

const { updateDocumentsBySchemaName } = require("../../controllers/updateBySchemaController/updateBySchemaController");


router.put("/", updateDocumentsBySchemaName);


module.exports = router;