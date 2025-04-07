import PropTypes from 'prop-types';
import './ShipmentCard.css';

export const ShipmentCard = ({ shipment }) => (
  <div className={`shipment-card ${shipment.status}`}>
    <h3>Shipment #{shipment.id.slice(0, 8)}</h3>
    <p>From: {shipment.pickup}</p>
    <p>To: {shipment.delivery}</p>
    <span className="status-badge">{shipment.status}</span>
  </div>
);

ShipmentCard.propTypes = {
  shipment: PropTypes.shape({
    id: PropTypes.string.isRequired,
    pickup: PropTypes.string.isRequired,
    delivery: PropTypes.string.isRequired,
    status: PropTypes.oneOf(['pending', 'in_transit', 'delivered'])
  }).isRequired
};