import React from 'react';
import '../../Assets/Css/Upload.css'; 
import backIcon from '../../Assets/Images/Expand_left.png';
import camIcon from '../../Assets/Images/CameraIcon.png';

const Upload = () => {
  return (
    <div className='app-container'>
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
            <button className="camera-button">
              <img src={camIcon} alt="Camera" className="icon-image" /> {/* Replace text with image */}
            </button>
          </div>
        </div>

        <div className="medicine-upload">
          <label>Medicine 2</label>
          <div className="upload-input">
            <span>Upload Medicine Picture</span>
            <button className="camera-button">
              <img src={camIcon} alt="Camera" className="icon-image" /> 
            </button>
          </div>
        </div>

        <div className="medicine-upload">
          <label>Medicine 3</label>
          <div className="upload-input">
            <span>Upload Medicine Picture</span>
            <button className="camera-button">
              <img src={camIcon} alt="Camera" className="icon-image" /> 
            </button>
          </div>
        </div>

        <button className="next-button">Next</button>
      </div>
    </div>
  );
};

export default Upload;
