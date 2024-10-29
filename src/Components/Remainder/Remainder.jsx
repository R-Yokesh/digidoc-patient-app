import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import './Remainder.css';
import MedicinePill from "../../Assets/Images/medicinepill.png";
import backIcon from "../../Assets/Images/Expand_left.png";
import TestResultForm from "../TestResult/TestResultForm"; // Assuming correct import path
import TestNotTaken from "../TestNotTaken/TestNotTaken"; // Assuming correct import path

const Remainder = () => {
    const navigate = useNavigate(); // Initialize navigate function
    const [showTestForm, setShowTestForm] = useState(false); // State to manage form visibility
    const [showNotTaken, setShowNotTaken] = useState(false); // State to manage NotTaken visibility
    const [currentTask, setCurrentTask] = useState(null); // Track the task for the form

    // Handle "Taken" button click
    const handleTakenClick = (taskName) => {
        setShowTestForm(true);
        setShowNotTaken(false); // Hide NotTaken if switching to Taken
        setCurrentTask(taskName); // Set the current task name
    };

    // Handle "Not Taken" button click
    const handleNotTakenClick = (taskName) => {
        setShowNotTaken(true); // Show the TestNotTaken component
        setShowTestForm(false); // Hide the TestResultForm if "Not Taken" is clicked
        setCurrentTask(taskName); // Set the current task name
    };

    return (
        <div className="reminder-container">
            <header className="reminder-header">
                <button className="back-button" onClick={() => navigate('/home')}> {/* Add onClick to navigate home */}
                    <img src={backIcon} alt="Back" className="back-icon" />
                </button>
                <h2>Reminder</h2>
            </header>

            <section className="today-plan">
                <div className="section-header">
                    <h3>08:00 AM</h3>
                </div>

                {/* Plan Card */}
                <div className="plan-card">
                    <div className="plan-details">
                        <div className="medicine">
                            <img src={MedicinePill} alt="Pill" />
                            <div>
                                <h3>Painolax</h3>
                                <p>1 Pill to take - Before Food</p>
                            </div>
                        </div>
                        <div className="responses">
                            <button className="not-taken" onClick={() => handleNotTakenClick("Painolax")}>
                                Not Taken
                            </button>
                            <button className="taken" onClick={() => handleTakenClick("Painolax")}>
                                Taken
                            </button>
                        </div>
                    </div>
                </div>

                {/* Another Plan Card Example */}
                <div className="plan-card">
                    <div className="plan-details">
                        <div className="medicine">
                            <img src={MedicinePill} alt="Pill" />
                            <div>
                                <h3>Blood Pressure Test</h3>
                                <p>Before Food</p>
                            </div>
                        </div>
                        <div className="responses">
                            <button className="not-taken" onClick={() => handleNotTakenClick("Blood Pressure Test")}>
                                Not Taken
                            </button>
                            <button className="taken" onClick={() => handleTakenClick("Blood Pressure Test")}>
                                Taken
                            </button>
                        </div>
                    </div>
                </div>

                {/* Example with the same task again */}
                <div className="plan-card">
                    <div className="plan-details">
                        <div className="medicine">
                            <img src={MedicinePill} alt="Pill" />
                            <div>
                                <h3>Painolax</h3>
                                <p>1 Pill to take - Before Food</p>
                            </div>
                        </div>
                        <div className="responses">
                            <button className="not-taken" onClick={() => handleNotTakenClick("Painolax")}>
                                Not Taken
                            </button>
                            <button className="taken" onClick={() => handleTakenClick("Painolax")}>
                                Taken
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Conditionally render the TestResultForm when showTestForm is true */}
            {showTestForm && <TestResultForm taskName={currentTask} />} {/* Pass the current task */}

            {/* Conditionally render the TestNotTaken component when showNotTaken is true */}
            {showNotTaken && <TestNotTaken taskName={currentTask} />} {/* Pass the current task */}
        </div>
    );
};

export default Remainder;
