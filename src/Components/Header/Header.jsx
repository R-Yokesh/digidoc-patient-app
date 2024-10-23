import React from 'react';
import './Header.css'; // Ensure this file contains your custom styles
import DigiDocImage from '../../Assets/Images/DigiDoc Head.png';
import List from '../../Assets/Images/list.png'
import Group from '../../Assets/Images/Group.png'



const Header = () => {
  return (
    <header className="header">
      <div className="menu-icon">
        <img src={List} alt='list'></img>
      </div>
      <div className="logo">
        <img src={DigiDocImage} alt="DigiDoc Logo" />
      </div>
      <div className="notification-icon">
      <img src={Group} alt='list'></img>
      </div>
    </header>
  );
};

export default Header;
