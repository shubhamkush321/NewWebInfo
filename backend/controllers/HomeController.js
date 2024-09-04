const Home = require('../models/HomeModel');

// Create a new Home document
exports.createHome = async (req, res) => {
  try {
    // Destructure title and content from the request body
    const { title, content } = req.body;

    // Create a new instance of the Home model
    const newHome = new Home({
      title,
      content
    });

    // Save the new Home document to the database
    const savedHome = await newHome.save();

    // Send a success response with the saved document
    res.status(201).json(savedHome);
  } catch (error) {
    console.error('Error creating home:', error);
    // Send an error response in case of failure
    res.status(500).json({ message: 'Error creating home', error });
  }
};


exports.getAllHomes = async (req, res) => {
  try {
    const homes = await Home.find(); // Fetch all documents from the Home collection
    res.status(200).json(homes); // Respond with the retrieved documents
  } catch (error) {
    console.error('Error fetching homes:', error);
    res.status(500).json({ message: 'Error fetching homes', error });
  }
};