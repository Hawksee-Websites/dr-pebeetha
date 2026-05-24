import React, { useContext, useState } from 'react';
import '../../../styles/Navbar.css';
import MenuContext from '../../../Context/menuProvider';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const { menuOpen, handleToggleMenu, navbar, handleNavbar, setImage, overlay, image, setOverlay } = useContext(MenuContext);
  const [dropdown, setDropdown] = useState(false);
  const location = useLocation(); // Get the current location

  const handleMenuItemClick = () => {
    if (window.innerWidth <= 768) {
      handleToggleMenu();
    }
  };

  const handleDropdown = () => {
    setDropdown(!dropdown);
  };

  const shouldReload = (path) => {
    // Check if the clicked link matches the current location
    return location.pathname === path;
  };

  return (
    <div>
      <div className='Navbar'>
        <header className={navbar ? 'header active' : 'header'}>
          <div className="logo">
            <Link to="/"><img src={image} alt="Dr.Pebeetha logo" /></Link>
          </div>
          <nav className='nav-menu'>
            <ul className={menuOpen ? 'nav-links active' : 'nav-links'} >
              <li>
                <Link onClick={() => { handleMenuItemClick(); shouldReload('/') && window.location.reload(); }} to="/">Home</Link>
              </li>
              <li>
                <Link onClick={() => { handleMenuItemClick(); shouldReload('/about') && window.location.reload(); }} to="/about">About</Link>
              </li>


              <li>
                <Link onClick={() => { handleMenuItemClick(); shouldReload('/services') && window.location.reload(); }} to="/services">Services</Link>
              </li>
              <li>
                <Link onClick={() => { handleMenuItemClick(); shouldReload('/gallery') && window.location.reload(); }} to="/gallery">Gallery</Link>
              </li>


              <li>
                <Link onClick={() => { handleMenuItemClick(); shouldReload('/contact') && window.location.reload(); }} to="/contact">Contact</Link>
              </li>
              <li className='appointment-li'>
                <Link onClick={() => { handleMenuItemClick(); shouldReload('/appointment') && window.location.reload(); }} to='/appointment' className='appointment-a'>Make an Appointment</Link>
              </li>
            </ul>
            <div className="menu-button">
              <label htmlFor="check">
                <input type="checkbox" id="check" onClick={handleMenuItemClick} />
                <span></span>
                <span></span>
                <span></span>
              </label>
            </div>
            <div className={overlay ? 'overlay active' : 'overlay'}></div>
          </nav>
        </header>
      </div>
    </div>
  );
}

export default Navbar;
