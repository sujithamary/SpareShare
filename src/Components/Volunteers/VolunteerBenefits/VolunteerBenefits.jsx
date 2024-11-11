import React from 'react';
import { FaMoneyBillWave, FaHandsHelping } from 'react-icons/fa';
import { GiFruitBowl } from 'react-icons/gi';
import './VolunteerBenefits.css'; 

const VolunteerBenefits = () => {
  const benefitsData = [
    {
      title: "Contribute to Reducing Food Waste",
      description: "Volunteers earn points for each task, like food collection or delivery, which can be instantly converted to cash. This immediate reward system keeps you motivated and allows you to see the real-time financial impact of your efforts.",
    },
    {
      title: "Get Rewarded in Real-Time for Helping Out",
      description: "By volunteering, you play a direct role in rescuing surplus food that would otherwise go to waste. Your efforts help lower the environmental impact of food waste, promoting sustainability and supporting those in need.",
    },
    {
      title: "Build Valuable Community Connections",
      description: "Volunteering connects you with a network of like-minded individuals, local businesses, and nonprofits. It’s a chance to make meaningful connections, grow your community, and be part of a collective mission to make a positive impact.",
    },
  ];

  return (
    <section className="benefits-section">
      <h2>Why Volunteer with Us?</h2>
      <p>Join a community focused on reducing food waste and supporting the needy. Discover how you can make an impact.</p>
      <div className="benefits-cards">
        {benefitsData.map((benefit, index) => (
          <div key={index} className="benefit-card">
            <h3>{benefit.title}</h3>
            <p>{benefit.description}</p>
            <span className="benefit-duration">{benefit.duration}</span>
          </div>
        ))}
      </div>
      <hr className="hr-line" />
    </section>
  );
};

export default VolunteerBenefits;
