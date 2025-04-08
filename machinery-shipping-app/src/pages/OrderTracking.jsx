import React, { useState, useEffect } from 'react';
import './OrderTracking.css';

const OrderTracking = () => {
  const [status, setStatus] = useState('Order Placed');
  const [isCancelled, setIsCancelled] = useState(false);
  const [driver, setDriver] = useState({
    name: 'Abebe Kebede',
    phone: '+251912345678',
    vehicle: 'Isuzu Truck - Plate: ET1234',
  });

  // Simulate status updates
  useEffect(() => {
    if (isCancelled) return;

    const statusFlow = [
      'Order Placed',
      'Package Picked Up',
      'In Transit',
      'Near Destination',
      'Delivered',
    ];

    let index = 0;
    const interval = setInterval(() => {
      if (index < statusFlow.length - 1) {
        index++;
        setStatus(statusFlow[index]);
      } else {
        clearInterval(interval);
      }
    }, 5000); // simulate 5s per step

    return () => clearInterval(interval);
  }, [isCancelled]);

  const handleCancel = () => {
    if (status === 'Delivered') return;
    setIsCancelled(true);
    setStatus('Cancelled by User');
  };

  return (
    <div className="tracking-container">
      <h1>Order Tracking</h1>

      <div className="status-box">
        <h3>Status: <span className={`status ${status.toLowerCase().replace(/\s/g, '-')}`}>{status}</span></h3>
        {!isCancelled && status !== 'Delivered' && (
          <button className="cancel-btn" onClick={handleCancel}>Cancel Delivery</button>
        )}
      </div>

      {!isCancelled && (
        <div className="driver-info">
          <h3>Assigned Driver</h3>
          <p><strong>Name:</strong> {driver.name}</p>
          <p><strong>Phone:</strong> <a href={`tel:${driver.phone}`}>{driver.phone}</a></p>
          <p><strong>Vehicle:</strong> {driver.vehicle}</p>
        </div>
      )}
    </div>
  );
};

export default OrderTracking;
