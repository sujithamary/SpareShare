import React, { useState, useEffect } from 'react';
import '../DonateNow/Donate.css';
import { Link, useNavigate } from 'react-router-dom';
import { FaDonate, FaBullhorn, FaHandsHelping, FaTshirt } from 'react-icons/fa';

const Cloth = () => {
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
      id: 'Donate Clothes',
      imgSrc: <FaDonate size={50} />, 
      description: 'Clear out your closet and give a second life to your clothing. Every piece can make a difference.',
    },
    {
      id: 'Spread the Word',
      imgSrc: <FaBullhorn size={50} />, 
      description: 'Encourage friends and family to contribute their gently-used clothes. Their support can make a big difference!',
    },
    {
      id: 'Volunteer',
      imgSrc: <FaHandsHelping size={50} />, 
      description: 'Join our team of dedicated volunteers to help with sorting, packing, and distributing donations.',
    },
  ];

  const images = [
    'assets/c-1.jpeg',
    'assets/c-2.jpg',
    'assets/c-3.jpg',
    'assets/c-4.webp',
    'assets/c-5.jpg',
    'assets/c-6.jpeg',
    'assets/c-7.jpg',
    'assets/c-8.jpg',
    'assets/c-9.jpg',
    'assets/c-10.jpg',
    'assets/c-11.webp',
    'assets/c-12.jpg',
  ];

  return (
    <div className="cloth-container">
      <button
        onClick={() => navigate(-1)}
        className="back-button"
      >
        &larr; Back
      </button>
      <section className="donation-initiative">
        <div className="header-section">
          <div className="header-content">            
            <h2 className="title"><span><FaTshirt  /></span>SpareShare Cloth Donation Initiative</h2>
            <p className="subtitle">Join Us in Making a Difference!</p>
          </div>
          <p className="content">
            At SpareShare, we are committed to creating a world where everyone’s basic needs are met. Our cloth donation initiative shines as a beacon of hope for those in need, offering clean, gently-used clothing to individuals and families facing challenging times. By donating your pre-loved clothes, you play a crucial role in transforming lives.
          </p>
          <p className="additional-info">
            Your generosity provides warmth during cold nights, boosts self-esteem, and ensures that everyone has access to essentials. Each donation not only meets a basic need but also restores dignity and brings comfort to those who might otherwise go without. Together, we can make a tangible impact, one garment at a time, and build a more compassionate and supportive community for all.
          </p>
          <p className="additional-info">
          Every piece of clothing donated is more than just a garment; it's a symbol of care and solidarity. Your contribution helps bridge the gap between those with excess and those in need, fostering a sense of unity and support within our community. By participating in our cloth donation initiative, you are not only providing essential items but also inspiring others to take action and join the movement. Together, we create a ripple effect of kindness that extends beyond our immediate circle, touching lives and making a significant difference in the lives of countless individuals. Let’s come together to make our community a better place, one donation at a time.
        </p>
          <div className='header-img'>
            <img src='assets/clothVector.png'></img>
          </div>
        </div>
        <h3 className="section-title">How You Can Help</h3>
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
            <h2 className="gallery-title">Spreading Smiles Through Cloth Donations</h2>
            <p>
              Our dedicated volunteers bring warmth and comfort to those in need, distributing clean, gently-used clothing. Each donation brings joy and dignity, showcasing the powerful impact of community generosity.
            </p>
            <p>
            The efforts of our volunteers extend far beyond the immediate act of distributing clothing. They embody compassion and commitment, transforming each donation into a beacon of hope and a tangible source of support for those who need it most. Through their hard work and dedication, they help create a network of care that strengthens the fabric of our community. Every piece of clothing donated, and every hour volunteered, contributes to a larger mission of building a supportive and empathetic society. By joining forces, we can amplify our impact, ensuring that every donation finds its way to someone who truly needs it and fostering a culture of generosity and mutual aid.
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
          <br/>
          <span className="cta-subtitle">
            Every donation helps us provide essential clothing to those in need, transforming lives and spreading warmth. <br />
            Join us in our mission to build a more compassionate world—one garment at a time.
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

export default Cloth;
