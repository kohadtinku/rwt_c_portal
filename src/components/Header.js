import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="header" data-header>
      <div className="container">
        <a href="#" className="logo">
          <img src="./assets/images/logo.svg" width="162" height="50" alt="EduWeb logo" />
        </a>
        <nav className={`navbar ${isNavOpen ? 'open' : ''}`} data-navbar>
          <div className="wrapper">
            <a href="#" className="logo">
              <img src="./assets/images/logo.svg" width="162" height="50" alt="EduWeb logo" />
            </a>
            <button className="nav-close-btn" aria-label="close menu" onClick={toggleNav}>
              <ion-icon name="close-outline" aria-hidden="true"></ion-icon>
            </button>
          </div>
          <ul className="navbar-list">
            <li className="navbar-item"><a href="#home" className="navbar-link" data-nav-link>Home</a></li>
            <li className="navbar-item"><a href="#about" className="navbar-link" data-nav-link>About</a></li>
            <li className="navbar-item"><a href="#courses" className="navbar-link" data-nav-link>Courses</a></li>
            <li className="navbar-item"><a href="#blog" className="navbar-link" data-nav-link>Blog</a></li>
            <li className="navbar-item"><a href="#contact" className="navbar-link" data-nav-link>Contact</a></li>
          </ul>
        </nav>
        <div className="header-actions">
          <a href="#" className="btn has-before">
            <span className="span">Try for free</span>
            <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
          </a>
          <button className="nav-toggler" aria-label="toggle menu" onClick={toggleNav}>
            <FaBars aria-hidden="true" />
          </button>
        </div>
        <div className={`overlay ${isNavOpen ? 'active' : ''}`} onClick={toggleNav}></div>
      </div>
    </header>
  );
};

export default Header;
