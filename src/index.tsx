import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ScrollToTop from "react-scroll-to-top";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ScrollToTop color='#01e3af' width='42' height='36' viewBox='-15 -15 300 300'/>
    <App />
  </React.StrictMode>
);

reportWebVitals();
