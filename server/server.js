const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

// Initialize app and middleware
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
const MONGO_URI = 'mongodb://localhost:27017/paintingsDB'; // Replace with your MongoDB URI
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));

// Painting Schema and Model
const paintingSchema = new mongoose.Schema({
    title: String,
    artist: String,
    year: Number,
    description: String,
    image: String, // URL for the image
});

const Painting = mongoose.model('Painting', paintingSchema);

// API to get all paintings
app.get('/api/paintings', async (req, res) => {
    try {
        const paintings = await Painting.find(); // Fetch all paintings
        res.status(200).json(paintings);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch paintings' });
    }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
