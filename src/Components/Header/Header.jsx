import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Header.css';
import DigiDocImage from '../../Assets/Images/DigiDoc Head.png';
import List from '../../Assets/Images/list.png';
import Group from '../../Assets/Images/Group.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNotificationClick = () => {
    navigate('/remainder'); // Navigate to the reminder page
  };

  return (
    <>
      <header className="main-header">
        <div className="menu-icon" onClick={toggleMenu}>
          <img src={List} alt="menu icon" />
        </div>
        <div className="logo">
          <img src={DigiDocImage} alt="DigiDoc Logo" />
        </div>
        <div className="notification-icon" onClick={handleNotificationClick}> {/* Add click handler */}
          <img src={Group} alt="notification icon" />
        </div>
      </header>

      <div className={`slide-menu ${menuOpen ? 'open' : ''}`}>
        <div className="close-icon" onClick={toggleMenu}>&times;</div> {/* Close Icon */}
        <ul>
          <li><a href="#home">My Medicine</a></li>
          <li><a href="#about">My Test</a></li>
          <li><a href="#services">My Doctors</a></li>
          <li><a href="#contact">My Medical Records</a></li>
          <li><a href="#contact">Language</a></li>
          <li><a href="#contact">Contact Us</a></li>
          <li><a href="#contact">Logout</a></li>
        </ul>
      </div>
    </>
  );
};

export default Header;
