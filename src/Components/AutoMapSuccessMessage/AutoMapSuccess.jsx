import React from 'react'
import Success from "../../Assets/Images/Done_ring_round_fill.png";
import { useNavigate } from 'react-router-dom';
import "./AutoMapSuccess.css"
const AutoMapSuccess = () => {
    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate('/'); // Redirects to the home page
    };

    return (
        <div className="success-page">
          <img
            src={Success}
            alt="Success"
            className="success-image"
          />
          <div className="success-content">
            <h4 className="success-text">
              Your regimen is being set up and will be ready soon. We'll notify you once it's complete.
            </h4>
            <h4 className="success-message">
              Thank you for your patience!
            </h4>
          </div>
          <div className="button-automap">
            <button className="button-home" onClick={handleRedirect}>
              Home
            </button>
          </div>
        </div>
      );
    };

    export default AutoMapSuccess;
