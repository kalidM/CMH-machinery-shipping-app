import './ErrorAlert.css';

export const ErrorAlert = ({ message }) => (
  <div className="error-alert" role="alert">
    <span>⚠️</span>
    <p>{message || 'Operation failed. Please try again.'}</p>
  </div>
);