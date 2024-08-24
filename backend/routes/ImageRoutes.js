const express = require('express');
const multer = require('multer');
const Grid = require('gridfs-stream');
const mongoose = require('mongoose');

const router = express.Router();

// Initialize GridFS
const mongoURI = process.env.MONGO_URI;
const conn = mongoose.createConnection(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let gfs;
conn.once('open', () => {
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection('uploads');
});

// Multer setup for file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Route to upload image
router.post('/upload', upload.single('file'), (req, res) => {
  const { originalname, buffer } = req.file;

  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }

  const file = {
    filename: originalname,
    bucketName: 'uploads'
  };

  const uploadStream = gfs.createWriteStream(file);
  uploadStream.end(buffer);

  uploadStream.on('finish', () => {
    res.status(201).json({ message: 'File uploaded successfully' });
  });

  uploadStream.on('error', (error) => {
    res.status(500).json({ message: 'File upload failed', error });
  });
});

// Route to get all images
router.get('/images', async (req, res) => {
  try {
    const files = await gfs.files.find({}).toArray();
    res.json(files);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve files', error });
  }
});

// Route to get a specific image by filename
router.get('/images/:filename', (req, res) => {
  const { filename } = req.params;

  gfs.files.findOne({ filename }, (err, file) => {
    if (!file || file.length === 0) {
      return res.status(404).json({ message: 'No file found' });
    }

    if (file.contentType === 'image/jpeg' || file.contentType === 'image/png') {
      const readStream = gfs.createReadStream(file.filename);
      readStream.pipe(res);
    } else {
      res.status(404).json({ message: 'Not an image' });
    }
  });
});

module.exports = router;
