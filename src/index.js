import React from 'react';
import ReactDOM from 'react-dom/client';  // Use this for React 18+

import './index.css';  // Your CSS styles
import App from './App';  // Your main React component

const root = ReactDOM.createRoot(document.getElementById('root'));  // Create the root using createRoot
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
