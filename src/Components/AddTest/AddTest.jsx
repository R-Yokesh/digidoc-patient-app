import React, { useState } from "react";
import "../../Assets/Css/AddTest.css";
import backIcon from "../../Assets/Images/Expand_left.png";
import SearchIcon from "../../Assets/Images/SVG/Search.svg";
import DropdownIcon from "../../Assets/Images/SVG/Dropdown.svg";
import MorningIcon from "../../Assets/Images/SVG/SunriseGrey.svg";
import AfternoonIcon from "../../Assets/Images/SVG/SunGrey.svg";
import EveningIcon from "../../Assets/Images/SVG/CloudGrey.svg";
import NightIcon from "../../Assets/Images/SVG/MoonGrey.svg";
import AlarmIcon from "../../Assets/Images/SVG/AlarmGrey.svg";

const AddTest = () => {
  const [testName, setTestName] = useState("");
  const [instruction, setInstruction] = useState("");
  const [selectedTimes, setSelectedTimes] = useState([]);
  const [duration, setDuration] = useState("Daily");

  const handleTimeSelect = (time) => {
    if (selectedTimes.includes(time)) {
      setSelectedTimes(selectedTimes.filter((t) => t !== time));
    } else {
      setSelectedTimes([...selectedTimes, time]);
    }
  };

  const handleDurationToggle = (selected) => {
    setDuration(selected);
  };

  return (
    <div className="add-mytest-container">
    <div className="addtest-header">
    <button className="back-button">
      <img src={backIcon} alt="Back" className="back-icon" />
    </button>
    <h1>My Test</h1>
  </div>
    <div className="add-test-container">
      {/* Test Name Input */}
      <div className="form-group">
        <label>
          Test Name<span>*</span>
        </label>
        <div className="select-input">
          <input
            type="text"
            placeholder="Select"
            value={testName}
            onChange={(e) => setTestName(e.target.value)}
            style={{ fontFamily: "Avenir LT STD" }}
          />
          <img src={SearchIcon} alt="search icon" className="search-icon" />
          <img src={DropdownIcon} alt="dropdown icon" className="dropdown-icon" />
        </div>
      </div>

      {/* Instructions Radio Group */}
      <div className="form-group">
        <label>
          Instructions<span>*</span>
        </label>
        <div className="radio-group">
          {["Before Food", "After Food", "Others"].map((option) => (
            <label key={option} className="radio-option">
              <input
                type="radio"
                name="instruction"
                value={option}
                checked={instruction === option}
                onChange={() => setInstruction(option)}
              />
              {option}
            </label>
          ))}
        </div>
      </div>

      {/* Time Options */}
      <div className="time-options">
        {[
          { label: "Morning", time: "09:30 AM", icon: MorningIcon },
          { label: "Afternoon", time: "12:30 PM", icon: AfternoonIcon },
          { label: "Evening", time: "05:30 PM", icon: EveningIcon },
          { label: "Night", time: "09:30 PM", icon: NightIcon },
        ].map(({ label, time, icon }) => (
          <div key={label} className="time-card">
            <div className="time-label">
              <input
                type="checkbox"
                id={label}
                checked={selectedTimes.includes(label)}
                onChange={() => handleTimeSelect(label)}
              />
              <span>{label}</span>
            </div>
            <div className="time-icon">
              <img src={icon} alt={`${label} icon`} />
            </div>
            <div className="time-details">
              <img src={AlarmIcon} alt="alarm icon" className="alarm-icon" />
              <span className="time">{time}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Duration Toggle */}
      <div className="duration-group">
        <label>Duration</label>
        <div className="duration-toggle">
          <span
            className={`duration-option ${duration === "Daily" ? "active" : ""}`}
            onClick={() => handleDurationToggle("Daily")}
          >
            Daily
          </span>
          <span
            className={`duration-option ${duration === "Custom" ? "active" : ""}`}
            onClick={() => handleDurationToggle("Custom")}
          >
            Custom
          </span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="action-buttons">
        <button className="cancel-btn">Cancel</button>
        <button className="save-btn">Save</button>
      </div>
    </div>
    </div>
  );
};

export default AddTest;
