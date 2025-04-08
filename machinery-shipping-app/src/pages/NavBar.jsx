// NavBar.js

import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; 
import { useAuth } from '../contexts/AuthContext'; // Importing the AuthContext
import './NavBar.css';

function NavBar() {
  const { currentUser, logout } = useAuth(); // Get current user and logout function from context

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Error logging out: ", error);
    }
  };

  return (
    <div className="container">
      <div className="brand">
        <img src={logo} alt="CHM Logo" width={120} height={70} />
        <h3>CHM-Shipment</h3>
      </div>

      <ul>
        <li> <Link to="/home">Home</Link></li>
        <li> <Link to="/searchresult">Search Suppliers</Link></li>
        <li> <Link to="/OrderTracking">Order Details</Link></li>
      </ul>

      <div className="auth-links">
        {currentUser ? (
          <>
            <span>Welcome, {currentUser.email}</span> {/* Display current user's email */}
            <button onClick={handleLogout}>Log out</button> {/* Log out button */}
          </>
        ) : (
          <button> <Link to="/signup">Sign Up</Link> </button> // Show Sign Up if user is not logged in
        )}
      </div>
    </div>
  );
}

export default NavBar;
