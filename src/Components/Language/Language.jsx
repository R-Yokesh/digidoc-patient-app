import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../../Assets/Css/Language.css';

const Language = () => {
  const [selectedLang, setSelectedLang] = useState(null);
  const navigate = useNavigate(); // Initialize navigate

  const handleLanguageSelect = (language) => {
    setSelectedLang(language);
    navigate('/signin');
  };

  return (
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
  );
};

export default Language;
