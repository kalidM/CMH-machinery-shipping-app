import React, { useState } from 'react';
import "./PaymentPage.css";

const products = [
    { id: 1, title: 'Green Tractor', desc: 'Efficient farming with the latest model.', offer: '15% off', category: 'Farming', image: '../assets/tractor.jpg', fullDescription: 'Industrial trucks used to lift and transport materials over short distances.',
      specs: 'Specs including weight, dimensions, and features.',
      price: 19500,
      gst: 1950,
      total: 21450},
    { id: 2, title: 'Red Harvester', desc: 'High capacity for large-scale farming.', offer: '10% off', category: 'Farming', image: '../assets/harvester.jpg', fullDescription: 'Industrial trucks used to lift and transport materials over short distances.',
      specs: 'Specs including weight, dimensions, and features.',
      price: 19500,
      gst: 1950,
      total: 21450 },
    { id: 3, title: 'Yellow Bulldozer', desc: 'Multi-functionality for construction needs.', offer: 'Free delivery', category: '../assets/Construction', image: 'bulldozer.jpg', fullDescription: 'Industrial trucks used to lift and transport materials over short distances.',
      specs: 'Specs including weight, dimensions, and features.',
      price: 19500,
      gst: 1950,
      total: 21450 },
    { id: 4, title: 'Cordless Drill', desc: 'High-performance drill suitable for various tasks.', offer: 'Limited offer', category: 'Tools', image: '../assets/cordless1.jpg', fullDescription: 'Industrial trucks used to lift and transport materials over short distances.',
      specs: 'Specs including weight, dimensions, and features.',
      price: 19500,
      gst: 1950,
      total: 21450 },
    { id: 5, title: 'Circular Saw', desc: 'Efficient cutting with precision and safety.', offer: 'View Offer', category: 'Tools', image: '../assets/saw.jpg', fullDescription: 'Industrial trucks used to lift and transport materials over short distances.',
      specs: 'Specs including weight, dimensions, and features.',
      price: 19500,
      gst: 1950,
      total: 21450 },
    { id: 6, title: 'Hammer Drill', desc: 'Ideal for masonry and heavy-duty applications.', offer: 'View Offer', category: 'Tools', image: '../assets/hammer.jpg', fullDescription: 'Industrial trucks used to lift and transport materials over short distances.',
      specs: 'Specs including weight, dimensions, and features.',
      price: 19500,
      gst: 1950,
      total: 21450 },
    { id: 7, title: 'Cordless Drill', desc: 'Powerful 18V drill for home and professional use.', offer: 'Shop Now', category: 'Tools', image: '../assets/cordless2.jpg', fullDescription: 'Industrial trucks used to lift and transport materials over short distances.',
      specs: 'Specs including weight, dimensions, and features.',
      price: 19500,
      gst: 1950,
      total: 21450 },
    { id: 8, title: 'Table Saw', desc: 'Precision cutting with adjustable angles.', offer: 'Buy Now', category: 'Tools', image: '../assets/table.jpg', fullDescription: 'Industrial trucks used to lift and transport materials over short distances.',
      specs: 'Specs including weight, dimensions, and features.',
      price: 19500,
      gst: 1950,
      total: 21450 },
    { id: 9, title: 'Lawn Mower', desc: 'Efficient cutting with a self-propelled design.', offer: 'Order Now', category: 'Gardening', image: '../assets/mower.jpg', fullDescription: 'Industrial trucks used to lift and transport materials over short distances.',
      specs: 'Specs including weight, dimensions, and features.',
      price: 19500,
      gst: 1950,
      total: 21450 },
  ];



const PaymentPage = () => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [amount, setAmount] = useState(100); // example amount
  const [paymentStatus, setPaymentStatus] = useState('');
  const [transactionId, setTransactionId] = useState('');

  const handlePayment = () => {
    // Simulate payment processing
    const transactionId = `TXN-${Math.floor(Math.random() * 100000)}`;
    setTransactionId(transactionId);
    setPaymentStatus('Payment Successful');
  };

  return (
    <div className="payment-container">
      <h2>Payment Page</h2>
      <div className="payment-details">
        <label>
          Payment Method:
          <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
            <option value="">Select Payment Method</option>
            <option value="telebirr">TeleBirr</option>
            <option value="cbe_birr">CBE Birr</option>
            <option value="other">Other Local Payment</option>
          </select>
        </label>
        
        <label>
          Amount: ${amount}
        </label>

        <button onClick={handlePayment}>Make Payment</button>

        {paymentStatus && (
          <div className={`status ${paymentStatus === 'Payment Successful' ? 'success' : 'error'}`}>
            {paymentStatus}
          </div>
        )}
      </div>

      {paymentStatus === 'Payment Successful' && transactionId && (
        <div className="confirmation">
          <h3>Payment Confirmation</h3>
          <p>Payment Method: {paymentMethod}</p>
          <p>Amount: ${amount}</p>
          <p>Transaction ID: {transactionId}</p>
          <p>Thank you for your order!</p>
        </div>
      )}
    </div>
  );
};

export default PaymentPage;
