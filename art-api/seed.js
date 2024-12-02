
const Painting = require('./models/Painting');
const fs = require('fs');
const path = require('path');

const seedData = async () => {
    const paintings = JSON.parse(fs.readFileSync(path.join(__dirname, 'art.json'), 'utf-8'));
    try {
      for (const painting of paintings) {
      
        const newPainting = new Painting(painting);
        await newPainting.save();
      }
      console.log('Seeding completed!');
    } catch (error) {
      console.error('Error during seeding:', error);
    }
  };
  
  // Export the seeding function
  module.exports = seedData;