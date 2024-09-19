import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals'; //preforamnce tracking 
import { HashRouter } from 'react-router-dom'; //for navigation in the website using #

//creating root to render react components
const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(
  <HashRouter>
    <App /> 
  </HashRouter>
);

reportWebVitals(); //performance tracking function