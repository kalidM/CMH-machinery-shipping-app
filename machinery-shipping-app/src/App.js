import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext'; // Assuming you have the AuthContext
import Home from './pages/Home';

import './App.css';
import Dashboard from './pages/Dashbord';
import NavBar from './pages/NavBar';
import Signup from './pages/Signup';
import SearchResults from './pages/SearchResults';
import ProductDetail from './pages/ProductDetail';
import DeliveryDetails from './pages/DeliveryDetails';
import PaymentPage from './pages/PaymentPage';
import OrderTracking from './pages/OrderTracking';
import Login from './pages/Login';


// PrivateRoute component to protect dashboard route
function PrivateRoute({ element }) {
  const { currentUser } = useAuth(); // Get user from context
  return currentUser ? element : <Navigate to="/login" />; // Redirect to login if not authenticated
}

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/searchresult" element={<SearchResults />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/DeliveryDetail" element={<DeliveryDetails />} />
        <Route path="/PaymentPage" element={<PaymentPage />} />
        <Route path="/OrderTracking" element={<OrderTracking />} />
        
        {/* Public Routes */}
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        
        {/* Private Route - Only accessible if the user is authenticated */}
        <Route path="/Dashboard" element={<PrivateRoute element={<Dashboard />} />} />
      </Routes>
    </Router>
  );
}

export default App;
