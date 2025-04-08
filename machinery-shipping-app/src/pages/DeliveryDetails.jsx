import React, { useState } from 'react';
import './DeliveryDetails.css';
import { useNavigate } from 'react-router-dom';

const DeliveryDetails = () => {
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropOffLocation, setDropOffLocation] = useState('');
  const [deliveryDate, setDeliveryDate] = useState('');
  const [deliveryTime, setDeliveryTime] = useState('');
  const [instructions, setInstructions] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  
  const navigate = useNavigate(); // Use useNavigate for navigation

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form inputs
    if (!pickupLocation || !dropOffLocation || !deliveryDate || !deliveryTime) {
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    if (new Date(deliveryDate) < new Date()) {
      setErrorMessage('Delivery date cannot be in the past.');
      return;
    }

    if (errorMessage) {
      setErrorMessage(''); // Reset error message if all fields are valid
    }

    // Handle form submission logic
    console.log({
      pickupLocation,
      dropOffLocation,
      deliveryDate,
      deliveryTime,
      instructions,
    });

    // Redirect to the payment page after validation
    navigate('/PaymentPage');
  };

  return (
    <div className="delivery-details-container">
      <h1>Delivery Details</h1>

      {/* Display error message */}
      {errorMessage && <div className="error-message">{errorMessage}</div>}

      <form onSubmit={handleSubmit} className="delivery-form">
        <div className="form-group">
          <label htmlFor="pickupLocation">Pickup Location</label>
          <input
            type="text"
            id="pickupLocation"
            value={pickupLocation}
            onChange={(e) => setPickupLocation(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="dropOffLocation">Drop-Off Location</label>
          <input
            type="text"
            id="dropOffLocation"
            value={dropOffLocation}
            onChange={(e) => setDropOffLocation(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="deliveryDate">Preferred Delivery Date</label>
          <input
            type="date"
            id="deliveryDate"
            value={deliveryDate}
            onChange={(e) => setDeliveryDate(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="deliveryTime">Preferred Delivery Time</label>
          <input
            type="time"
            id="deliveryTime"
            value={deliveryTime}
            onChange={(e) => setDeliveryTime(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="instructions">Add Instructions (e.g., Forklift Needed)</label>
          <textarea
            id="instructions"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            rows="4"
          ></textarea>
        </div>

        <button type="submit" className="submit-btn">Place Delivery Order</button>
      </form>
    </div>
  );
};

export default DeliveryDetails;
