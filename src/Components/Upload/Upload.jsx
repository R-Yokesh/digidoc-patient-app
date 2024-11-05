import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../Assets/Css/Upload.css";
import backIcon from "../../Assets/Images/Expand_left.png";
import camIcon from "../../Assets/Images/CameraIcon.png";
import galleryIcon from "../../Assets/Images/GalleryIcon.png";
import checkIcon from "../../Assets/Images/CheckIcon.png";

const Upload = () => {
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [showCamera, setShowCamera] = useState(false);
  const [currentMedicine, setCurrentMedicine] = useState(null);
  const [capturedImages, setCapturedImages] = useState({
    medicine1: null,
    medicine2: null,
    medicine3: null,
  });
  const [previewImage, setPreviewImage] = useState(null); // Preview captured image

  // Function to navigate to confirmation page
  const handleNextClick = () => {
    navigate("/confirm-upload", { state: { images: Object.values(capturedImages) } }); // Pass images in navigation state
  };

  // Function to toggle to camera view for a specific medicine
  const handleCameraClick = (medicine) => {
    setShowCamera(true);
    setCurrentMedicine(medicine);
    startCamera();
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
      videoRef.current.srcObject = null; // Stop streaming video
    }
    setShowCamera(false);
    setPreviewImage(null); // Clear preview when exiting
  };

  // Function to capture an image from the video stream
  const handleCaptureClick = () => {
    const context = canvasRef.current.getContext("2d");
    context.drawImage(
      videoRef.current,
      0,
      0,
      canvasRef.current.width,
      canvasRef.current.height
    );
    const imageDataURL = canvasRef.current.toDataURL("image/png");
    setPreviewImage(imageDataURL); // Set preview image
  };

  // Function to confirm captured image and exit camera view
  const handleConfirmClick = () => {
    setCapturedImages((prevImages) => ({
      ...prevImages,
      [currentMedicine]: previewImage,
    }));
    stopCamera();
  };

  // Function to go back from the camera view without saving
  const handleBackClick = () => {
    stopCamera();
    setCurrentMedicine(null);
  };

  // Cleanup camera on component unmount
  useEffect(() => {
    return () => {
      stopCamera(); // Ensure camera stops if the component is unmounted
    };
  }, []);

  return (
    <div className="app-container">
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
              <img
                src={previewImage}
                alt="Captured Preview"
                style={{ width: "100%" }}
              />
            ) : (
              <video ref={videoRef} autoPlay style={{ width: "100%" }}></video>
            )}
            <canvas
              ref={canvasRef}
              style={{ display: "none" }}
              width="640"
              height="480"
            ></canvas>
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
        <div className="upload-container">
          <button className="back-button" onClick={() => navigate(-1)}>
            <img src={backIcon} alt="Back" className="icon-image" />
          </button>

          <h2 className="doctor-name">Dr. Luke Leon</h2>
          <p className="prescribed-medicines-heading">Prescribed Medicines</p>
          <ul className="medicine-list">
            <li>Paracetamol</li>
            <li>Metformin</li>
            <li>Amlodipine</li>
          </ul>

          {["medicine1", "medicine2", "medicine3"].map((medicine, index) => (
            <div key={medicine} className="medicine-upload">
              <label>Medicine {index + 1}</label>
              <div className="upload-input">
                {capturedImages[medicine] ? (
                  <img
                    src={capturedImages[medicine]}
                    alt={`Captured for Medicine ${index + 1}`}
                    style={{ width: "50px", height: "50px" }}
                  />
                ) : (
                  <span>Upload Medicine Picture</span>
                )}
                <button
                  className="camera-button"
                  onClick={() => handleCameraClick(medicine)}
                >
                  <img src={camIcon} alt="Camera" className="icon-image" />
                </button>
              </div>
            </div>
          ))}

          <button className="next-button" onClick={handleNextClick}>
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Upload;
