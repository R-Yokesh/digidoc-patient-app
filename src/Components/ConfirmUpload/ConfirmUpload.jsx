import React from "react";
import { useNavigate } from "react-router-dom";  // Import useNavigate
import "../../Assets/Css/ConfirmUpload.css";
import backIcon from "../../Assets/Images/Expand_left.png";
import Med1 from "../../Assets/Images/Med1.png";
import Med2 from "../../Assets/Images/Med2.png";
import Med3 from "../../Assets/Images/Med3.png";

const ConfirmUpload = () => {
  const navigate = useNavigate();  // Initialize the useNavigate hook

  const handleNextClick = () => {
    navigate("/mapping");  // Navigate to /mapping when button is clicked
  };

  return (
    <div className="capp-container">
      <div className="cupload-container">
        <button className="cback-button">
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
          <div className="cmedicine-item">
            <label>Medicine 1</label>
            <div className="cmedicine-info">
              <img
                src={Med1}
                alt="Medicine 1"
                className="cmedicine-image"
              />
              <span>Table.jpg</span>
              <button className="cdelete-button">×</button>
            </div>
          </div>

          <div className="cmedicine-item">
            <label>Medicine 2</label>
            <div className="cmedicine-info">
              <img
                src={Med2}
                alt="Medicine 2"
                className="cmedicine-image"
              />
              <span>Table.jpg</span>
              <button className="cdelete-button">×</button>
            </div>
          </div>

          <div className="cmedicine-item">
            <label>Medicine 3</label>
            <div className="cmedicine-info">
              <img
                src={Med3}
                alt="Medicine 3"
                className="cmedicine-image"
              />
              <span>Table.jpg</span>
              <button className="cdelete-button">×</button>
            </div>
          </div>
        </div>

        <button className="cnext-button" onClick={handleNextClick}>Next</button>
      </div>
    </div>
  );
};

export default ConfirmUpload;
