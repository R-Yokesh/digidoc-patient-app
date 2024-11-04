import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../Assets/Css/MapMedicine.css';
import backIcon from "../../Assets/Images/Expand_left.png";
import Med1 from "../../Assets/Images/Med1.png";
import Med2 from "../../Assets/Images/Med2.png";
import Med3 from "../../Assets/Images/Med3.png";

const MapMedicine = () => {
  // Sample medicine data
  const navigate = useNavigate();
  const medicines = [
    { id: 1, name: "Medicine 1", image: Med1 },
    { id: 2, name: "Medicine 2", image: Med2 },
    { id: 3, name: "Medicine 3", image: Med3 }
  ];

  const [selectedMedicine, setSelectedMedicine] = useState(null); // For the selected item
  const [popupOpen, setPopupOpen] = useState(false); // For controlling popup visibility
  const [currentMedicineName, setCurrentMedicineName] = useState(""); // Current medicine selected in popup
  const [updatedMedicineNames, setUpdatedMedicineNames] = useState({}); // To store updated names after Save

  // Function to open the popup
  const openPopup = (medicine) => {
    setSelectedMedicine(medicine);
    setCurrentMedicineName(""); // Reset the selected name when opening popup
    setPopupOpen(true);
  };

  // Function to save selected medicine name
  const handleSave = () => {
    setUpdatedMedicineNames(prev => ({
      ...prev,
      [selectedMedicine.id]: currentMedicineName
    }));
    setPopupOpen(false);
  };
  const handleMainSave = () => {
    // Navigate to another page, for example '/confirmation'
    navigate('/daily-regimen');
  };

  return (
    <div className="hmap-medicine-container">
      <div className="header">
        <button className="back-button">
          <img src={backIcon} alt="Back" className="back-icon" />
        </button>
        <h1>Map Medicine</h1>
      </div>
      <div className="map-medicine-container">
        {/* Medicine List */}
        <div className="mmedicine-list">
          {medicines.map((medicine) => (
            <div key={medicine.id}>
              <p className="medicine-name">{medicine.name}</p>
              <div className="medicine-item">
                <img src={medicine.image} alt={medicine.name} className="medicine-image" />
                <div className="medicine-info">
                  <button className="select-button" onClick={() => openPopup(medicine)}>
                    {updatedMedicineNames[medicine.id] || "Select"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Save Button */}
        <button className="save-button" onClick={handleMainSave}>Save</button>
      </div>

      {/* Popup for selecting medicine */}
      {popupOpen && (
        <div className="popup-overlay">
          <div className="popup-content">
            <button className="close-popup" onClick={() => setPopupOpen(false)}>&times;</button>
            <h4 className='pop-heading'>{selectedMedicine?.name}</h4>
            <img src={selectedMedicine?.image} alt={selectedMedicine?.name} className="medicine-popup-image" />
            <select
              className="popup-select"
              value={currentMedicineName}
              onChange={(e) => setCurrentMedicineName(e.target.value)}
            >
              <option value="">Select</option>
              <option value="Metformin">Metformin</option>
              <option value="Paracetamol">Paracetamol</option>
              <option value="Amlodipine">Amlodipine</option>
            </select>
            <button className="popup-save-button" onClick={handleSave}>Save</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MapMedicine;
