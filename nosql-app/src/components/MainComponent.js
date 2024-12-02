// src/components/MainComponent.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PaintingList from './PaintingList';
import PaintingForm from './PaintingForm';

const MainComponent = () => {
  const [paintings, setPaintings] = useState([]);
  const [selectedPainting, setSelectedPainting] = useState(null);

  // Fetch paintings from MongoDB
  useEffect(() => {
    const fetchPaintings = async () => {
      try {
        // Use the full URL to avoid CORS issues and incorrect port
        const response = await axios.get('http://localhost:3001/api/paintings');
        setPaintings(response.data);
        console.log("Fetched paintings:", response.data);  // Log the fetched data

        console.log("fetched paintings");
      } catch (error) {
        console.error('Error fetching paintings:', error);
      }
    };
    fetchPaintings();
  }, []);
  
  

  // Update painting in MongoDB
  const updatePainting = async (updatedPainting) => {
    try {
      const paintingID = updatedPainting.PaintingID
      await axios.put(`http://localhost:3001/api/paintings/${paintingID}`, updatedPainting);
      console.log("starting to look for it");
      setPaintings((prevPaintings) =>
        prevPaintings.map((p) => (p.PaintingID === paintingID ? updatedPainting : p))
      );
      alert('Painting updated successfully!');
    } catch (error) {
      console.error('Error updating painting:', error);
      alert('Failed to update painting.');
    }
  };

  return (
    <div id="outer">
      <PaintingList paintings={paintings} onSelectPainting={setSelectedPainting} />
      <PaintingForm selectedPainting={selectedPainting} onUpdatePainting={updatePainting} />
    </div>
  );
};

export default MainComponent;
