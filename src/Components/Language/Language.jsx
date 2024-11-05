import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../Assets/Css/Language.css';
import DigiDocImage from '../../Assets/Images/DigiDoc Head.png';
import SplashImage from '../../Assets/Images/Online Doctor-amico.png';
import config from '../../Config';

const Language = () => {
  const [selectedLang, setSelectedLang] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  
  const handleLanguageSelect = async (language) => {
    setSelectedLang(language);
    
    const languageCode = language === 'English' ? '1' : '2';
    
    try {
      const response = await fetch(`${config.API_BASE_URL}/patient/language`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          language: languageCode,
          patient_id: "20" // Replace with actual patient ID if needed
        })
      });
      
      if (!response.ok) {
        throw new Error("Failed to update language");
      }

      navigate('/signin');
    } catch (err) {
      setError("An error occurred. Please try again.");
      console.error(err);
    }
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
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
};

export default Language;
