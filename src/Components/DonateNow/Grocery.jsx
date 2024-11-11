import React, { useState, useEffect } from 'react';
import '../DonateNow/Donate.css';
import { Link, useNavigate } from 'react-router-dom';
import { FaDonate, FaBullhorn, FaHandsHelping, FaAppleAlt } from 'react-icons/fa';

const Grocery = () => {
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
      id: 'Donate Groceries',
      imgSrc: <FaAppleAlt size={50} />, 
      description: 'Clear out your pantry and donate non-perishable groceries. Every item can make a difference.',
    },
    {
      id: 'Spread the Word',
      imgSrc: <FaBullhorn size={50} />, 
      description: 'Encourage friends and family to contribute their extra groceries. Your efforts can have a big impact!',
    },
    {
      id: 'Volunteer',
      imgSrc: <FaHandsHelping size={50} />, 
      description: 'Join our team of volunteers to help with sorting, packing, and distributing grocery donations.',
    },
  ];

  const images = [
    'assets/grocery-1.jpg',
    'assets/grocery-2.jpg',
    'assets/grocery-3.jpg',
    'assets/grocery-4.jpg',
    'assets/grocery-5.jpg',
    'assets/grocery-6.jpg',
    'assets/grocery-7.jpg',
    'assets/grocery-8.jpg',
    'assets/grocery-9.jpg',
    'assets/grocery-10.jpg',
    'assets/grocery-11.jpg',
    'assets/grocery-12.jpg',
  ];

  return (
    <div className="grocery-container">
      <button
        onClick={() => navigate(-1)}
        className="back-button"
      >
        &larr; Back
      </button>
      <section className="donation-initiative">
        <div className="header-section">
          <div className="header-content">
            <h2 className="title"><span><FaAppleAlt /></span>SpareShare Grocery Donation Initiative</h2>
            <p className="subtitle">Join Us in Making a Difference!</p>
          </div>
          <p className="content">
            At SpareShare, we are dedicated to providing essential groceries to those in need. Our grocery donation initiative ensures that families and individuals facing food insecurity have access to nutritious food. By donating non-perishable groceries, you help us make a significant difference in the lives of those who need it most.
          </p>
          <p className="additional-info">
            Your generosity helps provide vital food items, ensuring that everyone has access to nutritious meals. Each donation meets a basic need and brings comfort to those who might otherwise go without. Together, we can make a tangible impact, one grocery item at a time, and build a more compassionate and supportive community for all.
          </p>
          <p className="additional-info">
            Every grocery item donated is more than just food; it's a symbol of care and solidarity. Your contribution helps bridge the gap between those with excess and those in need, fostering a sense of unity and support within our community. By participating in our grocery donation initiative, you are not only providing essential items but also inspiring others to take action and join the movement. Together, we create a ripple effect of kindness that extends beyond our immediate circle, touching lives and making a significant difference in the lives of countless individuals. Let’s come together to make our community a better place, one donation at a time.
          </p>
          <div className='header-img'>
            <img src='assets/groceryVector.png' alt="Grocery" />
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
            <h2 className="gallery-title">Bringing Nourishment Through Grocery Donations</h2>
            <p>
              Our dedicated team works tirelessly to distribute essential groceries. Each donation brings nourishment and support, showcasing the powerful impact of community generosity.
            </p>
            <p>
              The efforts of our team extend far beyond the immediate act of distributing food. They embody compassion and commitment, transforming each donation into a beacon of hope and a tangible source of support for those who need it most. Through their hard work, they help create a network of care that strengthens our community. Every grocery item donated, and every hour volunteered, contributes to a larger mission of building a supportive and empathetic society. By joining forces, we can amplify our impact, ensuring that every donation finds its way to someone who truly needs it and fostering a culture of generosity and mutual aid.
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
                Every donation helps us provide essential groceries to those in need, transforming lives and spreading nourishment. <br />
                Join us in our mission to build a more compassionate world—one grocery item at a time.
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

export default Grocery;
