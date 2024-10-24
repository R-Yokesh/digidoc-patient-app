import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import DigiDocImage from '../../Assets/Images/DigiDoc Head.png';
import SplashImage from '../../Assets/Images/Online Doctor-amico.png';

const MappingScreen = () => {
    const [selectedMap, setSelectedMap] = useState(null);
    const navigate = useNavigate(); // Initialize navigate
  
    const handleMapSelect = (language) => {
      setSelectedMap(language);
      if (language === 'Map Medicine') {
        navigate('/map-medicine'); // Navigate to /map-medicine
      } else if (language === 'Auto Map') {
        navigate('/auto-map'); // Navigate to /auto-map
      }
    };

    return (
      <div className="language-container">
        {/* <header className="logo-section">
          <img src={DigiDocImage} alt="DigiDoc" className="logo" />
        </header> */}
        <div className="illustration-section">
          <img src={SplashImage} alt="Doctor Illustration" className="illustration" />
        </div>
        <div className="language-selector">
          <div className="divider"></div>
          <h4>Map your uploaded medicine photos with their corresponding medicines? </h4>
          <div className="button-group">
            <button
              className={`lang-button Map Medicine ${selectedMap === 'Map Medicine' ? 'selected' : ''}`}
              onClick={() => handleMapSelect('Map Medicine')}
            >
              Map Medicine
            </button>
            <button
              className={`lang-button Auto Map ${selectedMap === 'Auto Map' ? 'selected' : ''}`}
              onClick={() => handleMapSelect('Auto Map')}
            >
              Auto Map
            </button>
          </div>
        </div>
      </div>
    );
};

export default MappingScreen;
