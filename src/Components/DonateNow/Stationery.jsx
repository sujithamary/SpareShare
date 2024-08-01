import './Donate.css';
import Footer from '../Sections/Footer';

const Stationery = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    const [username, setUsername] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [pickupLocation, setPickupLocation] = useState('');
    const [message, setMessage] = useState('');
    const [stationeryType, setStationeryType] = useState(''); // New field for stationery type
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

    const handleStationeryTypeChange = (event) => {
        setStationeryType(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        
        if (!username || !mobileNumber || !pickupLocation || !message || !stationeryType) {
            alert('Please fill in all fields before submitting.');
            return;
        }
        
        setTimeout(() => {
            console.log('Form submitted:', { username, mobileNumber, pickupLocation, message, stationeryType });
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
        'Asserts/s-1.jpeg',
        'Asserts/s-2.jpeg',
        'Asserts/s-3.jpeg',
        'Asserts/s-4.jpeg',
        'Asserts/s-5.jpeg',
        'Asserts/s-6.jpeg',
        'Asserts/s-7.jpeg',
        'Asserts/s-8.jpeg',
        'Asserts/s-9.jpeg',
        'Asserts/s-10.jpeg',
        'Asserts/s-11.jpeg',
        'Asserts/s-12.jpeg',
    ];

    return (
        <div>
        <section className="mission" id="mission-id">
          <div className="container">
            <div className="heading">
              <h2>Spareshare Stationery Donation Initiative</h2>
              <p><span>Join us in making a difference!</span></p>
              <p>At Spareshare, we understand the importance of education and creativity. Our stationery donation initiative aims to provide essential stationery supplies to students and individuals in need. Your donations can help inspire learning and creativity in many lives.</p>
                <p><span>How You Can Help:</span></p> 
                <p><ui>
                    <li><span>Donate Stationery:</span> Gather unused or gently used stationery items and contribute to our cause. Every item can make a difference.</li>
                    <li><span>Spread the Word:</span> Encourage others to donate stationery and support our initiative.</li>
                    <li><span>Volunteer:</span> Join our volunteers in sorting, packing, and distributing stationery donations.</li></ui></p> 
                    <p>Your contributions can have a profound impact on the education and creativity of those in need. Thank you for your support!</p> 
            </div>        
          </div>
          <div className="gallery-sec">
          <div className="container">
            <div className='heading'>
              <h2>Empowering Education Through Stationery Donations</h2>
              <p>Our dedicated volunteers work tirelessly to ensure that every donation of stationery reaches those who need it. Each contribution helps foster a love for learning and creativity.</p>
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
                    <h2>Donate Now and Inspire Learning!</h2>
                    <p>Thank you for supporting our mission to provide essential stationery to those in need.</p>
                </div>
        </div>
        <div className="f-wrapper">
            <div className="feedback-forme">
              <h2 className="fee">Donation Form</h2>
              
              {/* Back arrow button */}
              <button className="back-button" onClick={() => navigate(-1)}>
                <FontAwesomeIcon icon={faArrowLeft} /> Back
              </button>
              
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

              <label htmlFor="stationeryType" className="lab">
                <FontAwesomeIcon icon={faPen} /> Stationery Type
              </label>
              <input
                className="int"
                type="text"
                id="stationeryType"
                name="stationeryType"
                value={stationeryType}
                onChange={handleStationeryTypeChange}
                placeholder="Enter the type of stationery"
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

export default Stationery;
