// Updated React Component
import React, { useState } from 'react';
import './Feature2.css';

const Feature2 = () => {
  const [verificationStatus, setVerificationStatus] = useState(null);
  const [validityOptionsVisible, setValidityOptionsVisible] = useState(false);
  const [correctnessOptionsVisible, setCorrectnessOptionsVisible] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Perform document verification logic here
    setVerificationStatus("Verification Pending");

    // Assuming an asynchronous operation (e.g., API call) for verification
    try {
      // Simulate an asynchronous operation (replace with actual logic)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Update status after verification completes
      setVerificationStatus("Verification Complete");
    } catch (error) {
      // Handle verification error
      setVerificationStatus("Verification Failed");
    }
  };

  const handleValidityLabelClick = () => {
    setValidityOptionsVisible(true);
    setCorrectnessOptionsVisible(false);
  };

  const handleCorrectnessLabelClick = () => {
    setCorrectnessOptionsVisible(true);
    setValidityOptionsVisible(false);
  };

  return (
    <div className="verification-container my-unique-container">
      <h1 className="my-unique-h1"> UNLOCK TRUST </h1>
      <br /><br />
      <div>
        <h3 className="my-unique-h3">Your very own destination where authenticity meets assurance and precision!</h3>
      </div>
      <br /><br />

      <form id="verificationForm" onSubmit={handleFormSubmit}>
        <input type="file" id="documentUpload" name="document" accept=".pdf, .jpg, .png" className="my-unique-file-input" />
        <label htmlFor="documentUpload" className="my-unique-label">Choose Document</label>
        <br /><br />

        <label id="validityLabel" onClick={handleValidityLabelClick} className="my-unique-label">Check Validity</label>
        <br /><br />

        <label id="correctnessLabel" onClick={handleCorrectnessLabelClick} className="my-unique-label">Check Correctness</label>
        <br /><br />

        <div id="validityOptions" style={{ display: validityOptionsVisible ? 'block' : 'none' }} className="my-unique-options">
          <label id="valid" className="my-unique-label">Valid</label>
          <label id="invalid" className="my-unique-label">Invalid</label>
        </div>

        <div id="correctnessOptions" style={{ display: correctnessOptionsVisible ? 'block' : 'none' }} className="my-unique-options">
          <label id="verified" className="my-unique-label">Verified and Secure</label>
          <label id="forged" className="my-unique-label">Forged</label>
        </div>
        <br />

        <input type="submit" value="VERIFY" className="my-unique-submit-button" />
      </form>

      <div className="status my-unique-status" id="verificationStatus" style={{ display: verificationStatus ? 'block' : 'none' }}>
        {verificationStatus}
      </div>
    </div>
  );
};

export default Feature2;
