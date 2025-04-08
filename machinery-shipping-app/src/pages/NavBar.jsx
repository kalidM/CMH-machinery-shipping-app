import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; 

import './NavBar.css';

function NavBar() {
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
        

            <div className="signup">
                <button> <Link to="/Signup">Sign Up</Link> </button>
            </div>

        </div>
    )
}

export default NavBar;