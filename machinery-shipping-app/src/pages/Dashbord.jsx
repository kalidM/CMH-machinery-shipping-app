import React, { useState } from 'react';
import './Dashboard.css';
import { Link } from 'react-router-dom';

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
  { id: 3, title: 'Yellow Bulldozer', desc: 'Multi-functionality for construction needs.', offer: 'Free delivery', category: 'Construction', image: '../assets/bulldozer.jpg', fullDescription: 'Industrial trucks used to lift and transport materials over short distances.',
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

const categories = ['Farming', 'Construction', 'Tools', 'Gardening'];

export default function Dashboard() {
  const [showCategories, setShowCategories] = useState(true);
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? products
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <h2>Categories</h2>
        <button className="toggle" onClick={() => setShowCategories(!showCategories)}>
          {showCategories ? 'Hide ▲' : 'Show ▼'}
        </button>
        {showCategories && (
          <ul>
            <li className={activeCategory === 'All' ? 'active' : ''} onClick={() => setActiveCategory('All')}>All</li>
            {categories.map(cat => (
              <li key={cat} className={activeCategory === cat ? 'active' : ''} onClick={() => setActiveCategory(cat)}>
                {cat}
              </li>
            ))}
          </ul>
        )}
      </aside>

      <main className="content">
  <h1>Dashboard</h1>
  <div className="product-grid">
    {filtered.map(product => (  
      <div key={product.id} className="product-card">
        <img src={product.image} alt={product.title} />
        <h4>{product.title}</h4>
        <p>{product.desc}</p>
        <Link to={`/product/${product.id}`} className="view-button">View Details</Link>
      </div>
    ))}
  </div>
</main>
    </div>
  );
}
