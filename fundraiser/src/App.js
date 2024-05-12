// App.js
import './App.css';
import Donor from './components/Organizitons/Organization';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import DonationPage from './components/DonationPage/DonationPage'; 
import OrganizationDetails from './components/Organizitons/OrganizationDetails';
import PayPage from './components/DonationsPay/PayPage';
import TestimonialsTwo from './components/StoriesFromUsers/TetimonialsTwo.jsx'
import BlogList from './components/DonationPage/BlogList'
import AddOrganization from './components/AddProduct/AddOrganizationPage.jsx';
import RegistrationPage from './components/AddProduct/RegistrationPage.jsx';
import DonationAmount from './components/AddProduct/DonationAmount.jsx';
import BeneficiaryStory from './components/AddProduct/BeneficiaryStories.jsx';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Donor />} />
        <Route path='/donation-page/:id' element={<DonationPage />} />
        <Route path='/organization/:id' element={<OrganizationDetails />} />
        <Route path='/pay-page' element={<PayPage />} />
        <Route path='/testimonials-page' element={<TestimonialsTwo />} />
        <Route path='/blogList-page' element={<BlogList />} />
        <Route path='/add_org-page' element={<AddOrganization />} />
        <Route path='/register_org-page' element={<RegistrationPage />} />
        <Route path='/amounts-page' element={<DonationAmount />} />
        <Route path='/b_stories-page' element={<BeneficiaryStory />} />
      </Routes>
    </Router>
  );
}

export default App;
