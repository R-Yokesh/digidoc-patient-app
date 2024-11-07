import React from 'react';
import '../../Assets/Css/TestSuccess.css';
import TickIcon from '../../Assets/Images/Done_ring_round_fill.png';


const TestSuccess = () => {
  return (
    <div className="test-success-container">
      <img src={TickIcon} alt="Success Tick Icon" className="tick-icon" />
      <p className="tsuccess-message">Your Test has been uploaded successfully!</p>
      <button className="thome-button">Home</button>
    </div>
  );
};

export default TestSuccess;

