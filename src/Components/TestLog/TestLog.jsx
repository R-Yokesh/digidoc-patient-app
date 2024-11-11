import React, { useState } from 'react';
import '../../Assets/Css/TestLog.css';
import FilterIcon from '../../Assets/Images/SVG/test-filter.svg';
import DropdownIcon from '../../Assets/Images/SVG/logdownIcon.svg';
import BloodPressureIcon from '../../Assets/Images/BloodPressureIcon.png';
import ImageIcon from '../../Assets/Images/SVG/photoIcon.svg';
import backIcon from "../../Assets/Images/Expand_left.png";
import TLCalendar from "../../Assets/Images/SVG/testlog-calendar.svg";

const TestLog = () => {

  const [isFilterVisible, setFilterVisible] = useState(false);


  const toggleFilter = () => {
    setFilterVisible(!isFilterVisible);
  };

  const logs = [
    {
      date: 'Today, July 20',
      entries: [
        { time: '08:00 am', title: 'Blood Pressure', value: '100/57 mmHg' },
        { time: '08:00 am', title: 'Blood Pressure', value: 'NA' },
        { time: '08:00 am', title: 'Blood Pressure', value: 'image' },
      ],
    },
    {
      date: 'Yesterday, July 19',
      entries: [
        { time: '08:00 am', title: 'Blood Pressure', value: '100/57 mmHg' },
        { time: '08:00 am', title: 'Blood Pressure', value: '100/57 mmHg' },
        { time: '08:00 am', title: 'Blood Pressure', value: '100/57 mmHg' },
      ],
    },
    {
      date: 'July 18',
      entries: [
        { time: '08:00 am', title: 'Blood Pressure', value: '100/57 mmHg' },
      ],
    },
  ];

  return (
    <div className='test-log-container'>
      <div className="testlog-header">
        <button className="testlog-back-button">
          <img src={backIcon} alt="Back" className="back-icon" />
        </button>
        <h1>My Test Log</h1>
      </div>
      <div className="test-log">
        <div className="test-log-content">
          {logs.map((log, index) => (
            <div key={index} className="log-section">
              <div className="log-section-header">
                <h2>{log.date}</h2>
                {index === 0 && (
                  <button className="filter-button" onClick={toggleFilter}>
                    <img src={FilterIcon} alt="Filter" />
                    <span>Filter</span>
                    <img src={DropdownIcon} alt="Dropdown" className="logdropdown-icon" />
                  </button>
                )}
              </div>
              {log.entries.map((entry, idx) => (
                <div key={idx} className="log-entry">
                  <img src={BloodPressureIcon} alt="Blood Pressure" />
                  <div className="entry-details">
                    <h3>{entry.title}</h3>
                    <p>{entry.time}</p>
                  </div>
                  <span className="entry-value">
                    {entry.value === 'image' ? (
                      <img src={ImageIcon} className="photo-icon" alt="Image icon" />
                    ) : (
                      entry.value
                    )}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* {isFilterVisible && (
        <div className={`filter-container ${isFilterVisible ? 'slide-up' : 'slide-down'}`}>
          <h2>Filter</h2>
          <label className='testlog-lbl'>Test</label>
          <div className="filter-select">
            <img src={BloodPressureIcon} alt="Blood Pressure" />
            <select>
              <option>Blood Pressure</option>
        
            </select>
          </div>
          <label className='testlog-lbl'>Date</label>
          <div className="filter-date">
            <input type="text" placeholder="20/07/2024" />
            <img src={TLCalendar}  className='filter-img' alt="Calendar Icon" />
          </div>
          <div className="filter-actions">
            <button className="clear-button">Clear All</button>
            <button className="apply-button">Apply</button>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default TestLog;
