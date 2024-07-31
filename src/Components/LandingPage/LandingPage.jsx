import React from 'react';
import HomeSection from '../Sections/HomeSection';
import DonationSection from '../Sections/DonationSection';
import Mission from '../Sections/MissionSection';
import About from '../Sections/AboutSection';
import Contact from '../Sections/ContactSection';
import Navbar from '../Sections/Navbar';
import Getorganized from '../Sections/Getorganized';
import Footer from '../Sections/Footer';

function LandingPage({ isLoggedIn, username }) {
  return (
    <div>
        <Navbar isLoggedIn={isLoggedIn} username={username} />
        <HomeSection/>
        <DonationSection/>
        <About/>
        <Mission/>
        <Contact/>
        <Getorganized/>
        <Footer/>
    </div>
  )
}

export default LandingPage;
