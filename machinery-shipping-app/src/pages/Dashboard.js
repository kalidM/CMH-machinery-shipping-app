import { useState, useEffect } from 'react';
import { getShipments } from '../services/shipmentService';
import ShipmentCard from '../components/Shipment/ShipmentCard';
import './Dashboard.css';

export default function Dashboard() {
  const [shipments, setShipments] = useState([]);

  useEffect(() => {
    const loadShipments = async () => {
      const data = await getShipments();
      setShipments(data);
    };
    loadShipments();
  }, []);

  return (
    <div className="dashboard">
      <h1>Your Shipments</h1>
      <div className="shipments-grid">
        {shipments.map(shipment => (
          <ShipmentCard key={shipment.id} shipment={shipment} />
        ))}
      </div>
    </div>
  );
}