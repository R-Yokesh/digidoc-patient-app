import React from "react";
import "../../Assets/Css/MyTest.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import backIcon from "../../Assets/Images/Expand_left.png";
import clockIcon from "../../Assets/Images/SVG/clockpc.svg";
import calendarIcon from "../../Assets/Images/SVG/mycalendar.svg";
import editIcon from "../../Assets/Images/SVG/edit.svg";
import alarmClockIcon from "../../Assets/Images/alarm-clock.png";
import bloodPressureIcon from "../../Assets/Images/BloodPressureIcon.png";
import bloodSugarIcon from "../../Assets/Images/BloodSugar.png";

const MyTest = () => {
  return (
    <div>
      <Header />
      <div className="reminder-container">
        <div className="sub-header">
          <button className="back-button">
            <img src={backIcon} alt="Back" className="back-icon" />
          </button>
          <h1 className="title-mytest">My Tests</h1>
        </div>

        <div className="mytest-button-group">
          <button className="add-button">+ Add</button>
          <button className="view-log-button">View Log</button>
        </div>

        {/* Reminder Card for Blood Pressure */}
        <div className="reminder-card">
          {/* First Row */}
          <div className="reminder-row">
            <img src={bloodPressureIcon} alt="Blood Pressure Icon" className="reminder-icon" />
            <div className="reminder-content">
              <h2>Blood Pressure</h2>
              <div className="reminder-info">
                <img src={clockIcon} alt="Clock Icon" />
                <span>08:00 am</span>
              </div>
              <div className="reminder-info">
                <img src={calendarIcon} alt="Calendar Icon" />
                <span>Daily</span>
              </div>
            </div>
            <button className="edit-button">
              <img src={editIcon} alt="Edit Icon" />
            </button>
          </div>

          {/* Second Row */}
          <div className="reminder1-row">
            <img src={alarmClockIcon} alt="Alarm Clock Icon" className="alarm-clock-icon" />
            <div className="toggle">
              <span className="toggle-on">On</span>
              <span className="toggle-off">Off</span>
            </div>
          </div>
        </div>

        {/* Reminder Card for Blood Sugar */}
        <div className="reminder-card">
          {/* First Row */}
          <div className="reminder-row">
            <img src={bloodSugarIcon} alt="Blood Sugar Icon" className="reminder-icon" />
            <div className="reminder-content">
              <h2>Blood Sugar</h2>
              <div className="reminder-info">
                <img src={clockIcon} alt="Clock Icon" />
                <span>08:00 am</span>
              </div>
              <div className="reminder-info">
                <img src={calendarIcon} alt="Calendar Icon" />
                <span>Till 20-07-2024</span>
              </div>
            </div>
            <button className="edit-button">
              <img src={editIcon} alt="Edit Icon" />
            </button>
          </div>

          {/* Second Row */}
          <div className="reminder1-row">
            <img src={alarmClockIcon} alt="Alarm Clock Icon" className="alarm-clock-icon" />
            <div className="toggle">
              <span className="toggle-on">On</span>
              <span className="toggle-off">Off</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyTest;
