import React from 'react';
import './ProductDetail.css';
import forkliftImg from '..\assets\set-car-parts-isolated-on-600nw-1139193245.jpg'; 

const ProductDetail = () => {
  return (
    <div className="product-detail-container">
      <div className="product-card">
        <img src={forkliftImg} alt="Caterpillar GP25N Diesel Forklift" className="product-image" />

        <h2>Caterpillar GP25N Diesel <br /><span>Forklift</span></h2>
        <p className="description">
          Industrial trucks used to lift and transport materials over short distances. 
          They are essential for warehouse operations and heavy lifting tasks.
        </p>

        <h4>Specifications</h4>
        <div className="spec-box">
          <p><strong>Product image</strong></p>
          <p>Detailed specifications including dimensions, weight, and functionality of the machinery or tool.</p>
        </div>

        <div className="offer-info">
          <p><strong>Offered by:</strong> Craig Mitchell</p>
          <p className="note">Add a note to Craig Mitchell</p>
        </div>

        <div className="price-section">
          <p><strong>Price:</strong> $19,500.00 (Excl. GST)</p>
          <p>GST: $1,950.00</p>
          <p><strong>Total:</strong> $21,450.00</p>
        </div>

        <div className="delivery-section">
          <p><strong>Delivery</strong></p>
          <p>Delivery options for this product</p>
          <label>
            <input type="checkbox" defaultChecked />
            Pick Up
          </label>
        </div>

        <button className="order-btn">Place Order</button>
      </div>
    </div>
  );
};

export default ProductDetail;
