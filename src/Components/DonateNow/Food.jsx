import React, { useState, useEffect } from 'react';
import '../DonateNow/Donate.css';
import { Link, useNavigate } from 'react-router-dom';
import { IoFastFood } from "react-icons/io5";
import { FaDonate, FaBullhorn, FaHandsHelping, FaAppleAlt } from 'react-icons/fa';

const Food = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [visibleImages, setVisibleImages] = useState(8);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imageSrc) => setSelectedImage(imageSrc);
  const handleClosePopup = () => setSelectedImage(null);
  const handleLoadMore = () => setVisibleImages((prevVisibleImages) => prevVisibleImages + 4);

  const steps = [
    {
      id: 'Donate Food',
      imgSrc: <FaAppleAlt size={80} />, 
      description: 'Clear out your pantry and provide nourishing meals to those in need. Every donation can make a big difference.',
    },
    {
      id: 'Spread the Word',
      imgSrc: <FaBullhorn size={80} />, 
      description: 'Encourage friends and family to contribute non-perishable food items. Their support can make a significant impact!',
    },
    {
      id: 'Volunteer',
      imgSrc: <FaHandsHelping size={80} />, 
      description: 'Join our team of dedicated volunteers to help with sorting, packing, and distributing food donations.',
    },
  ];

  const images = [
    'assets/f-1.jpg',
    'assets/f-2.webp',
    'assets/f-3.jpeg',
    'assets/f-4.jpg',
    'assets/f-5.jpg',
    'assets/f-6.jpg',
    'assets/f-7.jpg',
    'assets/f-8.jpeg',
    'assets/f-9.jpg',
    'assets/f-10.jpeg',
    'assets/f-11.jpeg',
    'assets/f-12.jpeg',
  ];

  return (
    <div className="food-container">
      <button
        onClick={() => navigate(-1)}
        className="back-button"
      >
        &larr; Back
      </button>
      <section className="donation-initiative">
        <div className="header-section">
          <div className="header-content">
            <h2 className="title"><span><IoFastFood /></span>SpareShare Food Donation Initiative</h2>
            <p className="subtitle">Join Us in Nourishing Lives!</p>
          </div>
          <p className="content">
            At SpareShare, we are committed to addressing food insecurity and providing nourishing meals to those in need. Our food donation initiative shines as a beacon of hope, offering essential food items to individuals and families facing challenging times. By donating non-perishable food, you play a crucial role in feeding those who need it most.
          </p>
          <p className="additional-info">
            Your generosity helps ensure that everyone has access to nutritious meals, boosts well-being, and supports families in need. Each donation not only meets a basic need but also brings comfort and dignity to those who might otherwise go without. Together, we can make a tangible impact, one meal at a time, and build a more compassionate and supportive community for all.
          </p>
          <p className="additional-info">
            Every food item donated is more than just a product; it's a symbol of care and solidarity. Your contribution helps bridge the gap between those with excess and those in need, fostering a sense of unity and support within our community. By participating in our food donation initiative, you are not only providing essential nourishment but also inspiring others to take action and join the movement. Together, we create a ripple effect of kindness that extends beyond our immediate circle, touching lives and making a significant difference in the lives of countless individuals. Let’s come together to make our community a better place, one donation at a time.
          </p>
          <div className='header-img'>
            <img src='assets/foodVector.png' alt="Food Donation" />
          </div>
        </div>
        <h3 className="section-title">How You Can Help:</h3>
        <div className="steps-container">
          {steps.map((step) => (
            <div className="step-card" key={step.id}>
              <div className="icon-container">
                {step.imgSrc}
              </div>
              <div className="step-title">{step.id}</div>
              <div className="step-description">{step.description}</div>
            </div>
          ))}
        </div>
        <div className="gallery-section">
          <div className="gallery-header">
            <h2 className="gallery-title">Nourishing Lives Through Food Donations</h2>
            <p>
              Our dedicated volunteers bring nourishment and comfort to those in need, distributing essential food items. Each donation brings joy and support, showcasing the powerful impact of community generosity.
            </p>
            <p>
              The efforts of our volunteers extend far beyond the immediate act of distributing food. They embody compassion and commitment, transforming each donation into a beacon of hope and a tangible source of support for those who need it most. Through their hard work and dedication, they help create a network of care that strengthens the fabric of our community. Every food item donated, and every hour volunteered, contributes to a larger mission of building a supportive and empathetic society. By joining forces, we can amplify our impact, ensuring that every donation finds its way to someone who truly needs it and fostering a culture of generosity and mutual aid.
            </p>
          </div>
          <div className="image-gallery">
            {images.slice(0, visibleImages).map((image, index) => (
              <div className="gallery-item" key={index} onClick={() => handleImageClick(image)}>
                <img src={image} alt={`gallery-img-${index}`} />
              </div>
            ))}
            {visibleImages < images.length && (
              <div className="load-more" onClick={handleLoadMore}>
                <span>+ Load More</span>
              </div>
            )}
          </div>
        </div>
      </section>
      {selectedImage && (
        <div className="popup-image">
          <span onClick={handleClosePopup} className="close-button">&times;</span>
          <img src={selectedImage} alt="Selected" />
        </div>
      )}
      <div className="donation-call-to-action">
        <div className="cta-content">
          <h1>
            <span className="cta-subtitle">
              Your generous contribution awaits, 
              <span className="cta-subtitle"> ready to make a real difference in someone's life.</span>
              <br />
              <span className="cta-subtitle">
                Every donation helps us provide essential food to those in need, transforming lives and spreading nourishment. <br />
                Join us in our mission to build a more compassionate world—one meal at a time.
              </span>
            </span>
          </h1>
          <Link to="/donationform"><button className="cta-button">Donate Now</button></Link>
        </div>
        <img src="assets/img-2.jpeg" alt="Donation" className="cta-image" />
      </div>
    </div>
  );
};

export default Food;
