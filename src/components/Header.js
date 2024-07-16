import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

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
            {/* <li className="navbar-item"><a href="#courses" className="navbar-link" data-nav-link>Courses</a></li> */}
                
            <li className=' navbar-item group max-lg:border-b max-lg:py-3 relative'>
            <a href='javascript:void(0)'
              className='navbar-link block'>Courses<svg
                xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" class="ml-1 inline-block"
                viewBox="0 0 24 24">
                <path
                  d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                  data-name="16" data-original="#000000" />
              </svg>
            </a>
            <ul
              class=' absolute shadow-lg bg-white space-y-3 lg:top-20 max-lg:top-8 -left-6 min-w-[250px] z-50 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-500'>
              <li class=' border-b py-2 '><Link   to='/webdevelopment'
                  class='  hover:text-[#1ab79d] text-[#181818]  font-[500] block'>Web Development</Link></li>
              <li class='border-b py-2 '><a href='javascript:void(0)'
                  class=' hover:text-[#1ab79d] text-[#181818]  font-[500] block'>Mobile App Development</a></li>
              <li class='border-b py-2 '><a href='javascript:void(0)'
                  class=' hover:text-[#1ab79d] text-[#181818]  font-[500]  block'>Digital MArketing</a></li>
              <li class='border-b py-2 '><a href='javascript:void(0)'
                  class=' hover:text-[#1ab79d] text-[#181818]  font-[500] block'>Hr Management</a></li>
              <li class='border-b py-2 '><a href='javascript:void(0)'
                  class=' hover:text-[#1ab79d] text-[#181818]  font-[500] block'></a></li>
            </ul>
          </li>    

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
