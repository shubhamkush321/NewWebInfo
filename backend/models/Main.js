const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the schema for different types of content
const contentSchema = new Schema({
  title: {
    type: String,
    required: true 
  },
  content: {
    type: String,
    required: true
  },
  description: {
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

//Fh0C9t1TP09ILv0e
const mainSchema = new Schema({
  items: [contentSchema]
});


const MainModel = mongoose.model('MainModel', mainSchema);

module.exports = {
  MainModel
};

