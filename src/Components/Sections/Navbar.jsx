import React from 'react';
import './Navbar.css';

function Navbar({ isLoggedIn, username }) {
  return (
    <header className="fixed-top">
      <div className="nav-container">
        <nav className="navbar">
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
                <a className="nav-link" href="/donation">Donations</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#mission-id">Missions</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
              <li className="nav-item">
                {isLoggedIn ? (
                  <a className="nav-link" href="/profile">{username}</a>
                ) : (
                  <a className="nav-link" href="/LoginForm">Login</a>
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
              <p>Contact No: <a href="tel:+919876543210">+91 9876543210</a></p>
            </div>
            <div className="cont-col">
              <div className="social">
                <a href="#"><img src="Asserts/facebook.png" alt="facebook" /></a>
                <a href="#"><img src="Asserts/instagram.png" alt="instagram" /></a>
                <a href="#"><img src="Asserts/youtube.png" alt="youtube" /></a>
                <a href="#"><img src="Asserts/linkedin.png" alt="linkedin" /></a>
                <a href="#"><img src="Asserts/gmail.png" alt="gmail" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
