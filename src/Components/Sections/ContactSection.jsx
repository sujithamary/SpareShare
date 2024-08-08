import React, { useState, useEffect } from 'react';
import './Contact.css';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    caseDescription: ''
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
        <div className="contact-info">
          <h2>How To Reach Us</h2>
          <div className="info-item">
            <div className="icon-box">
              <FaMapMarkerAlt className="info-icon" />
            </div>
            <div>
              <h3>Our Location</h3>
              <p>No.6, Dhanammal street, Spur tank road, Chetpet, Chennai 600-031</p>
            </div>
          </div>
          <div className="info-item">
            <div className="icon-box">
              <FaPhone className="info-icon" />
            </div>
            <div>
              <h3>Phone</h3>
              <p>+91 6374540095</p>
            </div>
          </div>
          <div className="info-item">
            <div className="icon-box">
              <FaEnvelope className="info-icon" />
            </div>
            <div>
              <h3>Email</h3>
              <p>contact@shareshare.org</p>
            </div>
          </div>
        </div>
        <div className="form-wrapper">
          <h2>Contact Form</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name*"
                required
              />
              <input
                type="email"
                className="form-control"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email*"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone*"
                required
              />
              <input
                type="text"
                className="form-control"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Address"
              />
            </div>
            <div className="form-group">
              <textarea
                className="form-control"
                name="caseDescription"
                cols="30"
                rows="4"
                value={formData.caseDescription}
                onChange={handleChange}
                placeholder="Case description*"
                required
              />
            </div>
            <button type="submit" className="btn-submit">Submit Now</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;