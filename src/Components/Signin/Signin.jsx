import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DigiDocImage from '../../Assets/Images/DigiDoc Head.png';
import SplashImage from '../../Assets/Images/Online Doctor-amico.png';
import './Signin.css';
import config from '../../Config';

const Signin = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleMobileNumberChange = (e) => {
    const value = e.target.value;

    if (/^\d*$/.test(value)) {
      setMobileNumber(value);
      setErrorMessage('');
    } else {
      setErrorMessage('Please enter a valid mobile number');
    }
  };

  const handleContinue = async (e) => {
    e.preventDefault();

    if (mobileNumber.length === 10) {
      try {
        const response = await fetch(`${config.API_BASE_URL}/patient/send_otp`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            mobile_no: mobileNumber,
            language: "1" // Assuming language as "1" (English), replace if needed
          }),
        });

        if (!response.ok) {
          throw new Error('Failed to send OTP');
        }

        navigate('/otp');
      } catch (error) {
        setErrorMessage('An error occurred while sending OTP. Please try again.');
        console.error(error);
      }
    } else {
      setErrorMessage('Mobile number must be 10 digits');
    }
  };

  return (
    <div className="form-container">
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
          value={mobileNumber}
          onChange={handleMobileNumberChange}
          maxLength="10"
          required
        />
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button type="submit">Continue</button>
      </form>
    </div>
  );
};

export default Signin;
