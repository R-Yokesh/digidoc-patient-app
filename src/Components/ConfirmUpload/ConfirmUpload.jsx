import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../../Assets/Css/ConfirmUpload.css";
import backIcon from "../../Assets/Images/Expand_left.png";

const ConfirmUpload = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Access the passed state
  const initialImages = location.state?.images ?? [];
  
  // Set local state for images
  const [images, setImages] = useState(initialImages);

  const handleDeleteClick = (index) => {
    // Create a new array without the deleted image
    const updatedImages = images.filter((_, imgIndex) => imgIndex !== index);
    setImages(updatedImages);
  };

  const handleNextClick = () => {
    navigate("/mapping");
  };

  return (
    <div className="capp-container">
      <div className="cupload-container">
        <button className="cback-button" onClick={() => navigate(-1)}>
          <img src={backIcon} alt="Back" className="cicon-image" />
        </button>

        <h2 className="cdoctor-name">Dr. Luke Leon</h2>
        <p className="cprescribed-medicines-heading">Prescribed Medicines</p>
        <ul className="cmedicine-list">
          <li>Paracetamol</li>
          <li>Metformin</li>
          <li>Amlodipine</li>
        </ul>

        <div className="cmedicine-list">
          {images.map((image, index) => (
            <div key={index} className="cmedicine-item">
              <label>Medicine {index + 1}</label>
              <div className="cmedicine-info">
                <img src={image} alt={`Medicine ${index + 1}`} className="cmedicine-image" />
                <span>Captured Image</span>
                <button className="cdelete-button" onClick={() => handleDeleteClick(index)}>×</button>
              </div>
            </div>
          ))}
        </div>

        <button className="cnext-button" onClick={handleNextClick}>Next</button>
      </div>
    </div>
  );
};

export default ConfirmUpload;
