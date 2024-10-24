import React, { useState } from 'react';
import './HomePage.css';
import MedicinePill from "../../Assets/Images/medicinepill.png";
import BloodSugar from "../../Assets/Images/BloodSugar.png";
import Diagnostics from "../../Assets/Images/diagnostics.png";
import Clock from "../../Assets/Images/clock (2).png";
import Clock1 from "../../Assets/Images/clock (2) (1).png";
import Doctor from "../../Assets/Images/Doctor.png";
import FemDector from "../../Assets/Images/FemDoctor.png";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';

const HomePage = () => {
    // State for icon clicks
    const [medicineChecked, setMedicineChecked] = useState([false, false]);
    const [routineChecked, setRoutineChecked] = useState([false, false]);

    // Toggle function for medicine
    const toggleMedicineCheck = (index) => {
        const updatedChecks = [...medicineChecked];
        updatedChecks[index] = !updatedChecks[index];
        setMedicineChecked(updatedChecks);
    };

    // Toggle function for missed routine
    const toggleRoutineCheck = (index) => {
        const updatedChecks = [...routineChecked];
        updatedChecks[index] = !updatedChecks[index];
        setRoutineChecked(updatedChecks);
    };

    return (
        <div className="dashboard-container">
            <Header />

            {/* Greeting */}
            <section className="greeting">
                <h3>Good Morning, 👋</h3>
            </section>

            {/* Today's Plan */}
            <section className="today-plan">
                <div className="section-header">
                    <h3>Today's Plan</h3>
                    <a href="#see-all" className="see-all">See All</a>
                </div>
                <div className="plan-card">
                    <div className="time">
                        <img src={Clock} alt="Clock Icon" className="time-icon" />
                        12:00 PM
                    </div>
                    <div className="plan-details">
                        <div className="medicine">
                            <img src={MedicinePill} alt="Pill" />
                            <div>
                                <h3>Painolax</h3>
                                <p>1 Tablet | Before food</p>
                            </div>
                            <div className="icon-end" onClick={() => toggleMedicineCheck(0)}>
                                <FontAwesomeIcon
                                    icon={faCircleCheck}
                                    className={medicineChecked[0] ? 'green' : 'black'}
                                />
                            </div>
                        </div>
                        <div className="test">
                            <img src={BloodSugar} alt="Blood Sugar" />
                            <div>
                                <h3>Blood sugar</h3>
                                <p>1 Time | After food</p>
                            </div>
                            <div className="icon-end" onClick={() => toggleMedicineCheck(1)}>
                                <FontAwesomeIcon
                                    icon={faCircleCheck}
                                    className={medicineChecked[1] ? 'green' : 'black'}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Missed Routine */}
            <section className="missed-routine">
                <h3>Missed Routine</h3>
                <div className="plan-card">
                    <div className="time">
                        <img src={Clock1} alt="Clock Icon" className="time-icon" />
                        08:00 AM
                    </div>
                    <div className="plan-details">
                        <div className="medicine">
                            <img src={MedicinePill} alt="Pill" />
                            <div>
                                <h3>Painolax</h3>
                                <p>1 Tablet | Before food</p>
                            </div>
                            <div className="icon-end" onClick={() => toggleRoutineCheck(0)}>
                                <FontAwesomeIcon
                                    icon={faCircleCheck}
                                    className={routineChecked[0] ? 'green' : 'black'}
                                />
                            </div>
                        </div>
                        <div className="medicine">
                            <img src={MedicinePill} alt="Pill" />
                            <div>
                                <h3>Painolax</h3>
                                <p>1 Tablet | Before food</p>
                            </div>
                            <div className="icon-end" onClick={() => toggleRoutineCheck(1)}>
                                <FontAwesomeIcon
                                    icon={faCircleCheck}
                                    className={routineChecked[1] ? 'green' : 'black'}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Diagnostics */}
            <section className="diagnostic-section">
                <h3 className="section-title">Diagnostics</h3>
                <div className="diagnostic-card">
                    <div className="diagnostic-left">
                        <img src={Diagnostics} alt="Diagnostic Icon" className="diagnostic-icon" />
                    </div>
                    <div className="diagnostic-right">
                        <div className="diagnostic-header">
                            <span className="diagnostic-title">CBC Test</span>
                            <span className="diagnostic-date">20-07-2024</span>
                        </div>
                        <p>Have you taken the test?</p>
                        <div className="response">
                            <button className="no">NO</button>
                            <button className="yes">YES</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Appointments */}
            <section className="appointment-section">
                <h3 className="section-title">Appointment</h3>

                <div className="doctor-card">
                    <div className="doctor-card-left">
                        <img src={Doctor} alt="Doctor" />
                    </div>
                    <div className="doctor-card-right">
                        <h3>Dr. Luke Leon</h3>
                        <p>Next Follow up</p>
                        <span className="follow-up-date">31-08-2024</span>
                        <p>Last Appointment</p>
                        <span className="last-appointment-date">05-07-2024</span>
                        <button className="appointment-button">Request Appointment</button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default HomePage;
