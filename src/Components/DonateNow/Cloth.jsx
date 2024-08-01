import './Donate.css';
import Footer from '../Sections/Footer';

const Cloth = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [username, setUsername] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [pickupLocation, setPickupLocation] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleUsernameChange = (event) => setUsername(event.target.value);
  const handleMobileNumberChange = (event) => setMobileNumber(event.target.value);
  const handlePickupLocationChange = (event) => setPickupLocation(event.target.value);
  const handleMessageChange = (event) => setMessage(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!username || !mobileNumber || !pickupLocation || !message) {
      alert('Please fill in all fields before submitting.');
      return;
    }

    setTimeout(() => {
      console.log('Form submitted:', { username, mobileNumber, pickupLocation, message });
      setSubmitted(true);
    }, 0);

    navigate('/thank-you');
  };

  const [visibleImages, setVisibleImages] = useState(8);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imageSrc) => setSelectedImage(imageSrc);
  const handleClosePopup = () => setSelectedImage(null);
  const handleLoadMore = () => setVisibleImages((prevVisibleImages) => prevVisibleImages + 4);

  const images = [
    'Asserts/c-1.jpeg',
    'Asserts/c-2.jpg',
    'Asserts/c-3.jpg',
    'Asserts/c-4.webp',
    'Asserts/c-5.jpg',
    'Asserts/c-6.jpeg',
    'Asserts/c-7.jpg',
    'Asserts/c-8.jpg',
    'Asserts/c-9.jpg',
    'Asserts/c-10.jpg',
    'Asserts/c-11.webp',
    'Asserts/c-12.jpg',
  ];

  return (
    <div>
      <button
        onClick={() => navigate(-1)}
        style={{
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        <ArrowBackIcon />
      </button>
      <section className="mission" id="mission-id">
        <div className="container">
          <div className="heading">
            <h2>Spareshare Cloth Donation Initiative</h2>
            <p><span>Join us in making a difference!</span></p>
            <p>At Spareshare, we believe that everyone deserves to have their basic needs met.
              Our cloth donation initiative is dedicated to providing those in need with clean,
              gently-used clothing. By donating your pre-loved clothes, you can help bring warmth,
              dignity, and comfort to individuals and families facing difficult times.</p>
            <p><span>How You Can Help:</span></p>
            <ul>
              <li><span>Donate Clothes:</span> Clear out your closet and give a second life to your clothing. Every piece can make a difference.</li>
              <li><span>Spread the Word:</span> Encourage friends and family to contribute to the cause.</li>
              <li><span>Volunteer:</span> Join our team of dedicated volunteers to help with sorting, packing, and distributing donations.</li>
            </ul>
            <p>Together, we can turn your unused garments into valuable resources for those in need. Every donation counts, and your generosity can make a significant impact in someone's life.</p>
          </div>
        </div>
        <div className="gallery-sec">
          <div className="container">
            <div className='heading'>
              <h2>Spreading Smiles Through Cloth Donations</h2>
              <p>Our dedicated volunteers bring warmth and comfort to those in need, distributing clean, gently-used clothing. Each donation brings joy and dignity, showcasing the powerful impact of community generosity.</p>
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

export default Cloth;
