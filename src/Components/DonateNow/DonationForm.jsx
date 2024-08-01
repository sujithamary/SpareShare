import '../DonateNow/DonationForm.css';
import Footer from '../Sections/Footer';

const DonationForm = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [username, setUsername] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [pickupLocation, setPickupLocation] = useState('');
    const [message, setMessage] = useState('');
    const [paymentType, setPaymentType] = useState('');
    const [creditCardDetails, setCreditCardDetails] = useState({ cardNumber: '', expiryDate: '', cvv: '' });
    const [upiDetails, setUpiDetails] = useState({ upiId: '' });
    const [paypalDetails, setPaypalDetails] = useState({ email: '' });
    const [acceptedTerms, setAcceptedTerms] = useState(false);
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

    const handlePaymentTypeChange = (event) => {
        setPaymentType(event.target.value);
    };

    const handleCreditCardDetailsChange = (event) => {
        setCreditCardDetails({ ...creditCardDetails, [event.target.name]: event.target.value });
    };

    const handleUpiDetailsChange = (event) => {
        setUpiDetails({ [event.target.name]: event.target.value });
    };

    const handlePaypalDetailsChange = (event) => {
        setPaypalDetails({ [event.target.name]: event.target.value });
    };

    const handleTermsChange = (event) => {
        setAcceptedTerms(event.target.checked);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        
        if (!username || !mobileNumber || !pickupLocation || !message || !acceptedTerms) {
            alert('Please fill in all fields and accept the terms and conditions before submitting.');
            return;
        }

        if (paymentType === 'creditCard' && (!creditCardDetails.cardNumber || !creditCardDetails.expiryDate || !creditCardDetails.cvv)) {
            alert('Please fill in all credit card details.');
            return;
        }

        if (paymentType === 'upi' && !upiDetails.upiId) {
            alert('Please enter your UPI ID.');
            return;
        }

        if (paymentType === 'paypal' && !paypalDetails.email) {
            alert('Please enter your PayPal email.');
            return;
        }

        setTimeout(() => {
            console.log('Form submitted:', { username, mobileNumber, pickupLocation, message, paymentType, creditCardDetails, upiDetails, paypalDetails });
            setSubmitted(true);
        }, 0);

        navigate('/thank-you');
    };

    return (
        <div>
            <div className="f-wrapper">
                <div className="feedback-forme">
                    <h2 className="fee">Donation Form</h2>
                    <form onSubmit={handleSubmit} className="form">
                        <label htmlFor="username" className="lab">
                             Username
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
                            Mobile Number
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
                             Pickup Location
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
                             Message
                        </label>
                        <textarea
                            className="int"
                            id="message"
                            name="message"
                            value={message}
                            onChange={handleMessageChange}
                            placeholder="Type your message here..."
                        ></textarea>

                        <label htmlFor="paymentType" className="lab">
                             Payment Type
                        </label>
                        <div className="payment-options">
                            <div>
                                <input
                                    type="radio"
                                    id="creditCard"
                                    name="paymentType"
                                    value="creditCard"
                                    checked={paymentType === 'creditCard'}
                                    onChange={handlePaymentTypeChange}
                                />
                                <label htmlFor="creditCard">
                                     Credit Card
                                </label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    id="upi"
                                    name="paymentType"
                                    value="upi"
                                    checked={paymentType === 'upi'}
                                    onChange={handlePaymentTypeChange}
                                />
                                <label htmlFor="upi">
                                    UPI
                                </label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    id="paypal"
                                    name="paymentType"
                                    value="paypal"
                                    checked={paymentType === 'paypal'}
                                    onChange={handlePaymentTypeChange}
                                />
                                <label htmlFor="paypal">
                                     PayPal
                                </label>
                            </div>
                        </div>

                        {paymentType === 'creditCard' && (
                            <div>
                                <label htmlFor="cardNumber" className="lab">
                                    Card Number
                                </label>
                                <input
                                    className="int"
                                    type="text"
                                    id="cardNumber"
                                    name="cardNumber"
                                    value={creditCardDetails.cardNumber}
                                    onChange={handleCreditCardDetailsChange}
                                    placeholder="Enter your card number"
                                />

                                <label htmlFor="expiryDate" className="lab">
                                    Expiry Date
                                </label>
                                <input
                                    className="int"
                                    type="text"
                                    id="expiryDate"
                                    name="expiryDate"
                                    value={creditCardDetails.expiryDate}
                                    onChange={handleCreditCardDetailsChange}
                                    placeholder="MM/YY"
                                />

                                <label htmlFor="cvv" className="lab">
                                     CVV
                                </label>
                                <input
                                    className="int"
                                    type="text"
                                    id="cvv"
                                    name="cvv"
                                    value={creditCardDetails.cvv}
                                    onChange={handleCreditCardDetailsChange}
                                    placeholder="CVV"
                                />
                            </div>
                        )}

                        {paymentType === 'upi' && (
                            <div>
                                <label htmlFor="upiId" className="lab">
                                     UPI ID
                                </label>
                                <input
                                    className="int"
                                    type="text"
                                    id="upiId"
                                    name="upiId"
                                    value={upiDetails.upiId}
                                    onChange={handleUpiDetailsChange}
                                    placeholder="Enter your UPI ID"
                                />
                            </div>
                        )}

                        {paymentType === 'paypal' && (
                            <div>
                                <label htmlFor="paypalEmail" className="lab">
                                     PayPal Email
                                </label>
                                <input
                                    className="int"
                                    type="text"
                                    id="paypalEmail"
                                    name="email"
                                    value={paypalDetails.email}
                                    onChange={handlePaypalDetailsChange}
                                    placeholder="Enter your PayPal email"
                                />
                            </div>
                        )}

                        <div>
                            <input
                                type="checkbox"
                                id="terms"
                                name="terms"
                                checked={acceptedTerms}
                                onChange={handleTermsChange}
                            />
                            <label htmlFor="terms">I hereby voluntarily provide my consent to Feeding India to collect my personal data through this form, 
                                and process and store it in line with its Privacy Policy.</label>
                        </div>
                        <div>
                            <button type="submit" className="sub">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default DonationForm;
