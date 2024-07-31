import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="col-one">
              <h4>SpareShare</h4>
              <p>Address: 3, Near IT Park, Mahatma Gandhi Road, Mumbai 440000</p>
              <p>Contact No: <a href="tel:+91-9876543210">+91 9876543210</a></p>
              <p>Email: <a href="mailto:spareshare@gmail.com">spareshare@gmail.com</a></p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="col-two">
              <h4>Social Media</h4>
              <div className="social">
                <a href="#"><img src="Asserts/facebook.png" alt="Facebook" /></a>
                <a href="#"><img src="Asserts/instagram.png" alt="Instagram" /></a>
                <a href="#"><img src="Asserts/youtube.png" alt="YouTube" /></a>
                <a href="#"><img src="Asserts/linkedin.png" alt="LinkedIn" /></a>
                <a href="#"><img src="Asserts/gmail.png" alt="Gmail" /></a>
              </div>
              <p>Copyright &copy; 2024 | All Rights Reserved</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
