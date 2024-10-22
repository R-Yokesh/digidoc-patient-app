import React from "react";
import { useNavigate } from "react-router-dom"; 
import "../../Assets/Css/FirstWelcome.css";
import DigiDocImage from '../../Assets/Images/DigiDoc Head.png';
import ConsultImage from '../../Assets/Images/consult.png';

const FirstWelcome = () => {
  const navigate = useNavigate(); 

  const handleUploadClick = () => {
    navigate('/upload'); 
  };

  return (
    <div className="first-welcome-container">
      <div className="clogo-section">
        <img
          src={DigiDocImage}
          alt="DigiDoc Logo"
          className="logo-image"
        />
      </div>

      <div className="welcome-text">
        <h4>Welcome!</h4>
        <p>You recently had a consultation!</p>
      </div>

      <div className="icon-section">
        <img
          src={ConsultImage}
          alt="Consultation Icon"
          className="consultation-icon"
        />
      </div>

      <div className="instructions-text">
        <p>Take a picture of your medicines, and we’ll remind you about your regimen.</p>
      </div>

      <div className="button-group">
        <button className="wbtn buy-later-btn">Yet To Buy</button>
        <button className="wbtn upload-btn" onClick={handleUploadClick}>Upload</button> {/* Add onClick event */}
      </div>
    </div>
  );
};

export default FirstWelcome;
