import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const domContainer = document.getElementById('root');
const root = createRoot(domContainer);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();