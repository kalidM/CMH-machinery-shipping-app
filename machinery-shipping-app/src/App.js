import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Booking from './pages/Booking';
import './App.css';
import Dashboard from './pages/Dashbord';
import NavBar from './pages/NavBar';
import Signup from './pages/Signup'

function App() {
  return (
    <Router>
     
<NavBar />
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;