import React, { useState, useEffect } from 'react';
import './Contact.css';
import { FaUser, FaPhone, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobileNo: '',
    message: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-heading">
          <h2>Connect With Us</h2>
        </div>
        <div className="content-wrapper">
          <div className="form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-col">
                  <div className="form-group">
                    <FaUser className="form-icon" />
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <FaPhone className="form-icon" />
                    <input
                      type="text"
                      className="form-control"
                      name="mobileNo"
                      value={formData.mobileNo}
                      onChange={handleChange}
                      placeholder="Mobile No."
                      required
                    />
                  </div>
                </div>
                <div className="form-col">
                  <div className="form-group">
                    <FaEnvelope className="form-icon" />
                    <textarea
                      className="form-control"
                      name="message"
                      cols="30"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Message"
                      required
                    />
                  </div>
                </div>
                <div className="form-col-full">
                  <button type="submit" className="btn-submit">Submit Details</button>
                </div>
              </div>
            </form>
          </div>
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p>Email: <a href="mailto:spareshare@gmail.com">spareshare@gmail.com</a></p>
            <p>Phone: <a href="tel:+1234567890">+1234567890</a></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
