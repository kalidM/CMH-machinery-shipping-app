import React from 'react';
import './SearchResults.css';

const suppliers = [
  {
    name: 'Tech Supply',
    description: 'Specializes in electronics',
    location: 'San Jose, CA',
    image: '/images/tech.jpg',
  },
  {
    name: 'Fashion Hub',
    description: 'Apparel and textiles',
    location: 'New York, NY',
    image: '/images/fashion.jpg',
  },
  {
    name: 'Machinery Co.',
    description: 'Heavy machinery experts',
    location: 'Houston, TX',
    image: '/images/machinery.jpg',
  },
  {
    name: 'Green Farms',
    description: 'Organic food products',
    location: 'Portland, OR',
    image: '/images/farm.jpg',
  },
  {
    name: 'Gadget World',
    description: 'Gadgets and accessories',
    location: 'Los Angeles, CA',
    image: '/images/gadgets.jpg',
  },
  {
    name: 'Home Styles',
    description: 'Home decor and furniture',
    location: 'Miami, FL',
    image: '/images/home.jpg',
  },
];

const SearchResults = () => {
  return (
    <div className="results-container">
      <h2>Search Results</h2>
      <div className="results-grid">
        {suppliers.map((supplier, idx) => (
          <div key={idx} className="supplier-card">
            <div className="supplier-info">
              <h4>{supplier.name}</h4>
              <p>{supplier.description}</p>
              <p><small>Located in {supplier.location}</small></p>
              <button className="contact-btn">Contact Supplier</button>
            </div>
            <img src={supplier.image} alt={supplier.name} className="supplier-img" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
