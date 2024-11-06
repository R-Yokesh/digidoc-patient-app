import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DigiDocImage from '../../Assets/Images/DigiDoc Head.png';
import SplashImage from '../../Assets/Images/Online Doctor-amico.png';
import './Otp.css';
import config from '../../Config';

const Otp = () => {
  const [otp, setOtp] = useState(new Array(4).fill(''));
  const [errorMessage, setErrorMessage] = useState('');
  const [resendMessage, setResendMessage] = useState('');
  const navigate = useNavigate();

  // Simulating the correct OTP for demonstration (in a real app, don't store it client-side)
  const actualOtp = '1234'; // Replace with the actual OTP logic, e.g., fetched or generated on the server

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handleVerify = async () => {
    const enteredOtp = otp.join('');

    if (enteredOtp.length === 4) {
      if (enteredOtp === actualOtp) {
        navigate('/welcome');
      } else {
        setErrorMessage('Invalid OTP. Please try again.');
      }
    } else {
      setErrorMessage('Please enter a 4-digit OTP');
    }
  };

  const handleResend = async () => {
    try {
      const response = await fetch(`${config.API_BASE_URL}/patient/resend_otp`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          mobile_no: "8000000000", // Replace with actual mobile number from context or state
          language_id: "1"
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to resend OTP');
      }

      setResendMessage('OTP has been resent successfully.');
      setTimeout(() => setResendMessage(''), 3000); // Clear message after 3 seconds
    } catch (error) {
      setErrorMessage('Failed to resend OTP. Please try again later.');
      console.error(error);
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
        {resendMessage && <p className="success-message">{resendMessage}</p>}

        <div className="resend-otp">
          <small>Didn't receive OTP? <a href="#" onClick={handleResend}>Resend</a></small>
        </div>

        <div className="btn margins" onClick={handleVerify}>
          <button className="button-verify">Verify</button>
        </div>
      </div>
    </div>
  );
};

export default Otp;
