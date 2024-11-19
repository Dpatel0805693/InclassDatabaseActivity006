const mongoose = require('mongoose');

const PaintingSchema = new mongoose.Schema({
    title: String,
    artist: String,
    year: Number,
    image: String, // URL of the painting's image
    description: String,
});

module.exports = mongoose.model('Painting', PaintingSchema);
