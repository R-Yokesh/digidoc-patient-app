import React, { useState, useRef, useEffect } from "react";
import './TestResultForm.css';
import MedicinePill from "../../Assets/Images/medicinepill.png";
import camIcon from '../../Assets/Images/CameraIcon.png';
import DeleteIcon from '../../Assets/Images/DeleteIcon.png';
import TestResultSuccess from '../TestResultSuccess/TestResultSuccess';
import backIcon from '../../Assets/Images/Expand_left.png';
import galleryIcon from '../../Assets/Images/GalleryIcon.png';
import checkIcon from '../../Assets/Images/CheckIcon.png';

function TestResultForm() {
    const [files, setFiles] = useState([]); // State to hold multiple image files
    const [result, setResult] = useState("");
    const [note, setNote] = useState("");
    const [formVisible, setFormVisible] = useState(true);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [showCamera, setShowCamera] = useState(false);
    const [previewImage, setPreviewImage] = useState(null);
    const videoRef = useRef(null);
    const canvasRef = useRef(null);

    const handleResultChange = (e) => {
        setResult(e.target.value);
    };

    const handleNoteChange = (e) => {
        setNote(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({
            files,
            result,
            note,
        });
        setIsSubmitted(true);
    };

    const handleClose = () => {
        setFormVisible(false);
    };

    // Function to start the camera stream
    const startCamera = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            videoRef.current.srcObject = stream;
        } catch (error) {
            console.error("Error accessing the camera: ", error);
        }
    };

    // Function to stop the camera stream
    const stopCamera = () => {
        const stream = videoRef.current?.srcObject;
        if (stream) {
            const tracks = stream.getTracks();
            tracks.forEach((track) => track.stop());
            videoRef.current.srcObject = null;
        }
        setShowCamera(false);
        setPreviewImage(null);
    };

    // Function to capture an image from the video stream
    const handleCaptureClick = () => {
        const context = canvasRef.current.getContext("2d");
        context.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);
        const imageDataURL = canvasRef.current.toDataURL("image/png");
        setPreviewImage(imageDataURL);
    };

    const handleCameraClick = () => {
        setShowCamera(true);
        startCamera();
    };

    const handleBackClick = () => {
        stopCamera();
    };

    const handleConfirmClick = () => {
        if (previewImage) {
            setFiles((prevFiles) => [...prevFiles, previewImage]);
            stopCamera();
        }
    };

    useEffect(() => {
        return () => {
            stopCamera(); // Stop camera when component unmounts
        };
    }, []);

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
                        {previewImage ? (
                            <img src={previewImage} alt="Captured Preview" style={{ width: '100%' }} />
                        ) : (
                            <video ref={videoRef} autoPlay style={{ width: '100%' }}></video>
                        )}
                        <canvas ref={canvasRef} style={{ display: 'none' }} width="640" height="480"></canvas>
                    </div>

                    <div className="camera-footer">
                        <img src={galleryIcon} alt="Gallery" className="footer-icon" />
                        <div className="camera-capture-button" onClick={handleCaptureClick}>
                            <span></span> {/* Placeholder for camera button */}
                        </div>
                        <img
                            src={checkIcon}
                            onClick={handleConfirmClick}
                            alt="Check"
                            className="footer-icon"
                            style={{ opacity: previewImage ? 1 : 0.5 }} // Enable only if preview is available
                        />
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
                                <span>Upload Test Photos</span>
                                <button type="button" className="camera-button" onClick={handleCameraClick}>
                                    <img src={camIcon} alt="Camera" className="icon-image" />
                                </button>
                            </div>
                            <div className="uploaded-images">
                                {files.map((file, index) => (
                                    <img key={index} src={file} alt={`Captured ${index + 1}`} style={{ width: '50px', height: '50px', margin: '5px' }} />
                                ))}
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
