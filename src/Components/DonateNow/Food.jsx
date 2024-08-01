import './Fund.css';
import Footer from '../Sections/Footer';

const Food = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [username, setUsername] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [pickupLocation, setPickupLocation] = useState('');
    const [message, setMessage] = useState('');
    const [quantity, setQuantity] = useState('');
    const [spoilingTime, setSpoilingTime] = useState('');
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

    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    };

    const handleSpoilingTimeChange = (event) => {
        setSpoilingTime(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!username || !mobileNumber || !pickupLocation || !message || !quantity || !spoilingTime) {
            alert('Please fill in all fields before submitting.');
            return;
        }

        setTimeout(() => {
            console.log('Form submitted:', { username, mobileNumber, pickupLocation, message, quantity, spoilingTime });
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
        'Asserts/f-1.jpg',
        'Asserts/f-2.webp',
        'Asserts/f-3.jpeg',
        'Asserts/f-4.jpg',
        'Asserts/f-5.jpg',
        'Asserts/f-6.jpg',
        'Asserts/f-7.jpg',
        'Asserts/f-8.jpeg',
        'Asserts/f-9.jpg',
        'Asserts/f-10.jpeg',
        'Asserts/f-11.jpeg',
        'Asserts/f-12.jpeg',
    ];

    const handleBack = () => {
        navigate(-1); 
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
                        <h2>Spareshare Food Donation Initiative</h2>
                        <p><span>Join us in making a difference!</span></p>
                        <p>At Spareshare, we believe in the power of community to support those in need. Our food donation initiative aims to ensure that surplus food from events or individuals reaches those who need it the most. By donating food, you contribute to reducing waste and supporting families and individuals facing food insecurity.</p>
                        <p><span>How You Can Help:</span></p> 
                        <p><ul>
                            <li><span>Donate Food:</span> Share your surplus food with those in need. Your donation can make a huge difference in someone's life.</li>
                            <li><span>Spread the Word:</span> Inform others about our initiative and encourage them to contribute.</li>
                            <li><span>Volunteer:</span> Help us in collecting, sorting, and distributing food donations.</li></ul></p> 
                        <p>Together, we can create a community where no one goes hungry, and every bit of surplus food is utilized effectively.</p> 
                    </div>        
                </div>
                <div className="gallery-sec">
                    <div className="container">
                        <div className='heading'>
                            <h2>Bringing Nourishment and Hope</h2>
                            <p>Our volunteers work tirelessly to ensure that surplus food reaches those in need. Each donation not only provides sustenance but also hope and comfort to individuals and families.</p>
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
                    <p>Thank you for your support in helping us combat food waste and hunger in our community.</p>
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

                        <label htmlFor="quantity" className="lab">
                            <FontAwesomeIcon icon={faUtensils} /> Quantity per Person
                        </label>
                        <input
                            className="int"
                            type="text"
                            id="quantity"
                            name="quantity"
                            value={quantity}
                            onChange={handleQuantityChange}
                            placeholder="Enter quantity per person"
                        />

                        <label htmlFor="spoilingTime" className="lab">
                            <FontAwesomeIcon icon={faCalendarAlt} /> Estimated Time for Spoiling
                        </label>
                        <input
                            className="int"
                            type="text"
                            id="spoilingTime"
                            name="spoilingTime"
                            value={spoilingTime}
                            onChange={handleSpoilingTimeChange}
                            placeholder="Enter estimated time for spoiling"
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

export default Food;
