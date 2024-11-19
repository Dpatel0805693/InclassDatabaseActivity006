const express = require('express');
const Painting = require('../models/Painting');
const router = express.Router();

// Fetch all paintings
router.get('/', async (req, res) => {
    try {
        const paintings = await Painting.find();
        res.json(paintings);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Update a painting
router.post('/update', async (req, res) => {
    const { id, title, artist, year, description } = req.body;
    try {
        await Painting.findByIdAndUpdate(id, { title, artist, year, description });
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
