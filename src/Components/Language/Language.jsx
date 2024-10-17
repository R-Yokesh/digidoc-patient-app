import React, { useState } from 'react';
import './Language.css';
import DigiDocImage from '../../Assets/Images/DigiDoc Head.png';
import SplashImage from '../../Assets/Images/Online Doctor-amico.png';

const Language = () => {
  const [selectedLang, setSelectedLang] = useState(null);

  const handleLanguageSelect = (language) => {
    setSelectedLang(language);
  };

  return (
    <div className="language-container">
      <header className="logo-section">
        <img src={DigiDocImage} alt="DigiDoc" className="logo" />
      </header>
      <div className="illustration-section">
        <img src={SplashImage} alt="Doctor Illustration" className="illustration" />
      </div>
      <div className="language-selector">
      <div className="divider"></div> 
        <h2>Choose Your Language</h2>
        <div className="button-group">
          <button
            className={`lang-button english ${selectedLang === 'English' ? 'selected' : ''}`}
            onClick={() => handleLanguageSelect('English')}
          >
            English
          </button>
          <button
            className={`lang-button tamil ${selectedLang === 'Tamil' ? 'selected' : ''}`}
            onClick={() => handleLanguageSelect('Tamil')}
          >
            தமிழ்
          </button>
        </div>
      </div>
    </div>
  );
};

export default Language;
