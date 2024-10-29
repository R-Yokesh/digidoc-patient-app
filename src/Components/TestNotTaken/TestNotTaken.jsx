import React ,{ useState } from 'react'
import SaveIcon from '../../Assets/Images/saveicon.png'
import DeleteIcon from '../../Assets/Images/DeleteIcon.png'
import './TestNotTaken.css'
const TestNotTaken = () => {
  const [showReminder, setShowReminder] = useState(true);

  const handleSkip = () => {
    setShowReminder(false);
  };

  const handleSnooze = () => {
    setShowReminder(false);
    // Implement snooze functionality (e.g., set a timer)
  };

  if (!showReminder) {
    return null;
  }
  return (
<div className="reminder-containers">
      <div className="reminder-content">
        <div className="reminder-icon">
        <img src={SaveIcon} alt="Blood Pressure Reminder"></img>
        </div>
        <div className="reminder-text">
          <h2>Blood Pressure</h2>
          <p>Before Food</p>
        </div>
        <div className="reminder-buttons">
          <button onClick={handleSkip}>Skip</button>
          <button onClick={handleSnooze}>Snooze 15m</button>
        </div>
        <button className="close-button" onClick={handleSkip}>
          <span aria-hidden="true">&times;</span>
        </button>
      </ div>
    </div>
  )
}

export default TestNotTaken