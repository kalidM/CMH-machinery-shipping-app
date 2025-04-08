import React from 'react';
import { Link, useParams } from 'react-router-dom';

import './ProductDetail.css';
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


const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) return <p>Product not found.</p>;

  return (
    <div className="product-detail-container">
      <div className="product-card">
        <img src={product.image} alt={product.name} className="product-image" />
        <h2>{product.name}</h2>
        <p className="description">{product.fullDescription}</p>
        <div className="spec-box">{product.specs}</div>
        <p><strong>Price:</strong> ${product.price}</p>
        <p><strong>GST:</strong> ${product.gst}</p>
        <p><strong>Total:</strong> ${product.total}</p>
        <label><input type="checkbox" defaultChecked /> Pick Up</label>
        <button className="order-btn"><Link to="/DeliveryDetail">Place Order</Link></button>
      </div>
    </div>
  );
};

export default ProductDetail;
