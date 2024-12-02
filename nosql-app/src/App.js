// src/App.js
import React from 'react';
import MainComponent from './components/MainComponent';
import './index.css';

function App() {
  return (
    <>
    <div id="Title">
      <h1>Painting Management</h1>
    </div>
    <div className="Window">
        <MainComponent />
      </div>
      </>
  );
}

export default App;
