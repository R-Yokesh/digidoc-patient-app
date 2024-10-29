import React, { useState } from 'react';
import '../../Assets/Css/DailyRegimen.css';

// Importing necessary SVGs and images
import SunIcon from '../../Assets/Images/SVG/Sunrise.svg';
import AfternoonIcon from '../../Assets/Images/SVG/Sun.svg';
import NightIcon from '../../Assets/Images/SVG/Moon.svg';
import CheckIcon from '../../Assets/Images/SVG/TickCheck.svg';
import Logo from '../../Assets/Images/DigiDoc Head.png';
import TabletIcon from '../../Assets/Images/SVG/Tablet-icon.svg';
import bloodIcon from '../../Assets/Images/SVG/blood-donation.svg';
import DiagIcon from '../../Assets/Images/SVG/laboratory.svg';
import CalendarIcon from '../../Assets/Images/SVG/Calendar.svg';

const DailyRegimen = () => {
  const [medicineChecks, setMedicineChecks] = useState({
    paracetamol: { morning: false, afternoon: false, night: false },
    amlodipine: { morning: false, afternoon: false, night: false },
    metformin: { morning: false, afternoon: false, night: false },
    bloodSugar: { morning: false, afternoon: false, night: false },
  });

  const toggleCheck = (medicine, time) => {
    setMedicineChecks(prevState => ({
      ...prevState,
      [medicine]: {
        ...prevState[medicine],
        [time]: !prevState[medicine][time],
      },
    }));
  };

  return (
    <div className="daily-regimen-container">
      <header className="drheader">
        <img src={Logo} alt="DigiDoc Logo" className="drlogo" />
        <h2>Daily Regimen</h2>
        <p>
          Hi {"{name}"}! Here’s your daily regimen. Make every day count by
          sticking to your regimen and unlocking a stronger, happier you.
        </p>
      </header>

      <section className="medicines-section">
        <h3 className="section-title">
          <img src={TabletIcon} alt="tabletimg" className="icon-img" /> Medicines
        </h3>

        <div className="medicine-card">
          <table className="medication-table">
            <thead>
              <tr>
                <th></th>
                <th><img src={SunIcon} alt="Morning" className="time-icon" /></th>
                <th><img src={AfternoonIcon} alt="Afternoon" className="time-icon" /></th>
                <th><img src={NightIcon} alt="Night" className="time-icon" /></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="drmedicine-name">Paracetamol</div>
                  <div className="label">Daily</div>
                </td>
                {['morning', 'afternoon', 'night'].map((time) => (
                  <td key={time} onClick={() => toggleCheck('paracetamol', time)}>
                    {medicineChecks.paracetamol[time] ? (
                      <img src={CheckIcon} alt="Check" className="check-icon" />
                    ) : (
                      <span className="empty-circle"></span>
                    )}
                  </td>
                ))}
              </tr>
              <tr>
                <td>
                  <div className="drmedicine-name">Amlodipine</div>
                  <div className="label">Till 15-8-2024</div>
                </td>
                {['morning', 'afternoon', 'night'].map((time) => (
                  <td key={time} onClick={() => toggleCheck('amlodipine', time)}>
                    {medicineChecks.amlodipine[time] ? (
                      <img src={CheckIcon} alt="Check" className="check-icon" />
                    ) : (
                      <span className="empty-circle"></span>
                    )}
                  </td>
                ))}
              </tr>
              <tr>
                <td>
                  <div className="drmedicine-name">Metformin</div>
                  <div className="label">Daily</div>
                </td>
                {['morning', 'afternoon', 'night'].map((time) => (
                  <td key={time} onClick={() => toggleCheck('metformin', time)}>
                    {medicineChecks.metformin[time] ? (
                      <img src={CheckIcon} alt="Check" className="check-icon" />
                    ) : (
                      <span className="empty-circle"></span>
                    )}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="home-test-section">
        <h3 className="section-title">
          <img src={bloodIcon} alt="blood-img" className="icon-img" /> Home Test
        </h3>
        <div className="medicine-card">
          <table className="medication-table">
            <thead>
              <tr>
                <th></th>
                <th><img src={SunIcon} alt="Morning" className="time-icon" /></th>
                <th><img src={AfternoonIcon} alt="Afternoon" className="time-icon" /></th>
                <th><img src={NightIcon} alt="Night" className="time-icon" /></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="drmedicine-name">Blood sugar</div>
                  <div className="label">Daily</div>
                </td>
                {['morning', 'afternoon', 'night'].map((time) => (
                  <td key={time} onClick={() => toggleCheck('bloodSugar', time)}>
                    {medicineChecks.bloodSugar[time] ? (
                      <img src={CheckIcon} alt="Check" className="check-icon" />
                    ) : (
                      <span className="empty-circle"></span>
                    )}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="diagnostic-section">
        <h3 className="section-title">
          <img src={DiagIcon} alt="diagnosticimg" className="icon-img" /> Diagnostic
        </h3>
        <div className="diagnostic-item">
          <span className="diagnostic-name">Glucose Profile</span>
          <div className="calendar-container">
            <img src={CalendarIcon} alt="Calendar" className="calendar-icon" />
          </div>
        </div>
      </section>

      <button className="home-button">Home</button>
    </div>
  );
};

export default DailyRegimen;
