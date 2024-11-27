const mongoose = require('mongoose');

const paintingSchema = new mongoose.Schema({
    title: String,
    artist: String,
    year: Number,
    description: String,
    image: String,
});

module.exports = mongoose.models.Painting || mongoose.model('Painting', paintingSchema);
