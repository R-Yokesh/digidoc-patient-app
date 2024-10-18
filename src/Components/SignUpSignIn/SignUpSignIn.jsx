import React, { useState } from "react";
import '../../Assets/Css/Sign.css'

const SignUpSignIn = () => {
  return (
    <div>
      <div className="slanguage-selector">
        <div className="divider"></div>
        <h2>Sign in/Sign up</h2>

        <input
          type="text"
          placeholder="Enter mobile number"
          className="mobile-input"
        />

        <button className="submit-btn">Submit</button>
      </div>
    </div>
  );
};

export default SignUpSignIn;
