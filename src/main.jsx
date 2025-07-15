import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Home from './pages/Home';
import School from './pages/School';
import CountyMap from './pages/CountyMap';
import Company from './pages/Company';
import Expert from './pages/Expert';
import Explore from './pages/Explore';
import ExploreContent from './pages/ExploreContent';
import TechnicalEducation from './pages/TechnicalEducation';
import TechnicalEducationContent from './pages/TechnicalEducationContent';
import Experience from './pages/Experience';
import ExperienceContent from './pages/ExperienceContent';
import TechnicalEducationDetail from './pages/TechnicalEducationDetail';
import Login from './pages/Login';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/County-Info/">
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="map" element={<CountyMap />} />
          <Route path="school" element={<School />} />
          <Route path="company" element={<Company />} />
          <Route path="expert" element={<Expert />} />
          <Route path="explore" element={<Explore />} />
          <Route path="explore/:id" element={<ExploreContent />} />
          <Route path="technical-education" element={<TechnicalEducation />} />
          <Route path="technical-education/:id" element={<TechnicalEducationContent />} />
          <Route path="technical-education/:id/:detail_id" element={<TechnicalEducationDetail />} />
          <Route path="experience" element={<Experience />} />
          <Route path="experience/:id" element={<ExperienceContent />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
