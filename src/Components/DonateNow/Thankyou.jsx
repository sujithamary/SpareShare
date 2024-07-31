import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ThankYouPage.css';
import Footer from '../Sections/Footer';

const ThankYouPage = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prevCountdown => {
        if (prevCountdown <= 1) {
          clearInterval(timer);
          navigate('/');
          return 0;
        }
        return prevCountdown - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <div className="thank-you-container">
      <div className="thank-you-card">
        <h2>Thank you for your donation!</h2>
        <p>Your generosity is helping us make a difference in the community.</p>
        <p>We value your feedback. Please <a href="/feedback">click here</a> to share your thoughts.</p>
        <div className="redirect-message">
          You will be redirected to the homepage in {countdown} seconds.
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
