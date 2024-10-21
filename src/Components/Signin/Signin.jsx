import React from 'react'
import DigiDocImage from '../../Assets/Images/DigiDoc Head.png';
import SplashImage from '../../Assets/Images/Online Doctor-amico.png';
import './Signin.css'

const Signin = () => {
  return (
    <div className="form-container">
      <div className="logo-container">
        <header className="logo-section">
          <img src={DigiDocImage} alt="DigiDoc" className="logo" />
        </header>
        <div className="illustration-section">
          <img src={SplashImage} alt="Doctor Illustration" className="illustration" />
        </div>

        <form className="sign-in-form">
        <div className="divider"></div>
          <h2>Sign in/Sign up</h2>
          <label htmlFor="mobile-number">Enter mobile number</label>
          <input
            type="text"
            id="mobile-number"
            required
          />
          <button type="submit">Continue</button>
        </form>
      </div>
      </div>

  )
}

export default Signin