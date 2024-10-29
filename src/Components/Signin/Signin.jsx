import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import DigiDocImage from '../../Assets/Images/DigiDoc Head.png';
import SplashImage from '../../Assets/Images/Online Doctor-amico.png';
import './Signin.css'

const Signin = () => {
  const [mobileNumber, setMobileNumber] = useState(''); // State for the mobile number
  const [errorMessage, setErrorMessage] = useState(''); // State for validation error
  const navigate = useNavigate(); // Initialize useNavigate

  // Handle input change for the mobile number
  const handleMobileNumberChange = (e) => {
    const value = e.target.value;

    // Allow only numeric input and limit to 10 digits
    if (/^\d*$/.test(value)) {
      setMobileNumber(value); 
      setErrorMessage(''); // Reset error if input is valid
    } else {
      setErrorMessage('Please enter a valid mobile number'); // Error if invalid input
    }
  };

  const handleContinue = (e) => {
    e.preventDefault(); // Prevent form submission

    // Check if the mobile number is exactly 10 digits
    if (mobileNumber.length === 10) {
      navigate('/otp'); // Redirect to the OTP page
    } else {
      setErrorMessage('Mobile number must be 10 digits'); // Set error message
    }
  };

  return (
    <div className="form-container">
      {/* <div className="logo-container"> */}
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
          value={mobileNumber} // Bind value to state
          onChange={handleMobileNumberChange} // Handle change
          maxLength="10" // Optional: limit max characters to 10
          required
        />
        {errorMessage && <p className="error-message">{errorMessage}</p>} {/* Display validation error */}
        <button type="submit">Continue</button>
      </form>
    </div>
  );
}

export default Signin;
