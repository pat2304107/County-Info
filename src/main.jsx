import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Home from './pages/Home';
import School from './pages/School';
import CountyMap from './pages/CountyMap';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="school" element={<School />} />
          <Route path="map" element={<CountyMap />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
