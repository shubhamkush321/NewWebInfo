const Home = require('../models/HomeModel'); 

// Create a new Home document
exports.createHome = async (req, res) => {
  try {
    const { title, content } = req.body;

    const newHome = new Home({
      title,
      content
    });

    const savedHome = await newHome.save();
    res.status(201).json(savedHome);
  } catch (error) {
    console.error('Error creating home:', error);
    res.status(500).json({ message: 'Error creating home', error });
  }
};

// Get all Home documents
exports.getAllHomes = async (req, res) => {
  try {
    const homes = await Home.find();
    res.status(200).json(homes);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching homes', error });
  }
};

// Get a specific Home document by ID
exports.getHomeById = async (req, res) => {
  try {
    const { id } = req.params;
    const home = await Home.findById(id);

    if (!home) {
      return res.status(404).json({ message: 'Home not found' });
    }

    res.status(200).json(home);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching home', error });
  }
};

// Update a specific Home document by ID
exports.updateHomeById = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;

    const updatedHome = await Home.findByIdAndUpdate(
      id,
      { title, content },
      { new: true, runValidators: true }
    );

    if (!updatedHome) {
      return res.status(404).json({ message: 'Home not found' });
    }

    res.status(200).json(updatedHome);
  } catch (error) {
    res.status(500).json({ message: 'Error updating home', error });
  }
};

// Delete a specific Home document by ID
exports.deleteHomeById = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedHome = await Home.findByIdAndDelete(id);

    if (!deletedHome) {
      return res.status(404).json({ message: 'Home not found' });
    }

    res.status(200).json({ message: 'Home deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting home', error });
  }
};