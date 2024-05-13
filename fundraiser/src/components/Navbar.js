// // Navbar.js
// import React from "react";
// import { NavLink } from "react-router-dom";

// function Navbar() {

//     return (
//         <div className="Nav-Container">
//             <div>
//                 <h3>MAZINGIRA</h3>
//             </div>
//             <div>
//                 <ul className="hover-links">
//                     <NavLink className='hover' to="/">Home</NavLink>
//                     <NavLink className='hover' to="/About">About</NavLink>
//                     <NavLink className='hover' to="/Contact">Contact</NavLink>
//                     <NavLink className='hover' to="/AuthForm">AuthForm</NavLink> {/* Changed "Sign up" to "Signup" to match the route */}
//                 </ul>
//             </div>
//         </div>
//     );
// }

// export default Navbar;

import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <div className="Nav-Container">
            <div>
                <h3>MAZINGIRA</h3>
            </div>
            <div>
                <ul className="hover-links">
                    <li><NavLink className='hover' to="/" exact>Home</NavLink></li>
                    <li><NavLink className='hover' to="/about">About</NavLink></li>
                    <li><NavLink className='hover' to="/contact">Contact</NavLink></li>
                    <li><NavLink className='hover' to="/authForm">AuthForm</NavLink></li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
