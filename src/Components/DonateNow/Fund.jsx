import React, { useState, useEffect } from 'react';
import '../DonateNow/Donate.css';
import { Link, useNavigate } from 'react-router-dom';
import { FaDonate, FaBullhorn, FaHandsHelping, FaDollarSign } from 'react-icons/fa';

const Fund = () => {
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
      id: 'Donate Funds',
      imgSrc: <FaDollarSign size={50} />, 
      description: 'Contribute financially to support our initiatives. Every donation, big or small, helps us achieve our goals.',
    },
    {
      id: 'Spread the Word',
      imgSrc: <FaBullhorn size={50} />, 
      description: 'Encourage friends and family to donate and support our cause. Your voice helps us reach more people!',
    },
    {
      id: 'Volunteer',
      imgSrc: <FaHandsHelping size={50} />, 
      description: 'Join our team of volunteers to help with fundraising events and activities. Your time and effort are invaluable.',
    },
  ];

  const images = [
    'assets/f-1.jpg',
    'assets/s-2.jpeg',
    'assets/c-11.webp',
    'assets/c-12.jpg',
    'assets/s-12.jpeg',
    'assets/s-7.jpeg',
    'assets/f-7.jpg',
    'assets/f-10.jpeg',
    'assets/fr-7.jpeg',
    'assets/f-2.webp',
    'assets/fr-11.jpeg',
    'assets/fr-3.jpeg',
  ];

  return (
    <div className="fund-container">
      <button
        onClick={() => navigate(-1)}
        className="back-button"
      >
        &larr; Back
      </button>
      <section className="donation-initiative">
        <div className="header-section">
          <div className="header-content">
            <h2 className="title"><span><FaDollarSign /></span>SurplusShare FundRaising Initiative</h2>
            <p className="subtitle">Join Us in Making a Financial Impact!</p>
          </div>
          <p className="content">
            At SurplusShare, we are dedicated to raising funds to support our various initiatives and programs. Our fundraising initiative shines as a beacon of hope, enabling us to provide essential services and resources to those in need. By contributing financially, you play a crucial role in helping us achieve our goals and make a significant impact in our community.
          </p>
          <p className="additional-info">
            Your generosity helps fund essential programs, support community projects, and provide resources to those who need it most. Each donation not only supports our mission but also enables us to expand our reach and enhance our efforts. Together, we can make a tangible impact, one contribution at a time, and build a more compassionate and supportive community for all.
          </p>
          <p className="additional-info">
            Every dollar donated is more than just a contribution; it's a step towards a better future. Your support helps bridge the gap between needs and resources, fostering a sense of unity and shared purpose within our community. By participating in our fundraising initiative, you are not only providing financial support but also inspiring others to take action and join the movement. Together, we create a ripple effect of generosity that extends beyond our immediate circle, touching lives and making a significant difference in the lives of countless individuals. Let’s come together to make our community a better place, one donation at a time.
          </p>
          <div className='header-img'>
            <img src='assets/fundVector.png' alt="Fundraising" />
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
            <h2 className="gallery-title">Empowering Change Through FundRaising</h2>
            <p>
              Our dedicated team works tirelessly to raise funds and support our initiatives. Each contribution helps us achieve our goals and showcases the powerful impact of community generosity.
            </p>
            <p>
              The efforts of our team extend far beyond the immediate act of fundraising. They embody commitment and dedication, transforming each contribution into a beacon of hope and a tangible source of support for those in need. Through their hard work, they help create a network of care that strengthens our community. Every dollar donated, and every effort made, contributes to a larger mission of building a supportive and empathetic society. By joining forces, we can amplify our impact, ensuring that every contribution makes a difference and fostering a culture of generosity and mutual aid.
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
              <span className="cta-subtitle"> ready to make a real difference in our community.</span>
              <br />
              <span className="cta-subtitle">
                Every donation helps us fund essential programs and initiatives, transforming lives and supporting our mission. <br />
                Join us in our mission to build a more compassionate world—one contribution at a time.
              </span>
            </span>
          </h1>
          <Link to="/donationform"><button className="cta-button">Donate Now</button></Link>
        </div>
        <img src="assets/img-2.jpeg" alt="Fundraising" className="cta-image" />
      </div>
    </div>
  );
};

export default Fund;
