import React from "react";
import "./VolunteerRegister.css";
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className="signup-container">
      <div className="welcome-section">
        <h1>Come join us!</h1>
        <p>
          We are so grateful for your interest in making a difference! By
          joining as a volunteer. Register now to be part of our mission
          to reduce waste and support the community.
        </p>
        {/* <button className="signin-btn">Already have an account? Signin.</button> */}
      </div>
      <div className="form-section">
        <h2>Signup</h2>
        <form className="form">
          <input type="text" placeholder="UserName" required />
          <input type="email" placeholder="Email" required />
          <input type="phone" placeholder="Phone Number" required />
          <input type="password" placeholder="Password" required />
          <input type="password" placeholder="Confirm Password" required />
          <textarea
            name="additionalInfo"
            placeholder="Address"
            required
            rows="3"
          ></textarea>
          <Link to = '/'>
          <button type="submit" className="signup-btn">Signup</button>
          </Link>
        </form>
        {/* <p className="signup-alt">or signup with</p> */}
        {/* <div className="social-icons">
          <a href="#" className="facebook">F</a>
          <a href="#" className="google">G</a>
          <a href="#" className="linkedin">L</a>
        </div> */}
      </div>
    </div>
  );
};

export default Signup;
