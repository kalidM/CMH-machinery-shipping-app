
import React from 'react';
import { useAuth } from '../contexts/AuthContext';

const OtherNav = () => {
  const { currentUser, logout } = useAuth(); // Get current user and logout function

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Error logging out: ", error);
    }
  };

  return (
    <div>
      <h2>Welcome, {currentUser?.email}</h2> {/* Display the user's email */}
      <button onClick={handleLogout}>Log out</button> {/* Logout button */}
    </div>
  );
};

export default OtherNav;
