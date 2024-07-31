import React from 'react';
import './Navbar.css';

function Navbar({ isLoggedIn, username }) {
  return (
    <header className="fixed-top">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <a className="navbar-brand" href="/">SpareShare</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse"
            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
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
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <p>Contact No: <a href="tel:+919876543210">+91 9876543210</a></p>
            </div>
            <div className="col-lg-6">
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
