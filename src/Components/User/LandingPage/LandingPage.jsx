import React, { useState } from 'react';
import HomeSection from '../../Sections/HomeSection';
import DonationSection from '../../Sections/DonationSection';
import About from '../../Sections/AboutSection';
import Contact from '../../Sections/ContactSection';
import Navbar from '../../Sections/Navbar';
import Getorganized from '../../Sections/Getorganized';
import Footer from '../../Sections/Footer';

function LandingPage() {
  
  return (
    <div>
      <Navbar/>
      <HomeSection/>
      <DonationSection/>
      <About/>
      <Contact/>
      <Getorganized/>
      <Footer/>
    </div>
  );
}

export default LandingPage;
