/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable arrow-body-style */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdFingerprint } from 'react-icons/md';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 980) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <div className="navbar">
        <div className="navbar-container container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <MdFingerprint className="navbar-icon" />
            Adhri
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes className="fa-times" /> : <FaBars className="fa-bars" />}
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link className="nav-links" onClick={closeMobileMenu} to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-links" onClick={closeMobileMenu} to="/about">Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-links" onClick={closeMobileMenu} to="/price">Services</Link>
            </li>
            <li className="nav-btn">
              {button ? (
                <Link to="/sign-up" className="btn-link">
                  <Button buttonStyle="btn--outline">SIGN UP</Button>
                </Link>
              ) : (
                <Link to="/sign-up" className="btn-link">
                  <Button buttonStyle="btn--outline" buttonSize="btn--mobile">SIGN UP</Button>
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
