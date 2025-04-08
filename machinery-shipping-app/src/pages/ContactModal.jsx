import React, { useState } from 'react';
import './ContactModal.css';

const ContactModal = ({ supplier, isOpen, closeModal }) => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    // Logic to handle sending the message, e.g., via API
    console.log(`Message sent to ${supplier.name}: ${message}`);
    closeModal(); // Close the modal after sending
  };

  return (
    isOpen && (
      <div className="modal-overlay">
        <div className="modal-content">
          <h3>Contact {supplier.name}</h3>
          <textarea
            placeholder="Write your message here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="4"
          />
          <div className="modal-actions">
            <button onClick={closeModal} className="cancel-btn">Cancel</button>
            <button onClick={handleSend} className="send-btn">Send Message</button>
          </div>
        </div>
      </div>
    )
  );
};

export default ContactModal;
