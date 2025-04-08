import React, { useState } from 'react';
import './Booking.css';
import { FiMapPin, FiCalendar, FiPackage } from 'react-icons/fi';

const Booking = () => {
  const [formData, setFormData] = useState({
    pickup: '',
    delivery: '',
    date: '',
    machineryType: '',
    dimensions: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking submitted:', formData);
    // Add your booking logic here
  };

  return (
    <div className="booking-page">
      <div className="booking-card">
        <h2>Book Your Shipment</h2>
        <p className="subtitle">Fill in the details below</p>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label><FiMapPin /> Pickup Location</label>
            <input
              type="text"
              value={formData.pickup}
              onChange={(e) => setFormData({...formData, pickup: e.target.value})}
              placeholder="Addis Ababa"
              required
            />
          </div>

          <div className="form-group">
            <label><FiMapPin /> Delivery Location</label>
            <input
              type="text"
              value={formData.delivery}
              onChange={(e) => setFormData({...formData, delivery: e.target.value})}
              placeholder="Hawassa"
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label><FiCalendar /> Pickup Date</label>
              <input
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({...formData, date: e.target.value})}
                required
              />
            </div>

            <div className="form-group">
              <label><FiPackage /> Machinery Type</label>
              <select
                value={formData.machineryType}
                onChange={(e) => setFormData({...formData, machineryType: e.target.value})}
                required
              >
                <option value="">Select</option>
                <option value="excavator">Excavator</option>
                <option value="bulldozer">Bulldozer</option>
                <option value="crane">Crane</option>
              </select>
            </div>
          </div>

          <button type="submit" className="submit-btn">Get Instant Quote</button>
        </form>
      </div>
    </div>
  );
};

export default Booking;