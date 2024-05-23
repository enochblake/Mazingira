// App.js
import './App.css';
import Donor from './components/Organizitons/Organization';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DonationPage from './components/DonationPage/DonationPage';
import OrganizationDetails from './components/Organizitons/OrganizationDetails';
import PayPage from './components/DonationsPay/PayPage';
import TestimonialsTwo from './components/StoriesFromUsers/TetimonialsTwo.jsx';
import BlogList from './components/DonationPage/BlogList';
import AddOrganization from './components/AddProduct/AddOrganizationPage.jsx';
import DonationAmount from './components/AddProduct/DonationAmount.jsx';
import AddBeneficiaryStory from './components/AddProduct/CreateBeneficiaryStories.jsx';
import BeneficiaryStories from './components/AddProduct/BeneficiaryStories.jsx';
import Home from './components/Pages/Home.jsx';
import AboutUs from './components/Pages/AboutUs.jsx';
import ContactUs from './components/Pages/ContactUs.jsx';
import Navbar from './components/Pages/Navbar.jsx';
import Organization from './components/Organizitons/Organization';
import BeneficiaryInventory from './components/BeneficiaryInventory/BeneficiaryInventory.jsx';
import AddBeneficiary from './components/BeneficiaryInventory/AddBeneficiary.jsx';
import Footer from './components/Pages/Footer.jsx';
import SignUp from './components/Login-signup/SignUp.jsx';
import Login from './components/Login-signup/Login.jsx';
import EnvironmentalOrgPage from './components/AddProduct/EnvironOrgPage.jsx';
import ApprovalPending from './components/AddProduct/ApprovalPending.jsx';
import Administrator from './components/Administrator/Administrator.jsx';
import AuthForm from './components/AuthForm/AuthForm.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/donor' element={<Donor />} />
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/all_organizations' element={<Organization />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/donation-page/:id' element={<DonationPage />} />
        <Route path='/organization/:id' element={<OrganizationDetails />} />
        <Route path='/pay-page' element={<PayPage />} />
        <Route path='/testimonials-page' element={<TestimonialsTwo />} />
        <Route path='/blogList-page' element={<BlogList />} />
        <Route path='/add_org-page' element={<AddOrganization />} />
        <Route path='/approvalPending-page' element={<ApprovalPending />} />
        <Route path='/amounts-page' element={<DonationAmount />} />
        <Route path='/create_stories-page' element={<AddBeneficiaryStory />} />
        <Route path='/b_stories-page' element={<BeneficiaryStories />} />
        <Route path='/B&I-page' element={<BeneficiaryInventory />} />
        <Route path='/add-beneficiary' element={<AddBeneficiary />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/environmental_org' element={<EnvironmentalOrgPage />} />
        <Route path='/admin-page' element={<Administrator />} />
        <Route path='/authForm' element={<AuthForm />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </Router>
  );
}

export default App;
