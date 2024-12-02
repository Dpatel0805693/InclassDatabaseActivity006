// src/components/PaintingList.js
import React, { useEffect } from 'react';


const PaintingList = ({ paintings, onSelectPainting }) => {


  return (
    <div id="smallWindow">
      {paintings.map((painting) => (
        <div id = "imageDiv" key={painting.PaintingID} onClick={() => onSelectPainting(painting)} style={{ cursor: 'pointer', padding: '10px' }}>
          <img src={`${painting.MuseumLink}/${painting.ImageFileName}`} alt={painting.Title} onError={(e)=>{
            e.target.src = "../logo512.png"
          }} />
          <button className="paintingtitle"><p >{painting.Title}</p></button>
        </div>
      ))}
    </div>
  );
};

export default PaintingList;
