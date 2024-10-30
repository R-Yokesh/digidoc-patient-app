import React, { useState } from "react";
import './TestResultForm.css'; // Import the CSS file
import MedicinePill from "../../Assets/Images/medicinepill.png";
import camIcon from '../../Assets/Images/CameraIcon.png';
import DeleteIcon from '../../Assets/Images/DeleteIcon.png';
import TestResultSuccess from '../TestResultSuccess/TestResultSuccess'; // Import success component

function TestResultForm() {
    const [file, setFile] = useState(null);
    const [result, setResult] = useState("");
    const [note, setNote] = useState("");
    const [formVisible, setFormVisible] = useState(true);
    const [isSubmitted, setIsSubmitted] = useState(false); // State for submission

    const handleResultChange = (e) => {
        setResult(e.target.value);
    };

    const handleNoteChange = (e) => {
        setNote(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate form submission and set success state
        console.log({
            file,
            result,
            note,
        });
        setIsSubmitted(true); // Set to true when form is submitted
    };

    const handleClose = () => {
        setFormVisible(false);
    };

    // Conditionally render the success message after submission
    if (isSubmitted) {
        return <TestResultSuccess />;
    }

    return formVisible ? (
        <div className="container">
            <div className="header-part">
                <h2>Test Result</h2>
                <img 
                    src={DeleteIcon} 
                    alt="close-icon" 
                    className="delete-icon"
                    onClick={handleClose}
                />
            </div>
            <form onSubmit={handleSubmit} className="form">
                <div><h3>Test</h3></div>
                <div className="plan-card">
                    <div className="plan-details">
                        <div className="medicine">
                            <img src={MedicinePill} alt="Pill" />
                            <div>
                                <h3>Blood Pressure Test</h3>
                                <p>Before Food</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="medicine-upload">
                    <div className="upload-inputs">
                        <span>Upload Test Photo</span>
                        <button className="camera-button">
                            <img src={camIcon} alt="Camera" className="icon-image" />
                        </button>
                    </div>
                    <div className="message">
                        <p className="message-font">Accepted files: pdf & jpg</p>
                        <p className="message-font">Max size: 2 MB</p>
                    </div>
                </div>

                <div className="separator">
                    <span className="line"></span>
                    <span className="or-text">or</span>
                    <span className="line"></span>
                </div>

                <div className="input-group">
                    <label className="labels">Result</label>
                    <div className="result-input-group">
                        <input
                            type="text"
                            value={result}
                            onChange={handleResultChange}
                            placeholder="000/000"
                            className="input-result"
                        />
                        <span className="result-unit">mmHg</span>
                    </div>
                </div>

                <div className="input-group">
                    <label className="labels">Note</label>
                    <textarea
                        value={note}
                        onChange={handleNoteChange}
                        placeholder="Enter your note here..."
                        className="textarea"
                    />
                </div>

                <button type="submit" className="button">
                    Save
                </button>
            </form>
        </div>
    ) : null;
}

export default TestResultForm;
