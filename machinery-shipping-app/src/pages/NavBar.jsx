import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; 

import './NavBar.css';

function NavBar() {
    return (
        <div className="container">
            <div className="brand">
            <img src={logo} alt="CHM Logo" width={120} height={100} />
                <h3>CHM-Shipment</h3>
            </div>

            
                <ul>
                    <li>Home</li>
                    <li>Search Suppliers</li>
                    <li>Order Details</li>
                </ul>
        

            <div className="signup">
                <button> <Link to="/Signup">Sign Up</Link> </button>
            </div>

        </div>
    )
}

export default NavBar;