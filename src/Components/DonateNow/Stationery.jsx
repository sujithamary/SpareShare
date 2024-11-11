import React, { useState, useEffect } from 'react';
import '../DonateNow/Donate.css';
import { Link, useNavigate } from 'react-router-dom';
import { FaDonate, FaBullhorn, FaHandsHelping, FaPen } from 'react-icons/fa';

const Stationery = () => {
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
      id: 'Donate Stationery',
      imgSrc: <FaPen size={50} />, 
      description: 'Clear out your desk and donate unused stationery items. Every piece can make a difference.',
    },
    {
      id: 'Spread the Word',
      imgSrc: <FaBullhorn size={50} />, 
      description: 'Encourage friends and family to contribute their extra stationery. Your support can make a big difference!',
    },
    {
      id: 'Volunteer',
      imgSrc: <FaHandsHelping size={50} />, 
      description: 'Join our team of dedicated volunteers to help with sorting, packing, and distributing stationery donations.',
    },
  ];

  const images = [
    'assets/s-1.jpeg',
    'assets/s-2.jpeg',
    'assets/s-3.jpeg',
    'assets/s-4.jpeg',
    'assets/s-5.jpeg',
    'assets/s-6.jpeg',
    'assets/s-7.jpeg',
    'assets/s-8.jpeg',
    'assets/s-9.jpeg',
    'assets/s-10.jpeg',
    'assets/s-11.jpeg',
    'assets/s-12.jpeg',
  ];

  return (
    <div className="stationery-container">
      <button
        onClick={() => navigate(-1)}
        className="back-button"
      >
        &larr; Back
      </button>
      <section className="donation-initiative">
        <div className="header-section">
          <div className="header-content">
            <h2 className="title"><span><FaPen /></span>SpareShare Stationery Donation Initiative</h2>
            <p className="subtitle">Join Us in Making a Difference!</p>
          </div>
          <p className="content">
            At SpareShare, we are dedicated to providing essential stationery supplies to those in need. Our stationery donation initiative ensures that students, teachers, and community organizations have access to the tools they need to succeed. By donating unused stationery items, you help us make a significant impact on education and community development.
          </p>
          <p className="additional-info">
            Your generosity helps provide vital stationery items, ensuring that everyone has access to the resources they need. Each donation meets a basic need and brings support to those who might otherwise go without. Together, we can make a tangible impact, one stationery item at a time, and build a more supportive and resourceful community for all.
          </p>
          <p className="additional-info">
            Every stationery item donated is more than just a supply; it's a symbol of care and support. Your contribution helps bridge the gap between those with extra resources and those in need, fostering a sense of unity and support within our community. By participating in our stationery donation initiative, you are not only providing essential items but also inspiring others to take action and join the movement. Together, we create a ripple effect of kindness that extends beyond our immediate circle, touching lives and making a significant difference in the lives of countless individuals. Let’s come together to make our community a better place, one donation at a time.
          </p>
          <div className='header-img'>
            <img src='assets/stationeryVector.png' alt="Stationery" />
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
            <h2 className="gallery-title">Empowering Education Through Stationery Donations</h2>
            <p>
              Our dedicated team works tirelessly to distribute essential stationery supplies. Each donation supports education and community development, showcasing the powerful impact of community generosity.
            </p>
            <p>
              The efforts of our team extend far beyond the immediate act of distributing stationery. They embody compassion and commitment, transforming each donation into a beacon of support for those who need it most. Through their hard work, they help create a network of care that strengthens our community. Every stationery item donated, and every hour volunteered, contributes to a larger mission of building a supportive and resourceful society. By joining forces, we can amplify our impact, ensuring that every donation finds its way to someone who truly needs it and fostering a culture of generosity and mutual aid.
            </p>
          </div>
          <div className="image-gallery">
            {images.slice(0, visibleImages).map((image, index) => (
              <div className="gallery-item" key={index} onClick={() => handleImageClick(image)}>
                <img src={image} alt={`gallery-img-${index}`} />
              </div>
            ))}
            
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
                Every donation helps us provide essential stationery supplies to those in need, supporting education and community development. <br />
                Join us in our mission to build a more supportive world—one stationery item at a time.
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

export default Stationery;
