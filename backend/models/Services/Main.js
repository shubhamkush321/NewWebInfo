const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the schema for different types of content
const contentSchema = new Schema({
  Title: {
    type: String,
    required: true
  },
  Content: {
    type: String,
    required: true
  },
  Description: {
    type: String
  },
  link: {
    text: {
      type: String
    },
    url: {
      type: String
    }
  }
});

// Define the main schema to include an array of content types
const mainSchema = new Schema({
  items: [contentSchema] // Array of contentSchema objects
});
items: [
  {
    type: OnlineReputation
  },
  {
    type: PhpDevelopment
  },
  {
    type: DigitalMarketing
  }
]

// Create a model for the main schema
const MainModel = mongoose.model('MainModel', mainSchema);

module.exports = {
  MainModel
};


// Git hub repo change new and make colabroto
// models\Main.js
// models change and add contoller