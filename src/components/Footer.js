import React from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import logo from "../assets/logo2.png"

const Footer = () => {
  return (
    <footer
      className="footer"
      style={{ backgroundImage: 'url("./assets/images/footer-bg.png")' }}
    >
      <div className="footer-top section">
        <div className="container grid-list">
          <div className="footer-brand">
            <a href="#" className="logo">
              <img
                src={logo}
                width="162"
                height="50"
                alt="EduWeb logo"
              />
            </a>
            <p className="footer-brand-text">
              Lorem ipsum dolor amet consecto adi pisicing elit sed eiusm tempor
              incidid unt labore dolore.
            </p>
            <div className="wrapper ">
              <span className="span">Add:</span>
              <address className="address">4th floor, A Wing, Block No. 8, Mangalwari Complex, near Government Polytechnic, Sadar, Nagpur, Maharashtra 440001</address>
            </div>
            <div className="wrapper mt-6">
              <span className="span">Call:</span>
              <a href="tel:+011234567890" className="footer-link">
              7276081626
              </a>
            </div>
            <div className="wrapper mt-6">
              <span className="span">Email:</span>
              <a href="mailto:info@eduweb.com" className="footer-link">
                hr.royalswebtechpvtltd@gmail.com
              </a>
            </div>
          </div>

          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Online Platform</p>
            </li>
            <li>
              <a href="#" className="footer-link">
                About
              </a>
            </li>
            <li>
              <a href="/webDevelopment" className="footer-link">
                Courses
              </a>
            </li>
            <li>
              <a href="/contact" className="footer-link">
             Contact
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Events
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Instructor Profile
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Purchase Guide
              </a>
            </li>
          </ul>

          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Links</p>
            </li>
            <li>
              <a href="#" className="footer-link">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Gallery
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                News & Articles
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                FAQ's
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Sign In/Registration
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Coming Soon
              </a>
            </li>
          </ul>

          <div className="footer-list">
            <p className="footer-list-title">Contacts</p>
            <p className="footer-list-text">
              Enter your email address to register to our newsletter
              subscription
            </p>
            <form action="" className="newsletter-form">
              <input
                type="email"
                name="email_address"
                placeholder="Your email"
                required
                className="input-field"
              />
              <button type="submit" className="btn has-before">
                <span className="span">Subscribe</span>
            
              </button>
            </form>
            <ul className="social-list">
              <li>
                <a href="https://www.facebook.com/royalswebtech" className="social-link">
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/royalswebtechpvtltd/" className="social-link">
                  <FaLinkedinIn />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/royalswebtechpvtltd/" className="social-link">
                <FaInstagram />
                </a>
              </li>
              <li>
                <a href="#" className="social-link">
                <FaTwitter />
                </a>
              </li>
              <li>
                <a href="#" className="social-link">
                <FaYoutube />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p className="copyright">
          2024 | All Copyrights Reserved | <a href="#" className="copyright-link"> 
                Design & Development by Royals WebTech Pvt. Ltd.
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
