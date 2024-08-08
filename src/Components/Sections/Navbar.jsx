import React, { useState } from 'react';
import LoginModal from '../LoginForm/LoginModal.jsx';
import './Navbar.css';

function Navbar({ isLoggedIn, username }) {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);

  const openLoginModal = (e) => {
    e.preventDefault();
    setLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setLoginModalOpen(false);
  };

  return (
    <header className="fixed-top">
      <div className="nav-container">
        <nav className="navbar">
          <img src='assets/surplus-logo.png' />
          <a className="navbar-brand" href="/">SpareShare</a>
          <button className="navbar-toggler" type="button">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/donation">Donations</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
              <li className="nav-item">
                {isLoggedIn ? (
                  <a className="nav-link" href="/profile">{username}</a>
                ) : (
                  <a className="nav-link" href="#" onClick={openLoginModal}>Login</a>
                )}
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <div className="cont-sec">
        <div className="nav-container">
          <div className="cont-row">
            <div className="cont-col">
              <p>Contact No: <a href="tel:+916374540095">+91 6374540095</a></p>
            </div>
            <div className="cont-col">
              <div className="social">
                <a href=" https://www.facebook.com/"><img src="assets/facebook.png" alt="facebook" /></a>
                <a href="https://www.instagram.com/"><img src="assets/instagram.png" alt="instagram" /></a>
                <a href="https://www.youtube.com/"><img src="assets/youtube.png" alt="youtube" /></a>
                <a href="https://www.linkedin.com/"><img src="assets/linkedin.png" alt="linkedin" /></a>
                <a href="https://mail.google.com/"><img src="assets/gmail.png" alt="gmail" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isLoginModalOpen && <LoginModal onClose={closeLoginModal} />}
    </header>
  );
}

export default Navbar;
