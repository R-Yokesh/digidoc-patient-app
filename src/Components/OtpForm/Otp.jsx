import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DigiDocImage from '../../Assets/Images/DigiDoc Head.png';  // Check paths
import SplashImage from '../../Assets/Images/Online Doctor-amico.png';  // Check paths
import './Otp.css';

const Otp = () => {
  const [otp, setOtp] = useState(new Array(6).fill(''));  // 6-digit OTP
  const navigate = useNavigate();

  const handleChange = (element, index) => {
    // Allow only numbers
    if (isNaN(element.value)) return;

    // Update OTP state
    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);


    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handleVerify = () => {

    navigate('/welcome');
  };

  return (
    <div className="otp-page">
      {/* <div className="logo-container-otp"> */}
        <header className="logo-section">
          <img src={DigiDocImage} alt="DigiDoc" className="logo" />
        </header>
        <div className="illustration-section-otp">
          <img src={SplashImage} alt="Doctor Illustration" className="illustration" />
        </div>
      {/* </div> */}

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
