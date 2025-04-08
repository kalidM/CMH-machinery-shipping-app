import React, { useState } from 'react';
import './Dashboard.css';

const products = [
  { title: 'Green Tractor', desc: 'Efficient farming with the latest model.', offer: '15% off', category: 'Farming', image: 'tractor.jpg' },
  { title: 'Red Harvester', desc: 'High capacity for large-scale farming.', offer: '10% off', category: 'Farming', image: 'harvester.jpg' },
  { title: 'Yellow Bulldozer', desc: 'Multi-functionality for construction needs.', offer: 'Free delivery', category: 'Construction', image: 'bulldozer.jpg' },
  { title: 'Cordless Drill', desc: 'High-performance drill suitable for various tasks.', offer: 'Limited offer', category: 'Tools', image: 'cordless1.jpg' },
  { title: 'Circular Saw', desc: 'Efficient cutting with precision and safety.', offer: 'View Offer', category: 'Tools', image: 'saw.jpg' },
  { title: 'Hammer Drill', desc: 'Ideal for masonry and heavy-duty applications.', offer: 'View Offer', category: 'Tools', image: 'hammer.jpg' },
  { title: 'Cordless Drill', desc: 'Powerful 18V drill for home and professional use.', offer: 'Shop Now', category: 'Tools', image: 'cordless2.jpg' },
  { title: 'Table Saw', desc: 'Precision cutting with adjustable angles.', offer: 'Buy Now', category: 'Tools', image: 'table.jpg' },
  { title: 'Lawn Mower', desc: 'Efficient cutting with a self-propelled design.', offer: 'Order Now', category: 'Gardening', image: 'mower.jpg' },
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
        <div className="grid">
          {filtered.map((item, index) => (
            <div className="card" key={index}>
              <img src={`../assets/${item.image}`} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <span className="offer">{item.offer}</span>
              <button>{item.offer.includes('Now') ? item.offer : 'View Details'}</button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
