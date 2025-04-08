import React, { useState } from 'react';
import './SearchResults.css';
import ContactModal from './ContactModal';

const suppliers = [
  {
    name: 'Tech Supply',
    description: 'Specializes in electronics',
    location: 'San Jose, CA',
    image: './assets/customer1.jpg',
  },
  {
    name: 'Fashion Hub',
    description: 'Apparel and textiles',
    location: 'New York, NY',
    image: './assets/images.jpg',
  },
  {
    name: 'Machinery Co.',
    description: 'Heavy machinery experts',
    location: 'Houston, TX',
    image: './assets/pexels-rdne-7362960.jpg',
  },
  {
    name: 'Green Farms',
    description: 'Organic food products',
    location: 'Portland, OR',
    image: './assets/depositphotos_48303739-stock-photo-plumber-or-electrician.jpg',
  },
  {
    name: 'Gadget World',
    description: 'Gadgets and accessories',
    location: 'Los Angeles, CA',
    image: './assets/depositphotos_180463048-stock-photo-smiling-repairman-toolbox-cable-standing.jpg',
  },
  {
    name: 'Home Styles',
    description: 'Home decor and furniture',
    location: 'Miami, FL',
    image: './assets/depositphotos_48303739-stock-photo-plumber-or-electrician.jpg',
  },
];

const SearchResults = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSupplier, setSelectedSupplier] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const openModal = (supplier) => {
    setSelectedSupplier(supplier);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedSupplier(null);
    setIsModalOpen(false);
  };

  // Filter suppliers based on search term
  const filteredSuppliers = suppliers.filter((supplier) =>
    supplier.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    supplier.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="results-container">
      <div className="search-bar-container">
        <input
          type="text"
          placeholder="Search Suppliers..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-bar"
        />
        <button className="search-btn">Search</button>
      </div>
      <h2>Search Results</h2>
      <div className="results-grid">
        {filteredSuppliers.length > 0 ? (
          filteredSuppliers.map((supplier, idx) => (
            <div key={idx} className="supplier-card">
              <div className="supplier-info">
                <h4>{supplier.name}</h4>
                <p>{supplier.description}</p>
                <p><small>Located in {supplier.location}</small></p>
                <button className="contact-btn" onClick={() => openModal(supplier)}>Contact Supplier</button>
              </div>
              <img src={supplier.image} alt={supplier.name} className="supplier-img" />
            </div>
          ))
        ) : (
          <p>No suppliers found.</p>
        )}
      </div>

      <ContactModal supplier={selectedSupplier} isOpen={isModalOpen} closeModal={closeModal} />
    </div>
  );
};

export default SearchResults;
