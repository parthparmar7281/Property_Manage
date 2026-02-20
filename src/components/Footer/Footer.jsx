import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <h2 className="logo">▲ PROPERTY</h2>

          <p>
            Find your dream home with verified listings, transparent pricing,
            and expert real estate support — all in one place.
          </p>
          <div className="social">
                  <a href="#"><span className="icon-instagram"></span></a>
                  <a href="#"><span className="icon-twitter"></span></a>
                  <a href="#"><span className="icon-facebook"></span></a>              
                  <a href="#"><span className="icon-linkedin"></span></a>             
          </div>

          <button className="back-top" onClick={scrollTop}>
            ↑ BACK TO TOP
          </button>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li>
            <a href="/" >Home</a>
            </li>
            <li><a href="/about" >About</a></li>
            <li><a href="/contact" >Contact</a></li>
            <li><a href="/service" >Service</a></li>
            <li><a href="/property" >Property</a></li>
          </ul>
        </div>
        <div class="footer-links">
              <h4>Contact</h4>
              <address><span className="icon-home">43 Raymouth Rd. Baltemoer, London 3910</span></address>
              <ul class="list-unstyled links">
                <li><a href="tel://11234567890">+1(123)-456-7890</a></li>
                <li><a href="tel://11234567890">+1(123)-456-7890</a></li>
                <li>
                  <a href="mailto:info@mydomain.com">info@mydomain.com</a>
                </li>
              </ul>
            </div>
      </div>
    </footer>
  );
};

export default Footer;