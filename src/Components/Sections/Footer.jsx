import React from "react";
import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footers">
      <footer className="bg-black text-center text-white">
        <div className="p-4">
          <div className="social-icons-container">
            <a className="social-icon" href="#!" role="button">
              <FaFacebookF />
            </a>
            <a className="social-icon" href="#!" role="button">
              <FaTwitter />
            </a>
            <a className="social-icon" href="#!" role="button">
              <FaGoogle />
            </a>
            <a className="social-icon" href="#!" role="button">
              <FaInstagram />
            </a>
            <a className="social-icon" href="#!" role="button">
              <FaLinkedinIn />
            </a>
          </div>

          <div className="footer-sectionst">
            <div className="footer-sections">
              <h4>
                <strong>
                  <span className="logo"></span>
                  <span className="c">SpareShare</span>
                </strong>
              </h4>
              <ul>
                <li>
                  <a href="#">Homepage</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Donate Now</a>
                </li>
              </ul>
            </div>
            <div className="footer-sections">
              <h4 className="txt">
                <strong>Learn</strong>
              </h4>
              <ul>
                <li>
                  <a href="#">Our Mission</a>
                </li>
                <li>
                  <a href="#">How We Work</a>
                </li>
                <li>
                  <a href="#">Volunteer Stories</a>
                </li>
                <li>
                  <a href="#">FAQs</a>
                </li>
              </ul>
            </div>
            <div className="footer-sections">
              <h4 className="txt">
                <strong>Resources</strong>
              </h4>
              <ul>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Events</a>
                </li>
                <li>
                  <a href="#">News</a>
                </li>
                <li>
                  <a href="#">Media Kit</a>
                </li>
              </ul>
            </div>
            <div className="footer-sections">
              <h4 className="txt">
                <strong>Legal & Contact</strong>
              </h4>
              <ul>
                <li>
                  <a href="#">Terms of Use</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Cookie Policy</a>
                </li>
                <li>
                  <a href="mailto:contact@spareshare.org">Email Us</a>
                </li>
              </ul>
            </div>
          </div>
          <br />
          <div className="cop">@ 2024 All Rights Reserved and Registered</div>
          <br />
        </div>
      </footer>
    </div>
  );
};

export default Footer;
