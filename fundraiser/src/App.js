// App.js
import './App.css';
import Donor from './components/Organizitons/Organization';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes component
import DonationPage from './components/DonationPage/DonationPage'; // Import DonationPage component
import OrganizationDetails from './components/Organizitons/OrganizationDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Donor />} />
        <Route path='/donation-page/:id' element={<DonationPage />} />
        <Route path='/organization/:id' element={<OrganizationDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
