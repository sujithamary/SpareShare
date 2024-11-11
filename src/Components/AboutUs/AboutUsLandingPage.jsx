import React from 'react';
import Vision from './Vision';
import AboutUs from './AboutUs';
import WhyChooseUs from './WhyChooseUs';
import Mission from '../Sections/MissionSection';
import FAQ from './FAQ/FAQ';
import VolunteerAd from '../Volunteers/VolunteerAd/VolunteerAd';

const AboutUsLandingPage = () => {
  return (
    <div>
      <Vision/>
      <AboutUs/>
      <Mission/>
      <WhyChooseUs/>
      <VolunteerAd/>
      <FAQ/>
    </div>
  );
}

export default AboutUsLandingPage;
