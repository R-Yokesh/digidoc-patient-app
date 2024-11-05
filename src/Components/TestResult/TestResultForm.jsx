import React, { useState } from "react";
import './TestResultForm.css';
import MedicinePill from "../../Assets/Images/medicinepill.png";
import camIcon from '../../Assets/Images/CameraIcon.png';
import DeleteIcon from '../../Assets/Images/DeleteIcon.png';
import TestResultSuccess from '../TestResultSuccess/TestResultSuccess';
import backIcon from '../../Assets/Images/Expand_left.png';
import galleryIcon from '../../Assets/Images/GalleryIcon.png';
import tabImg from '../../Assets/Images/TabletImg.png'
import checkIcon from '../../Assets/Images/CheckIcon.png';

function TestResultForm() {
    const [file, setFile] = useState(null);
    const [result, setResult] = useState("");
    const [note, setNote] = useState("");
    const [formVisible, setFormVisible] = useState(true);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [showCamera, setShowCamera] = useState(false); // State for camera view

    const handleResultChange = (e) => {
        setResult(e.target.value);
    };

    const handleNoteChange = (e) => {
        setNote(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({
            file,
            result,
            note,
        });
        setIsSubmitted(true);
    };

    const handleClose = () => {
        setFormVisible(false);
    };

    const handleCameraClick = () => {
        setShowCamera(true); // Show camera view
    };

    const handleBackClick = () => {
        setShowCamera(false); // Go back to form
    };

    const handleNextClick = () => {
        // Handle logic when the check icon is clicked (e.g., save photo)
        setShowCamera(false);
    };

    if (isSubmitted) {
        return <TestResultSuccess />;
    }

    return formVisible ? (
        <div className="container">
            {showCamera ? (
                <div className="camera-screen-container">
                    <div className="camera-header">
                        <button className="back-button" onClick={handleBackClick}>
                            <img src={backIcon} alt="Back" className="icon-image" />
                        </button>
                        <span>Camera</span>
                    </div>

                    <div className="camera-image-area">
                        {/* You can replace this image with a live video feed */}
                        <img src={tabImg} alt="Medicine" style={{ width: '100%' }} />
                    </div>

                    <div className="camera-footer">
                        <img src={galleryIcon} alt="Gallery" className="footer-icon" />
                        <div className="camera-capture-button">
                            <span></span> {/* Placeholder for camera button */}
                        </div>
                        <img src={checkIcon} onClick={handleNextClick} alt="Check" className="footer-icon" />
                    </div>
                </div>
            ) : (
                <div>
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
                                <button type="button" className="camera-button" onClick={handleCameraClick}>
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
            )}
        </div>
    ) : null;
}

export default TestResultForm;
