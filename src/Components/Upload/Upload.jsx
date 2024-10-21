import React from 'react';
import '../../Assets/Css/Upload.css'; 

const Upload = () => {
  return (
    <div className='app-container'>
    <div className="upload-container">
      <button className="back-button">←</button>
      
      <h2 className="doctor-name">Dr. Luke Leon</h2>
      <h3 className="prescribed-medicines-heading">Prescribed Medicines</h3>
      <ul className="medicine-list">
        <li>Paracetamol</li>
        <li>Metformin</li>
        <li>Amlodipine</li>
      </ul>
      
      <div className="medicine-upload">
        <label>Medicine 1</label>
        <div className="upload-input">
          <span>Upload Medicine Picture</span>
          <button className="camera-button">📷</button>
        </div>
      </div>

      <div className="medicine-upload">
        <label>Medicine 2</label>
        <div className="upload-input">
          <span>Upload Medicine Picture</span>
          <button className="camera-button">📷</button>
        </div>
      </div>

      <div className="medicine-upload">
        <label>Medicine 3</label>
        <div className="upload-input">
          <span>Upload Medicine Picture</span>
          <button className="camera-button">📷</button>
        </div>
      </div>

      <button className="next-button">Next</button>
    </div>
    </div>
  );
};

export default Upload;
