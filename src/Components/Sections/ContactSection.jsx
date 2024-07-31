import React, { useState , useEffect} from 'react';
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
      <div className="container">
        <div className="heading">
          <h2>Connect With Us</h2>
        </div>
        <div className="row">
          <div className="col-lg-12 mt-5">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-lg-6">
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
                <div className="col-lg-6">
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
                <div className="col-md-12 mt-0">
                  <button type="submit" className="btn1 mt-0">Submit Details</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
