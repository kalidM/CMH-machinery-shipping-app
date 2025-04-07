import React from 'react';
import ReactDOM from 'react-dom/client';  // Update import
import App from './App';
import './styles/global.css';
import { AuthProvider } from './contexts/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root')); // Create root
root.render(  // Use render method from the root
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
