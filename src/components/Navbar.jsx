import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  const userStr = localStorage.getItem("user");
  const user = userStr ? JSON.parse(userStr) : null;

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  return (
    <>
    <div className="d-inline-block d-lg-none site-mobile-menu site-navbar-target">
      <div className="site-mobile-menu-header">
        <div className="site-mobile-menu-close">
          <span className="icofont-close js-menu-toggle"></span>
        </div>
      </div>
      <div className="site-mobile-menu-body"></div>
    </div>
      <nav className="site-nav">
      <div className="container">
        <div className="menu-bg-wrap">
          <div className="site-navigation">
            <Link to="/" className="logo m-0 float-start">Property</Link>

            <ul
              className="js-clone-nav d-none d-lg-inline-block text-start site-menu float-end"
            >
              <li className="active"><Link to="/">Home</Link></li>
              <li className="has-children">
                <Link to="/property">Properties</Link>
                <ul className="dropdown">
                  <li><a href="#">Buy Property</a></li>
                  <li><a href="#">Sell Property</a></li>
                  <li className="has-children">
                    <a href="#">Dropdown</a>
                    <ul className="dropdown">
                      <li><a href="#">Sub Menu One</a></li>
                      <li><a href="#">Sub Menu Two</a></li>
                      <li><a href="#">Sub Menu Three</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li><Link to="/service">Service</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              {user?.role === "Seller" && (
                <li><Link to="/addProperty">Add Property</Link></li>
              )}
              {user ? (
                <>
                  <li><span className="text-white-50 ms-3 me-2" style={{ fontSize: "14px" }}>Hi, {user.fullName} ({user.role})</span></li>
                  <li>
                    <a href="#" onClick={(e) => { e.preventDefault(); handleLogout(); }}>
                      Logout
                    </a>
                  </li>
                </>
              ) : (
                <>
                  <li><Link to="/login">Login</Link></li>
                  <li><Link to="/signup">Sign Up</Link></li>
                </>
              )}
            </ul>
            
            <a
              href="#"
              className="burger light me-auto float-end mt-1 site-menu-toggle js-menu-toggle d-inline-block d-lg-none"
              data-toggle="collapse"
              data-target="#main-navbar"
            >
              <span></span>
            </a>
          </div>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar
