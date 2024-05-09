//App.js
import './App.css';
import Donor from './components/Organizitons/Organization';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes component
import OrganizationDetails from './components/Organizitons/OrganizationDetails';
import DonationForm from './components/DonationPage/DonationPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Donor />} />
        <Route path='/donation-form' element={<DonationForm />} />
        <Route path='/organization/:id' element={<OrganizationDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
