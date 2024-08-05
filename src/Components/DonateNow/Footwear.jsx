import React, { useState, useEffect } from 'react';
import './Donate.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPhone, faMapMarkerAlt, faComment, faShoePrints } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import Footer from '../Sections/Footer';
import ArrowBackIcon from '@mui/icons-material/ArrowBack'; // Import the back arrow icon

const Footwear = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [username, setUsername] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [pickupLocation, setPickupLocation] = useState('');
    const [message, setMessage] = useState('');
    const [shoeSize, setShoeSize] = useState(''); 
    const [submitted, setSubmitted] = useState(false);
    const navigate = useNavigate();

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handleMobileNumberChange = (event) => {
        setMobileNumber(event.target.value);
    };

    const handlePickupLocationChange = (event) => {
        setPickupLocation(event.target.value);
    };

    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    };

    const handleShoeSizeChange = (event) => {
        setShoeSize(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!username || !mobileNumber || !pickupLocation || !message || !shoeSize) {
            alert('Please fill in all fields before submitting.');
            return;
        }

        setTimeout(() => {
            console.log('Form submitted:', { username, mobileNumber, pickupLocation, message, shoeSize });
            setSubmitted(true);
        }, 0);

        navigate('/thank-you');
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
        'Asserts/fr-1.jpeg',
        'Asserts/fr-2.jpeg',
        'Asserts/fr-3.jpeg',
        'Asserts/fr-4.jpeg',
        'Asserts/fr-5 copy.jpeg',
        'Asserts/fr-6.jpeg',
        'Asserts/fr-7.jpeg',
        'Asserts/fr-8.jpeg',
        'Asserts/fr-9 (2).jpeg',
        'Asserts/fr-10.jpeg',
        'Asserts/fr-11.jpeg',
        'Asserts/fr-12.jpeg',
    ];

    const handleBack = () => {
        navigate(-1); // Go back to the previous page
    };

    return (
        <div>
            <button
                onClick={handleBack}
                style={{
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    margin: '10px',
                    padding: '5px',
                }}
            >
                <ArrowBackIcon />
            </button>
            <section className="mission" id="mission-id">
                <div className="container">
                    <div className="heading">
                        <h2>Spareshare Footwear Donation Initiative</h2>
                        <p><span>Join us in making a difference!</span></p>
                        <p>At Spareshare, we are committed to helping those in need by providing them with quality footwear. Your donations of gently-used shoes can help bring comfort and support to individuals and families facing challenging times.</p>
                        <p><span>How You Can Help:</span></p> 
                        <p><ui>
                            <li><span>Donate Footwear:</span> Clear out your closet and donate shoes that are in good condition. Every pair can make a difference.</li>
                            <li><span>Spread the Word:</span> Encourage friends and family to contribute to the cause.</li>
                            <li><span>Volunteer:</span> Join our team of dedicated volunteers to help with sorting, packing, and distributing donations.</li></ui></p> 
                        <p>Your contributions can provide much-needed support and improve the lives of those in need. Thank you for your generosity!</p> 
                    </div>        
                </div>
                <div className="gallery-sec">
                    <div className="container">
                        <div className='heading'>
                            <h2>Spreading Comfort Through Footwear Donations</h2>
                            <p>Our dedicated volunteers work hard to ensure that every pair of donated shoes finds a new home. Each donation makes a significant impact, helping individuals walk confidently and comfortably.</p>
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
                    <h2>Donate Now and Be a Part of the Change!</h2>
                    <p>Thank you for your support in helping us build a more compassionate and caring community.</p>
                </div>
            </div>
            <div className="f-wrapper">
                <div className="feedback-forme">
                    <h2 className="fee">Donation Form</h2>
                    <form onSubmit={handleSubmit} className="ffform">
                        <label htmlFor="username" className="lab">
                            <FontAwesomeIcon icon={faUser} /> Username
                        </label>
                        <input
                            className="int"
                            type="text"
                            id="username"
                            name="username"
                            value={username}
                            onChange={handleUsernameChange}
                            placeholder="Enter your username"
                        />

                        <label htmlFor="mobileNumber" className="lab">
                            <FontAwesomeIcon icon={faPhone} /> Mobile Number
                        </label>
                        <input
                            className="int"
                            type="text"
                            id="mobileNumber"
                            name="mobileNumber"
                            value={mobileNumber}
                            onChange={handleMobileNumberChange}
                            placeholder="Enter your mobile number"
                        />

                        <label htmlFor="pickupLocation" className="lab">
                            <FontAwesomeIcon icon={faMapMarkerAlt} /> Pickup Location
                        </label>
                        <input
                            className="int"
                            type="text"
                            id="pickupLocation"
                            name="pickupLocation"
                            value={pickupLocation}
                            onChange={handlePickupLocationChange}
                            placeholder="Enter the pickup location"
                        />

                        <label htmlFor="shoeSize" className="lab">
                            <FontAwesomeIcon icon={faShoePrints} /> Shoe Size
                        </label>
                        <input
                            className="int"
                            type="text"
                            id="shoeSize"
                            name="shoeSize"
                            value={shoeSize}
                            onChange={handleShoeSizeChange}
                            placeholder="Enter the shoe size"
                        />

                        <label htmlFor="message" className="lab">
                            <FontAwesomeIcon icon={faComment} /> Message
                        </label>
                        <textarea
                            className="int"
                            id="message"
                            name="message"
                            value={message}
                            onChange={handleMessageChange}
                            placeholder="Type your message here..."
                        ></textarea>

                        <button type="submit" className="sub">Submit</button>
                    </form>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Footwear;
