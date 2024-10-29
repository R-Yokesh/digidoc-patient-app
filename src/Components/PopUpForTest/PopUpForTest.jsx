import React, { useState } from 'react';
import TimeSet from '../TimeSet/TimeSet';
import camIcon from '../../Assets/Images/CameraIcon.png'; // Update the path to your camera icon
import './PopUpForTest.css'

const PopUpForTest = () => {
    const [result, setResult] = useState(''); // State for the result input
    const [note, setNote] = useState(''); // State for notes (if needed)

    const handleResultChange = (e) => {
        setResult(e.target.value);
    };

    const handleNoteChange = (e) => {
        setNote(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can handle form submission, e.g., sending data to an API
        console.log('Submitted Result:', result);
        console.log('Note:', note);
    };

    return (
        
        <div className="popup-container">
            <form onSubmit={handleSubmit} className="test-form">
                <div className="input-group">
                    <label className="label">Result</label>
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
                <div className="separator">
                    <span className="line"></span>
                    <span className="or-text">or</span>
                    <span className="line"></span>
                </div>

                <div className="medicine-upload">
                    <div className="upload-inputs">
                        <span>Upload Test Photo</span>
                        <button type="button" className="camera-button">
                            <img src={camIcon} alt="Camera" className="icon-image" />
                        </button>
                    </div>
                </div>
                <div class="button-container">
        <button class="centered-button">Save</button>
    </div>
            </form>
        </div>
    );
}

export default PopUpForTest;
