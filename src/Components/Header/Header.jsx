import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';
import DigiDocImage from '../../Assets/Images/DigiDoc Head.png';
import List from '../../Assets/Images/list.png';
import Group from '../../Assets/Images/Group.png';
import ProfilePic from '../../Assets/Images/profilepic.png';
import MedicineIcon from '../../Assets/Images/Group (1).png';
import TestsIcon from '../../Assets/Images/Vector.png';
import DoctorsIcon from '../../Assets/Images/doctors.png';
import MedicalRecordsIcon from '../../Assets/Images/Vector (1).png';
import LanguageIcon from '../../Assets/Images/lang.png';
import ContactIcon from '../../Assets/Images/customer-service (2) 1.png';
import LogoutIcon from '../../Assets/Images/log-out 1.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNotificationClick = () => {
    navigate('/remainder');
  };

  return (
    <>
      <header className="main-header">
        <div className="menu-icons" onClick={toggleMenu}>
          <img src={List} alt="menu icon" />
        </div>
        <div className="logo">
          <img src={DigiDocImage} alt="DigiDoc Logo" />
        </div>
        <div className="notification-icon" onClick={handleNotificationClick}>
          <img src={Group} alt="notification icon" />
        </div>
      </header>

      <div className={`side-menu ${menuOpen ? 'open' : ''}`}>
        <div className="profile-section">
          <img src={ProfilePic} alt="Profile" className="profile-pic" />
          <div className="profile-name">Name AB</div>
        </div>

        <div className="separator">
                    <span className="line"></span>
                    {/* <span className="or-text">or</span> */}
                    <span className="line"></span>
                </div>

        <ul className="menu-list">
          <li className="menu-items">
            <img src={MedicineIcon} alt="My Medicines" className="menu-icons" />
            My Medicines
          </li>
          <li className="menu-items">
            <img src={TestsIcon} alt="My Tests" className="menu-icons" />
            My Tests
          </li>
          <li className="menu-items">
            <img src={DoctorsIcon} alt="My Doctors" className="menu-icons" />
            My Doctors
          </li>
          <li className="menu-items">
            <img src={MedicalRecordsIcon} alt="My Medical Records" className="menu-icons" />
            My Medical Records
          </li>
          <li className="menu-items language-selectors">
            <img src={LanguageIcon} alt="Language" className="menu-icons" />
            Language
          </li>
          <li className="menu-items language-selectors">
            <select>
              <option value="english">English</option>
              <option value="tamil">Tamil</option>
              {/* Add more languages as needed */}
            </select>
          </li>
          <li className="menu-items">
            <img src={ContactIcon} alt="Contact Us" className="menu-icons" />
            Contact Us
          </li>
          <li className="menu-items">
            <img src={LogoutIcon} alt="Logout" className="menu-icons" />
            Logout
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
