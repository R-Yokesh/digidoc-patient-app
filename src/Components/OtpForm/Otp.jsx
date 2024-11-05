import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DigiDocImage from '../../Assets/Images/DigiDoc Head.png';
import SplashImage from '../../Assets/Images/Online Doctor-amico.png';
import './Otp.css';
import config from '../../Config';

const Otp = () => {
  const [otp, setOtp] = useState(new Array(6).fill(''));
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handleVerify = async () => {
    const enteredOtp = otp.join('');

    if (enteredOtp.length === 6) {
      try {
        const response = await fetch(`${config.API_BASE_URL}/patient/verify_otp`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            mobile_no: "8000000000", // Use the actual mobile number from context or state
            otp: enteredOtp,
            language_id: "1" // Assuming language ID as "1", replace if necessary
          }),
        });

        if (!response.ok) {
          throw new Error('OTP verification failed');
        }

        navigate('/welcome');
      } catch (error) {
        setErrorMessage('Invalid OTP. Please try again.');
        console.error(error);
      }
    } else {
      setErrorMessage('Please enter a 6-digit OTP');
    }
  };

  return (
    <div className="otp-page">
      <header className="logo-section">
        <img src={DigiDocImage} alt="DigiDoc" className="logos" />
      </header>
      <div className="illustration-section-otp">
        <img src={SplashImage} alt="Doctor Illustration" className="illustration" />
      </div>
      <div className="otp-container">
        <div className="divider"></div>
        <h4>OTP Verification</h4>
        <small>Enter the OTP sent to +91 ***** *****</small>

        <div className="input-container">
          {otp.map((data, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              name="otp"
              value={data}
              onChange={(e) => handleChange(e.target, index)}
              onFocus={(e) => e.target.select()}
            />
          ))}
        </div>

        {errorMessage && <p className="error-message">{errorMessage}</p>}
        
        <div className="resend-otp">
          <small>Didn't receive OTP? <a href="#">Resend</a></small>
        </div>

        <div className="btn margins" onClick={handleVerify}>
          <button className="button-verify">Verify</button>
        </div>
      </div>
    </div>
  );
};

export default Otp;
