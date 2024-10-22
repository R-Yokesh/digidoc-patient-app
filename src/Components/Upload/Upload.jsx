import React, { useState } from 'react';
import '../../Assets/Css/Upload.css'; 
import backIcon from '../../Assets/Images/Expand_left.png';
import camIcon from '../../Assets/Images/CameraIcon.png';
import galleryIcon from '../../Assets/Images/galleryIcon.png'; // Gallery icon for footer
import checkIcon from '../../Assets/Images/checkIcon.png'; // Check icon for footer
import tabImg from '../../Assets/Images/TabletImg.png'

const Upload = () => {
  const [showCamera, setShowCamera] = useState(false); // State to toggle camera view

  // Function to toggle to camera view
  const handleCameraClick = () => {
    setShowCamera(true);
  };

  // Function to go back from the camera view
  const handleBackClick = () => {
    setShowCamera(false);
  };

  return (
    <div className='app-container'>
      {showCamera ? (
        <div className="camera-screen-container">
          <div className="camera-header">
            <button className="back-button" onClick={handleBackClick}>
              <img src={backIcon} alt="Back" className="icon-image" />
            </button>
            <span>Camera</span>
          </div>

          <div className="camera-image-area">
            {/* You can add a video feed or placeholder here */}
            <img src={tabImg} alt="Medicine" style={{ width: '100%' }} />
          </div>

          <div className="camera-footer">
            <img src={galleryIcon} alt="Gallery" className="footer-icon" />
            <div className="camera-capture-button">
              <span></span> {/* Placeholder for camera button */}
            </div>
            <img src={checkIcon} alt="Check" className="footer-icon" />
          </div>
        </div>
      ) : (
        <div className="upload-container">
          <button className="back-button">
            <img src={backIcon} alt="Back" className="icon-image" /> 
          </button>

          <h2 className="doctor-name">Dr. Luke Leon</h2>
          <p className="prescribed-medicines-heading">Prescribed Medicines</p>
          <ul className="medicine-list">
            <li>Paracetamol</li>
            <li>Metformin</li>
            <li>Amlodipine</li>
          </ul>
          
          <div className="medicine-upload">
            <label>Medicine 1</label>
            <div className="upload-input">
              <span>Upload Medicine Picture</span>
              <button className="camera-button" onClick={handleCameraClick}>
                <img src={camIcon} alt="Camera" className="icon-image" />
              </button>
            </div>
          </div>

          <div className="medicine-upload">
            <label>Medicine 2</label>
            <div className="upload-input">
              <span>Upload Medicine Picture</span>
              <button className="camera-button" onClick={handleCameraClick}>
                <img src={camIcon} alt="Camera" className="icon-image" />
              </button>
            </div>
          </div>

          <div className="medicine-upload">
            <label>Medicine 3</label>
            <div className="upload-input">
              <span>Upload Medicine Picture</span>
              <button className="camera-button" onClick={handleCameraClick}>
                <img src={camIcon} alt="Camera" className="icon-image" />
              </button>
            </div>
          </div>

          <button className="next-button">Next</button>
        </div>
      )}
    </div>
  );
};

export default Upload;
