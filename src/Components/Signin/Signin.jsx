import React from 'react'
import { useNavigate } from 'react-router-dom'; 
import DigiDocImage from '../../Assets/Images/DigiDoc Head.png';
import SplashImage from '../../Assets/Images/Online Doctor-amico.png';
import './Signin.css'

const Signin = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleContinue = (e) => {
    e.preventDefault(); // Prevent form submission
    navigate('/otp'); // Redirect to the OTP page
  };

  return (
    <div className="form-container">
      <div className="logo-container">
        <header className="logo-section">
          <img src={DigiDocImage} alt="DigiDoc" className="logo" />
        </header>
        <div className="illustration-section">
          <img src={SplashImage} alt="Doctor Illustration" className="illustration" />
        </div>

        <form className="sign-in-form" onSubmit={handleContinue}>
        <div className="divider"></div>
          <h2>Sign in/Sign up</h2>
          <input
          type="text"
          placeholder="Enter mobile number"
          className="mobile-input"
          required
        />
          <button type="submit">Continue</button>
        </form>
      </div>
      </div>

  )
}

export default Signin