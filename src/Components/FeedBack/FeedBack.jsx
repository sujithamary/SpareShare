import React, { useState } from 'react';
import '../FeedBack/FeedBack.css';
import RatingComponent from './RatingComponent';
import { useNavigate } from 'react-router-dom';

const FeedbackForm = () => {
  const [username, setUsername] = useState('');
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);  
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

   
    if (!username || !feedback) {
      alert('Please fill in all fields before submitting.');
      return;
    }

   
    setTimeout(() => {
      console.log('Feedback submitted:', { username, feedback });
      setSubmitted(true);
      navigate('/');
    }, 1000);

  };

  return (
    <div className='feedback-main-container'>
        <div class = "feedback-wrapper">
        <div class="feedback-container">
            <div className="feedback-form">
            <h2 class="feedback-heading">Feedback Form</h2>
            {submitted ? (
                <p className="success-messagee">Thank you for your feedback!!</p>
            ) : (
                <form onSubmit={handleSubmit} class="feedbackform">
                <label htmlFor="username" class="lab">Username:</label>
                <input class="feedback-input"
                    type="text"
                    id="username"
                    name="username"
                    onChange={handleUsernameChange}
                    placeholder="Enter your name"
                    />

                <label htmlFor="feedback" class= "lab">Your Feedback:</label>
                <textarea class="feedback-input"
                    id="feedback"
                    name="feedback"
                    value={feedback}
                    onChange={handleFeedbackChange}
                    placeholder="Type your feedback here..."
                    ></textarea>
                <div>
                <button type="submit" class="sub">Submit Feedback</button>
                </div>
                </form>
            )}
            </div>
            </div>
        </div>
    <RatingComponent/>
    </div>
  );
};

export default FeedbackForm;