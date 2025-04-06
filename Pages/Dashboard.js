// src/pages/Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Dashboard.css'; // Add your CSS file for styling

const Dashboard = () => {
  // Mock data for recent shipments
  const shipments = [
    { id: 1, from: 'Addis Ababa', to: 'Hawassa', status: 'In Transit' },
    { id: 2, from: 'Addis Ababa', to: 'Dire Dawa', status: 'Delivered' },
  ];

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <div className="sidebar">
        <ul>
          <li><Link to="/dashboard">Home</Link></li>
          <li><Link to="/booking">Book a Shipment</Link></li>
          <li><Link to="/tracking">Track Order</Link></li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <h1>Welcome, User!</h1>
        <div className="quick-actions">
          <Link to="/booking" className="action-button">Book a Shipment</Link>
          <Link to="/tracking" className="action-button">Track Order</Link>
        </div>

        {/* Recent Shipments */}
        <h2>Recent Shipments</h2>
        <table>
          <thead>
            <tr>
              <th>Shipment ID</th>
              <th>From</th>
              <th>To</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {shipments.map((shipment) => (
              <tr key={shipment.id}>
                <td>{shipment.id}</td>
                <td>{shipment.from}</td>
                <td>{shipment.to}</td>
                <td>{shipment.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;