// src/pages/Tracking.js
import React from 'react';
import '../styles/Tracking.css'; // Add your CSS file for styling

const Tracking = () => {
  // Mock data for shipment tracking
  const shipment = {
    id: 1,
    from: 'Addis Ababa',
    to: 'Hawassa',
    status: 'In Transit',
    timeline: [
      { step: 'Picked Up', time: '10:00 AM' },
      { step: 'In Transit', time: '12:00 PM' },
      { step: 'Out for Delivery', time: '02:00 PM' },
    ],
  };

  return (
    <div className="tracking">
      <h1>Track Your Shipment</h1>
      <div className="shipment-details">
        <h2>Shipment ID: {shipment.id}</h2>
        <p>From: {shipment.from}</p>
        <p>To: {shipment.to}</p>
        <p>Status: {shipment.status}</p>
      </div>

      {/* Timeline */}
      <div className="timeline">
        {shipment.timeline.map((step, index) => (
          <div key={index} className="timeline-step">
            <div className="timeline-circle"></div>
            <p>{step.step}</p>
            <p>{step.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tracking;