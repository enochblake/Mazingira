import React from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import About from './components/About.js';
import Contact from './components/Contact.js';
import AuthForm from './components/AuthForm.js';
import Home from './components/Home.js';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
   <div className='app'>
    <Navbar />
    <Routes>

        <Route exact path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/authform" element={<AuthForm/>} />

    </Routes>
   </div> 
  );
}

export default App;


