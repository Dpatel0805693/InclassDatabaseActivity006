// src/components/PaintingForm.js
import React, { useState, useEffect } from 'react';

const PaintingForm = ({ selectedPainting, onUpdatePainting }) => {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (selectedPainting) {
      setFormData({
        Title: selectedPainting.Title || '',
        LastName: selectedPainting.LastName || '',
        GalleryName: selectedPainting.GalleryName || '',
        YearOfWork: selectedPainting.YearOfWork || '',
        Description: selectedPainting.Description || '',
        PaintingID: selectedPainting.PaintingID || '',
      });
    }
  }, [selectedPainting]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdatePainting(formData);
  };
  const handleReset = () => {
    // Optionally reset the formData to initial values (if you don't want the form reset logic to work automatically)
    setFormData({
      Title: selectedPainting?.Title || '',
      LastName: selectedPainting?.LastName || '',
      GalleryName: selectedPainting?.GalleryName || '',
      YearOfWork: selectedPainting?.YearOfWork || '',
      Description: selectedPainting?.Description || '',
      PaintingID: selectedPainting?.PaintingID || '',
    });
  };

  if (!selectedPainting) return <p className="default">Select a painting to edit its details</p>;

  return (
    <form onSubmit={handleSubmit}>
      <h3>Edit Painting</h3>
      <div id="titleInput">
        <label>Title:</label>
        <input name="Title" value={formData.Title || ''}
 onChange={handleChange} />
      </div>
      <div id="lastName">
        <label>Artist Last Name:</label>
        <input name="LastName" value={formData.LastName || ''} onChange={handleChange} />
      </div>
      <div id="gallery">
        <label>Gallery Name:</label>
        <input name="GalleryName" value={formData.GalleryName || ''} onChange={handleChange} />
      </div>
      <div id="year">
        <label>Year of Work:</label>
        <input name="YearOfWork" type="number" value={formData.YearOfWork || ''} onChange={handleChange} />
      </div>
      <div id="desc">
        <label>Description:</label>
        <textarea name="Description" value={formData.Description || ''} onChange={handleChange}></textarea>
      </div>
      <button type="submit">Save Changes</button>
      <button type="reset" onClick={handleReset}>Reset</button>
    </form>
  );
};

export default PaintingForm;
