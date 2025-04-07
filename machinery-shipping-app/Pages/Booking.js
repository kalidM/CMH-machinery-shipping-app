// src/pages/Booking.js
import React, { useState } from 'react';
import '../styles/Booking.css'; // Add your CSS file for styling

const Booking = () => {
  const [formData, setFormData] = useState({
    pickupLocation: '',
    deliveryLocation: '',
    machineryDetails: '',
    date: '',
    time: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    alert('Shipment booked successfully!');
  };

  return (
    <div className="booking">
      <h1>Book a Shipment</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Pickup Location:
          <input
            type="text"
            name="pickupLocation"
            value={formData.pickupLocation}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Delivery Location:
          <input
            type="text"
            name="deliveryLocation"
            value={formData.deliveryLocation}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Machinery Details:
          <textarea
            name="machineryDetails"
            value={formData.machineryDetails}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Preferred Date:
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Preferred Time:
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Get Quote</button>
      </form>
    </div>
  );
};

export default Booking;