import React from 'react'
import '../Assets/Css/Language.css'
import DigiDocImage from '../Assets/Images/DigiDoc Head.png';
import SplashImage from '../Assets/Images/Online Doctor-amico.png';

const SignView = () => {
  return (
    <div>
        <div className="language-container">
      <header className="logo-section">
        <img src={DigiDocImage} alt="DigiDoc" className="logo" />
      </header>
      <div className="illustration-section">
        <img src={SplashImage} alt="Doctor Illustration" className="illustration" />
      </div>
    </div>
    </div>
  )
}

export default SignView