import React, { useState, useEffect } from 'react';
import './Donate.css';
import { useNavigate, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Footer from '../Sections/Footer';

const FundDonation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const navigate = useNavigate();

  const [selectedAmount, setSelectedAmount] = useState(1500);
  const [customAmount, setCustomAmount] = useState('');
  const [isCustomAmount, setIsCustomAmount] = useState(false);

  const handleAmountChange = (amount) => {
    setIsCustomAmount(false);
    setSelectedAmount(amount);
  };

  const handleCustomAmountChange = (event) => {
    setSelectedAmount(Number(event.target.value));
    setCustomAmount(event.target.value);
  };

  const handleCustomAmountClick = () => {
    setIsCustomAmount(true);
    setSelectedAmount(customAmount ? Number(customAmount) : 0);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
  };

  const [visibleImages, setVisibleImages] = useState(8);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const handleClosePopup = () => {
    setSelectedImage(null);
  };

  const handleLoadMore = () => {
    setVisibleImages((prevVisibleImages) => prevVisibleImages + 4);
  };

  const images = [
    'Asserts/f-1.jpg',
    'Asserts/s-2.jpeg',
    'Asserts/c-11.webp',
    'Asserts/c-12.jpg',
    'Asserts/s-12.jpeg',
    'Asserts/s-7.jpeg',
    'Asserts/f-7.jpg',
    'Asserts/f-10.jpeg',
    'Asserts/fr-7.jpeg',
    'Asserts/f-2.webp',
    'Asserts/fr-11.jpeg',
    'Asserts/fr-3.jpeg',
  ];

  return (
    <div>
      <button className="back-button" onClick={() => navigate(-1)}>
        <FontAwesomeIcon icon={faArrowLeft} /> Back
      </button>
      <section className="mission" id="mission-id">
        <div className="container">
          <div className="heading">
            <h2>Spareshare Fund Donation Initiative</h2>
            <p><span>Join us in making a difference!</span></p>
            <p>At Spareshare, we are committed to providing support to those in need through financial contributions. By donating funds, you can help us support various initiatives aimed at alleviating poverty and hunger. Your contributions are vital in ensuring that we can continue our mission to help those in need.</p>
            <p><span>How You Can Help:</span></p>
            <p>
              <ul>
                <li><span>Donate Funds:</span> Your monetary contributions help us fund various projects and initiatives.</li>
                <li><span>Spread the Word:</span> Encourage others to join our mission and contribute to the cause.</li>
                <li><span>Volunteer:</span> Help with fundraising, organizing events, and other essential tasks.</li>
              </ul>
            </p>
            <p>Together, we can fight poverty and make a positive impact in our community.</p>
            <p><span>7 O'Clock Scheme:</span></p>
            <p>Our '7 o'clock scheme' is a special initiative where food is provided to the needy every day at 7 PM. Your donation will directly support this effort, ensuring that those in need receive a meal each evening. By participating in this scheme, you're helping to bring relief and comfort to individuals and families in challenging situations.</p>
          </div>
        </div>
        <div className="gallery-sec">
          <div className="container">
            <div className='heading'>
              <h2>Impact of Fund Donations</h2>
              <p>Our dedicated volunteers ensure that every contribution is utilized effectively, creating a significant impact in the lives of many. Your donations help to provide essential resources and support to the community.</p>
            </div>
            <div className="image-container">
              {images.slice(0, visibleImages).map((image, index) => (
                <div className="image" key={index} onClick={() => handleImageClick(image)}>
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
          {selectedImage && (
            <div className="pop-image">
              <span onClick={handleClosePopup}>&times;</span>
              <img src={selectedImage} alt="gallery-img" />
            </div>
          )}
        </div>
      </section>
      <div className='container'>
        <div className='heading'>
          <h2>Donate Now and Make a Difference!</h2>
          <p>Thank you for your support in helping us fight poverty and build a more compassionate community.</p>
        </div>
      </div>
      <div className="donation-form">
        <div className="amount-options">
          <button 
            className={`amount-option ${selectedAmount === 750 ? 'selected' : ''}`}
            onClick={() => handleAmountChange(750)}
          >
            ₹ 750
          </button>
          <button 
            className={`amount-option ${selectedAmount === 1500 ? 'selected' : ''}`}
            onClick={() => handleAmountChange(1500)}
          >
            ₹ 1500
          </button>
          <button 
            className={`amount-option ${selectedAmount === 3000 ? 'selected' : ''}`}
            onClick={() => handleAmountChange(3000)}
          >
            ₹ 3000
          </button>
          {isCustomAmount ? (
            <input
              type="number"
              value={customAmount}
              onChange={handleCustomAmountChange}
              className="amount-option custom-amount-input"
              placeholder="Enter amount"
            />
          ) : (
            <button
              className={`amount-option ${isCustomAmount ? 'selected' : ''}`}
              onClick={handleCustomAmountClick}
            >
              Other
            </button>
          )}
        </div>
        <button className="pledge-button"><Link to='/donation-form'>Pledge your contribution here</Link></button>
      </div>
      <Footer/>
    </div>
  );
};

export default FundDonation;
