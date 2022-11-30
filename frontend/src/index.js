import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './app.jsx'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
//import './styles.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
