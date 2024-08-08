import React from 'react';
import Vision from './Vision';
import AboutUs from './AboutUs';
import WhyChooseUs from './WhyChooseUs';
import FAQ from '../FAQ/FAQ';
import Mission from '../Sections/MissionSection';

const AboutUsLandingPage = () => {
  return (
    <div>
      <Vision/>
      <AboutUs/>
      <Mission/>
      <WhyChooseUs/>
      <FAQ/>
    </div>
  );
}

export default AboutUsLandingPage;
