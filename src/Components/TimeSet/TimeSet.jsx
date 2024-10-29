import React, { useEffect } from 'react';
import './TimeSet.css'; // Assuming you will keep the CSS in a separate file

const TimeSet = ({ onClose }) => {
  // State for the selected time options
  const [selectedHour, setSelectedHour] = React.useState('08');
  const [selectedMinute, setSelectedMinute] = React.useState('00');
  const [selectedPeriod, setSelectedPeriod] = React.useState('AM');

  // List of options for hours, minutes, and periods
  const hours = ['07', '08', '09'];
  const minutes = ['59', '00', '01'];
  const periods = ['AM', 'PM'];

  const handleSave = () => {
    alert(`Time selected: ${selectedHour}:${selectedMinute} ${selectedPeriod}`);
    onClose(); // Close the popup after saving
  };

  // Effect to add blur class to body when component mounts
  useEffect(() => {
    document.body.classList.add('blurred');
    return () => {
      document.body.classList.remove('blurred'); // Cleanup on unmount
    };
  }, []);

  return (
    <div className="time-picker-container">
      <div className="time-picker-header">
        <span className="medicine-name">Painolax</span>
        <button className="close-btn" onClick={onClose}>×</button>
      </div>
      <div className="time-picker">
        {/* Hours Column */}
        <div className="time-column">
          {hours.map((hour) => (
            <div
              key={hour}
              className={`time-option ${selectedHour === hour ? 'selected' : ''}`}
              onClick={() => setSelectedHour(hour)}
            >
              {hour}
            </div>
          ))}
        </div>

        {/* Separator */}
        <span className="separator">:</span>

        {/* Minutes Column */}
        <div className="time-column">
          {minutes.map((minute) => (
            <div
              key={minute}
              className={`time-option ${selectedMinute === minute ? 'selected' : ''}`}
              onClick={() => setSelectedMinute(minute)}
            >
              {minute}
            </div>
          ))}
        </div>

        {/* AM/PM Column */}
        <div className="am-pm-column">
          {periods.map((period) => (
            <div
              key={period}
              className={`time-option ${selectedPeriod === period ? 'selected' : ''}`}
              onClick={() => setSelectedPeriod(period)}
            >
              {period}
            </div>
          ))}
        </div>
      </div>

      <button className="save-btn" onClick={handleSave}>
        Save
      </button>
    </div>
  );
};

export default TimeSet;
