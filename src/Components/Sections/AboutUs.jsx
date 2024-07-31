import React, { useState } from 'react';
import '../Sections/AboutUs.css';
import { FaEye, FaFlag, FaClock, FaRecycle, FaHandsHelping, FaPeopleCarry, FaUsers, FaBullhorn } from 'react-icons/fa';

const AboutUs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className='aboutus'>
      <div className='top-img'></div>
      <div className='overlay'>
        <div className='heading-container'>
          <h1>Get To Know Us</h1>
        </div>
        <div className='content'>
          <div className='section vision'>
            <FaEye size={40} className="icon" />
            <h2>Vision</h2>
            <p>Spareshare is a pioneering platform dedicated to connecting surplus food from event organizers and individuals with those in need through a network of NGOs and volunteers. Our app facilitates this connection, enabling users to offer or request surplus food, while volunteers can provide delivery or cooking services. A key feature of Spareshare is the '7 o'clock scheme,' where we ensure that every day at 7 PM, needy individuals receive a meal, funded through donations and supplied by our dedicated volunteers. We also track and reward volunteer contributions with a points system, allowing them to redeem points for monetary rewards.</p>
            <p>At Spareshare, we are driven by the mission to tackle food waste and hunger simultaneously. By redistributing surplus food efficiently, we address two critical issues: reducing unnecessary food waste and providing reliable food access to those in need. Our approach not only supports vulnerable communities but also fosters a sense of community engagement and generosity. Through the 7 o'clock scheme and our volunteer rewards system, we aim to create a sustainable, impactful solution that brings people together to make a meaningful difference in their lives.</p>
          </div>
          <div className='section mission'>
            <FaFlag size={40} className="icon" />
            <h2>Mission</h2>
            <div className='accordion'>
              {[
                { icon: FaClock, title: "7 o'clock scheme", des: "Implement the '7 o'clock scheme' to provide food daily at 7 PM, funded by donations, ensuring consistent and reliable meal distribution." },
                { icon: FaRecycle, title: "Combat Food Waste", des: "Reduce food wastage by connecting surplus food from event organizers and individuals to those in need." },
                { icon: FaHandsHelping, title: "Support the Needy", des: "Ensure that food reaches underprivileged individuals and families through efficient distribution channels, including NGOs and volunteers." },
                { icon: FaPeopleCarry, title: "Promote Volunteerism", des: "Encourage community involvement by providing opportunities for volunteers to deliver and even cook meals for those in need, rewarding them with a point system." },
                { icon: FaUsers, title: "Community Engagement", des: "Foster a sense of community by allowing participants to contribute, earn points, and redeem rewards, creating a sustainable ecosystem of giving and receiving." },
                { icon: FaBullhorn, title: "Raise Awareness", des: "Educate the public about the impact of food waste and hunger, and promote a culture of sharing and sustainable living through various awareness campaigns and events." }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className={`accordion-item ${activeIndex === index ? 'active' : ''}`} 
                  onClick={() => toggleAccordion(index)}
                >
                  <div className='accordion-header'>
                    <item.icon size={40} className="icon" />
                    <h3>{item.title}</h3>
                  </div>
                  <div className='accordion-content'>
                    <p>{item.des}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
