import React from 'react'
import './Footer.css'
import Home from '../../Assets/Images/home.png'
import Pill from '../../Assets/Images/pill.png'
import Heart from '../../Assets/Images/heart-attack.png'
import User from '../../Assets/Images/user.png'
const Footer = () => {
    return (
        <div className="icons-menu">
          <div className="menu-item active">
            <img src={Home} alt='home'></img>
            <span>Home</span>
          </div>
          <div className="menu-item">
          <img src={Pill} alt='home'></img>
            <span>Medicines</span>
          </div>
          <div className="menu-item">
          <img src={Heart} alt='home'></img>
            <span>My Tests</span>
          </div>
          <div className="menu-item">
          <img src={User} alt='home'></img>
            <span>Profile</span>
          </div>
        </div>
      );
    };

export default Footer