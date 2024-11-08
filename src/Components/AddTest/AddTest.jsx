// AddTest.jsx
import React, { useState } from "react";
import "../../Assets/Css/AddTest.css";
import TimeSelector from "../../Components/TimeSelector/TimeSelector";
import backIcon from "../../Assets/Images/Expand_left.png";
import SearchIcon from "../../Assets/Images/SVG/Search.svg";
import DropdownIcon from "../../Assets/Images/SVG/Dropdown.svg";
import MorningIcon from "../../Assets/Images/SVG/SunriseGrey.svg";
import AfternoonIcon from "../../Assets/Images/SVG/SunGrey.svg";
import EveningIcon from "../../Assets/Images/SVG/CloudGrey.svg";
import NightIcon from "../../Assets/Images/SVG/MoonGrey.svg";
import AlarmIcon from "../../Assets/Images/SVG/AlarmGrey.svg";
import CalendarIcon from "../../Assets/Images/SVG/MyTestCalender.svg";

const AddTest = () => {
  const [testName, setTestName] = useState("");
  const [instruction, setInstruction] = useState("");
  const [otherInstruction, setOtherInstruction] = useState("");
  const [selectedTimes, setSelectedTimes] = useState([]);
  const [customTimes, setCustomTimes] = useState({
    Morning: "09:30 AM",
    Afternoon: "12:30 PM",
    Evening: "05:30 PM",
    Night: "09:30 PM",
  });
  const [duration, setDuration] = useState("Daily");
  const [startDate, setStartDate] = useState("");
  const [lastDate, setLastDate] = useState("");
  const [numberOfDays, setNumberOfDays] = useState("");
  const [showTimeSelector, setShowTimeSelector] = useState(false);
  const [currentLabel, setCurrentLabel] = useState("");

  const handleTimeSelect = (label) => {
    if (selectedTimes.includes(label)) {
      setSelectedTimes(selectedTimes.filter((t) => t !== label));
    } else {
      setSelectedTimes([...selectedTimes, label]);
    }
  };

  const handleDurationToggle = (selected) => {
    setDuration(selected);
  };

  const openTimeSelector = (label) => {
    setCurrentLabel(label);
    setShowTimeSelector(true);
  };

  const handleTimeSet = (hour, minute, period) => {
    const formattedTime = `${hour.toString().padStart(2, "0")}:${minute
      .toString()
      .padStart(2, "0")} ${period}`;
    setCustomTimes((prevTimes) => ({ ...prevTimes, [currentLabel]: formattedTime }));
    setShowTimeSelector(false);
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
          {instruction === "Others" && (
            <input
              type="text"
              placeholder="Enter your instructions here"
              value={otherInstruction}
              onChange={(e) => setOtherInstruction(e.target.value)}
              className="other-instruction-input"
            />
          )}
        </div>

        {/* Time Options */}
        <div className="time-options">
          {[
            { label: "Morning", icon: MorningIcon },
            { label: "Afternoon", icon: AfternoonIcon },
            { label: "Evening", icon: EveningIcon },
            { label: "Night", icon: NightIcon },
          ].map(({ label, icon }) => (
            <div
              key={label}
              className={`time-card ${selectedTimes.includes(label) ? "selected" : ""}`}
            >
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
                <img
                  src={AlarmIcon}
                  alt="alarm icon"
                  className={`alarm-icon ${selectedTimes.includes(label) ? "selected" : ""}`}
                  onClick={() => openTimeSelector(label)}
                />
                <span className="time">{customTimes[label]}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Display Selected Times as Reminders */}
        <div className="reminder-display">
          {selectedTimes.map((time) => (
            <div key={time} className="reminder-text">
              {`${time} Reminder ${customTimes[time]}`}
            </div>
          ))}
        </div>

        {/* TimeSelector Popup */}
        {showTimeSelector && (
          <div className="time-selector-overlay">
            <TimeSelector onTimeSet={handleTimeSet} onCancel={() => setShowTimeSelector(false)} />
          </div>
        )}

        {/* Duration Toggle */}
        <div className="duration-group">
          <label>Duration</label>
          <div className="duration-toggle">
            <span
              className={`duration-option ${
                duration === "Daily" ? "active" : ""
              }`}
              onClick={() => handleDurationToggle("Daily")}
            >
              Daily
            </span>
            <span
              className={`duration-option ${
                duration === "Custom" ? "active" : ""
              }`}
              onClick={() => handleDurationToggle("Custom")}
            >
              Custom
            </span>
          </div>
        </div>

        {duration === "Custom" && (
          <div className="custom-duration-container">
            {/* First Column: Start Date and Last Date */}
            <div className="custom-column">
              <div className="input-row">
                <label>
                  Start Date<span>*</span>
                </label>
                <div className="select-input">
                  <input
                    type="text"
                    placeholder="Select Date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="custom-input"
                  />
                  <img
                    src={CalendarIcon}
                    alt="calendar icon"
                    className="calendar-icon"
                  />
                </div>
              </div>

              <div className="input-row">
                <label style={{ fontSize: "14px" }}>Last Date</label>
                <input
                  type="text"
                  placeholder="Last Date"
                  className="custom-input"
                  value={lastDate}
                  onChange={(e) => setLastDate(e.target.value)}
                />
              </div>
            </div>

            {/* Second Column: Number of Days */}
            <div className="custom-column">
              <div className="input-row">
                <label style={{ fontSize: "14px" }}>Number of Days</label>
                <input
                  type="number"
                  placeholder="00"
                  value={numberOfDays}
                  onChange={(e) => setNumberOfDays(e.target.value)}
                  className="ncustom-input"
                />
                <span className="days-text">Days</span>
              </div>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="action-buttons">
          <button className="test-cancel-btn">Cancel</button>
          <button className="test-save-btn">Save</button>
        </div>
      </div>
    </div>
  );
};

export default AddTest;
