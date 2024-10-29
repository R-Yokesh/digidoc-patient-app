import React from 'react'
import Success from "../../Assets/Images/Done_ring_round_fill.png";
import { useNavigate } from 'react-router-dom';

const TestResultSuccess = () => {
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
      Your test result has been updated
      </h4>
      <h4 className="success-message">
      successfully!
      </h4>
    </div>
    <div className="button-automap">
      <button className="button-home" onClick={handleRedirect}>
        Home
      </button>
    </div>
  </div>
  )
}

export default TestResultSuccess