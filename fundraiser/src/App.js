// App.js
import './App.css';
import Donor from './components/Organizitons/Organization';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes component
import DonationPage from './components/DonationPage/DonationPage'; // Import DonationPage component
import OrganizationDetails from './components/Organizitons/OrganizationDetails';
import PayPage from './components/DonationsPay/PayPage';
import TestimonialsTwo from './components/StoriesFromUsers/Stories.jsx'
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Donor />} />
        <Route path='/donation-page/:id' element={<DonationPage />} />
        <Route path='/organization/:id' element={<OrganizationDetails />} />
        <Route path='/pay-page' element={<PayPage />} />
        <Route path='/testimonials-page' element={<TestimonialsTwo />} />

      </Routes>
    </Router>
  );
}

export default App;
