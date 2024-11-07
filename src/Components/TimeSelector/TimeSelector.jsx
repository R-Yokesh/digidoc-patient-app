import React, { useState } from 'react';
import '../../Assets/Css/TimeSelector.css';

const TimeSelector = ({ onCancel }) => {
  const [selectedHour, setSelectedHour] = useState(8);
  const [selectedMinute, setSelectedMinute] = useState(0);
  const [selectedPeriod, setSelectedPeriod] = useState("AM");

  const hours = Array.from({ length: 12 }, (_, i) => i + 1);
  const minutes = Array.from({ length: 60 }, (_, i) => i);
  const periods = ["AM", "PM"];

  const getNextValue = (current, range) => (current + 1) % range;
  const getPrevValue = (current, range) => (current - 1 + range) % range;

  const handleScroll = (type, direction) => {
    if (type === "hour") {
      setSelectedHour(prev => (direction === "up" ? getNextValue(prev, 12) : getPrevValue(prev, 12)));
    } else if (type === "minute") {
      setSelectedMinute(prev => (direction === "up" ? getNextValue(prev, 60) : getPrevValue(prev, 60)));
    } else if (type === "period") {
      setSelectedPeriod(prev => (prev === "AM" ? "PM" : "AM"));
    }
  };

  return (
    <div className="timeSelector-container">
      <h3 className="timeSelector-title">Select Time</h3>
      <div className="timeSelector-picker">
        {/* Hours Scroll */}
        <div className="timeSelector-column" onWheel={(e) => handleScroll("hour", e.deltaY > 0 ? "up" : "down")}>
          <div className="timeSelector-item">{getPrevValue(selectedHour, 12).toString().padStart(2, '0')}</div>
          <div className="timeSelector-item timeSelector-active">{selectedHour.toString().padStart(2, '0')}</div>
          <div className="timeSelector-item">{getNextValue(selectedHour, 12).toString().padStart(2, '0')}</div>
        </div>

        {/* Separator */}
        <span className="timeSelector-separator">:</span>

        {/* Minutes Scroll */}
        <div className="timeSelector-column" onWheel={(e) => handleScroll("minute", e.deltaY > 0 ? "up" : "down")}>
          <div className="timeSelector-item">{getPrevValue(selectedMinute, 60).toString().padStart(2, '0')}</div>
          <div className="timeSelector-item timeSelector-active">{selectedMinute.toString().padStart(2, '0')}</div>
          <div className="timeSelector-item">{getNextValue(selectedMinute, 60).toString().padStart(2, '0')}</div>
        </div>

        {/* AM/PM Scroll */}
        <div className="timeSelector-column" onWheel={(e) => handleScroll("period", e.deltaY > 0 ? "up" : "down")}>
          <div className="timeSelector-item">{selectedPeriod === "AM" ? "PM" : "AM"}</div>
          <div className="timeSelector-item timeSelector-active">{selectedPeriod}</div>
          <div className="timeSelector-item">{selectedPeriod === "AM" ? "PM" : "AM"}</div>
        </div>
      </div>

      <div className="timeSelector-buttons">
        <button onClick={onCancel} className="timeSelector-cancelBtn">Cancel</button>
        <button className="timeSelector-setBtn">Set</button>
      </div>
    </div>
  );
};

export default TimeSelector;
