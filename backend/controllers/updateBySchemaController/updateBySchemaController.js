// Import all your models
const PayPer = require('../../models/Services/PayPerClick');
const DigitalMarketing = require('../../models/Services/DigitalMarketing');

// Create a mapping between schemaName and models
const models = {
    PayPer,
    DigitalMarketing,
};

// Controller function to find and update documents based on schemaName
const updateDocumentsBySchemaName = async (req, res) => {
    const { schemaName, updateData } = req.body; // Assume schemaName is passed as a URL parameter

    const model = models[schemaName];

    if (!model) {
        return res.status(404).json({ message: `Model not found for schemaName: ${schemaName}` });
    }

    if (!updateData) {
        return res.status(400).json({ message: 'Invalid update data: "sections" must be an array' });
    }

    try {
        // Check if documents exist
        const documents = await model.find();
        if (documents.length === 0) {
            return res.status(404).json({ message: `No documents found for schemaName: ${schemaName}` });
        }

        const updateResult = await model.updateMany({}, {
            $set: {
                sections: updateData
            }
        });


        res.status(200).json({
            message: `${updateResult} documents updated successfully in the ${schemaName} collection.`,
        });
    } catch (error) {
        console.error('Error updating documents:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = { updateDocumentsBySchemaName };
