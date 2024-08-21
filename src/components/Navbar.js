import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
    const navigate = useNavigate();
  
    const handleLogout = () => {
      
      navigate('/login');
    };
  
    return (
        <nav className="navbar">
        <div className="navbar-logo">
            <h1>LUXURY FOODS</h1>
        </div>
        <div className="navbar-logout">
            <button onClick={handleLogout}>Logout</button>
        </div>
    </nav>
    );
  }
  export default Navbar;











// const Navbar = ({ onLogout }) => {
//     return (
//         <nav className="navbar">
//             <div className="navbar-logo">
//                 <h1>LUXUARY FOODS</h1>
//             </div>
//             <div className="navbar-logout">
//                 <button onClick={onLogout}>Logout</button>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;
