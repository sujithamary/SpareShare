import './Donate.css';
import Footer from '../Sections/Footer';

const Gadgets = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [pickupLocation, setPickupLocation] = useState('');
    const [message, setMessage] = useState('');
    const [gadgetType, setGadgetType] = useState('');
    const [submitted, setSubmitted] = useState(false);

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

    const handleGadgetTypeChange = (event) => {
        setGadgetType(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        
        if (!username || !mobileNumber || !pickupLocation || !message || !gadgetType) {
            alert('Please fill in all fields before submitting.');
            return;
        }
        
        setTimeout(() => {
            console.log('Form submitted:', { username, mobileNumber, pickupLocation, message, gadgetType });
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
        'Asserts/g-1.jpg',
        'Asserts/g-2.jpg',
        'Asserts/g-3.jpg',
        'Asserts/g-4.jpg',
        'Asserts/g-5.jpg',
        'Asserts/g-6.jpg',
        'Asserts/g-7.jpg',
        'Asserts/g-8.jpg',
        'Asserts/g-9.jpg',
        'Asserts/g-10.jpg',
        'Asserts/g-11.jpg',
        'Asserts/g-12.jpg',
    ];

    return (
        <div>
            <button className="back-button" onClick={() => navigate(-1)}>
                <FontAwesomeIcon icon={faArrowLeft} /> Back
            </button>
            <section className="mission" id="mission-id">
                <div className="container">
                    <div className="heading">
                        <h2>Spareshare Gadget Donation Initiative</h2>
                        <p><span>Join us in making a difference!</span></p>
                        <p>At Spareshare, we are dedicated to bridging the digital divide by providing essential gadgets to those who need them. Your donations of used or new gadgets can empower individuals and help them stay connected in a digital world.</p>
                        <p><span>How You Can Help:</span></p>
                        <p>
                            <ul>
                                <li><span>Donate Gadgets:</span> Clear out your gadgets and give them a second life. Every device can make a significant difference.</li>
                                <li><span>Spread the Word:</span> Encourage friends and family to contribute to the cause.</li>
                                <li><span>Volunteer:</span> Join our team of dedicated volunteers to help with sorting, packing, and distributing gadgets.</li>
                            </ul>
                        </p>
                        <p>Your contributions can help empower individuals with the tools they need to thrive in today's digital age. Thank you for your support!</p>
                    </div>
                </div>
                <div className="gallery-sec">
                    <div className="container">
                        <div className='heading'>
                            <h2>Empowering Lives Through Gadget Donations</h2>
                            <p>Our volunteers work hard to ensure that every donated gadget finds a new user. Each donation contributes to closing the digital gap and enhancing opportunities for those in need.</p>
                        </div>
                        {/* Uncomment if image gallery is needed */}
                        {/* <div className="image-container">
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
                        </div> */}
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
                    <p>Thank you for your support in helping us provide essential gadgets to those in need.</p>
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

                        <label htmlFor="gadgetType" className="lab">
                            <FontAwesomeIcon icon={faLaptop} /> Gadget Type
                        </label>
                        <input
                            className="int"
                            type="text"
                            id="gadgetType"
                            name="gadgetType"
                            value={gadgetType}
                            onChange={handleGadgetTypeChange}
                            placeholder="Enter the gadget type"
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
            <Footer />
        </div>
    );
};

export default Gadgets;
