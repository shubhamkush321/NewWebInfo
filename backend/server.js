const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

//Express Initialize App
const app = express();

//Middleware
app.use(bodyParser.json());
app.use(cors({
  origin: 'http://localhost:5173',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true
}));

//Auth
const authRoutes = require('./routes/Auth/authRoutes');  //login Routes
const mainRoutes = require("./routes/MainRoutes");       //Main Routes
const homeRoutes = require("./routes/HomeRoutes");       //Main Routes
app.use('/api', authRoutes);
app.use('/api', mainRoutes);
app.use('/api', homeRoutes);


// Error handling middleware
// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  if (err.name === 'ValidationError') {
    return res.status(400).json({ message: 'Validation Error', error: err.message });
  }
  res.status(500).json({ message: 'Internal Server Error', error: err.message });
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  connectDB();
});

