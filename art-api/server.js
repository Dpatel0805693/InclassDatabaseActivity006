const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Painting = require('./models/Painting');
const seedData=require('./seed')


const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/artDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
  return seedData(); // Run seeding before starting the server
})

.catch((err) => {
  console.error('Error connecting to MongoDB or seeding:', err);
});



// Get all paintings
app.get('/api/paintings', async (req, res) => {
  try {
    const paintings = await Painting.find();
    console.log("Getting all paintings",paintings);
    res.json(paintings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a painting by ID
app.get('/api/paintings/:id', async (req, res) => {
  try {
    const painting = await Painting.findOne({ PaintingID: req.params.id });
    if (!painting) return res.status(404).json({ message: 'Painting not found' });
    res.json(painting);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a painting by ID
app.put('/api/paintings/:id', async (req, res) => {
  try {
    const updatedPainting = await Painting.findOneAndUpdate(
      { PaintingID: req.params.id },
      req.body,
      { new: true }
    );
    if (!updatedPainting) return res.status(404).json({ message: 'Painting not found' });
    res.json(updatedPainting);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
