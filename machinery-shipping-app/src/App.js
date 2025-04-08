import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Booking from './pages/Booking';
import './App.css';
import Dashboard from './pages/Dashbord';
import NavBar from './pages/NavBar';
import Signup from './pages/Signup'
import SearchResults from './pages/SearchResults';
import ProductDetail from './pages/ProductDetail';
import DeliveryDetails from './pages/DeliveryDetails';
import PaymentPage from './pages/PaymentPage';
import OrderTracking from './pages/OrderTracking';

function App() {
  return (
    <Router>
     
<NavBar />
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/searchresult" element={<SearchResults />} />
        <Route path="/product/:id" element={<ProductDetail  />} />
        <Route path="/DeliveryDetail" element={<DeliveryDetails />} />
        <Route path="/PaymentPage" element={<PaymentPage />} />
        <Route path="/OrderTracking" element={<OrderTracking />} />

      </Routes>
    </Router>
  );
}

export default App;