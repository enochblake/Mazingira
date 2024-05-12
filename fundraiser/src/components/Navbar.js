// // // // // // import React from "react";
// // // // // // import { NavLink } from "react-router-dom";
// // // // // // // import { FaBars, FaTimes } from "react-icons/fa";
// // // // // // import { useRef } from "react";
// // // // // // // import '../Components/Navbar.css';
// // // // // // import { hover } from "@testing-library/user-event/dist/hover";
// // // // // // import { RiMailLine, RiPhoneLine, RiGlobeLine, RiFacebookLine, RiTwitterLine, RiInstagramLine, RiLinkedinLine, RiDownloadLine, RiAlertLine } from 'react-icons/ri';


// // // // // // function Navbar(){

// // // // // //     const navRef = useRef();

// // // // // //     const showNavbar = () => {
// // // // // //         navRef.current.classList.toggle("responsive_nav");
// // // // // //     }
// // // // // //     return(
// // // // // //         <div className="Nav-Container">
// // // // // //             <div>
// // // // // //             <h3>MAZINGIRA</h3>
// // // // // //             </div>
// // // // // //             <div>
// // // // // //             <ul ref={navRef} className="hover-links">
// // // // // //                 <NavLink className='hover' to="/">Home</NavLink>
// // // // // //                 <NavLink className='hover' to="/About">About</NavLink>
// // // // // //                 <NavLink className='hover' to="/Contacts">Contacts</NavLink>
// // // // // //                 <NavLink className='hover' to="/Sign up">Sign up</NavLink>
// // // // // //                 <button className='nav-btn nav-close-btn' onClick={showNavbar}>
// // // // // //                     <FaTimes/>
// // // // // //                 </button>
// // // // // //             </ul>
// // // // // //             <button className='nav-btn' onClick={showNavbar}>
// // // // // //                 <FaBars/>
// // // // // //             </button>
// // // // // //             </div>
// // // // // //         </div>
// // // // // //     );
// // // // // // }

// // // // // // export default Navbar;

// // // // // import React from "react";
// // // // // import { NavLink } from "react-router-dom";
// // // // // import { RiBarsLine, RiTimesLine } from "react-icons/ri";
// // // // // import { useRef } from "react";
// // // // // // import '../Components/Navbar.css';

// // // // // function Navbar(){

// // // // //     const navRef = useRef();

// // // // //     const showNavbar = () => {
// // // // //         navRef.current.classList.toggle("responsive_nav");
// // // // //     }
// // // // //     return(
// // // // //         <div className="Nav-Container">
// // // // //             <div>
// // // // //             <h3>MAZINGIRA</h3>
// // // // //             </div>
// // // // //             <div>
// // // // //             <ul ref={navRef} className="hover-links">
// // // // //                 <NavLink className='hover' to="/">Home</NavLink>
// // // // //                 <NavLink className='hover' to="/About">About</NavLink>
// // // // //                 <NavLink className='hover' to="/Contacts">Contacts</NavLink>
// // // // //                 <NavLink className='hover' to="/Sign up">Sign up</NavLink>
// // // // //                 <button className='nav-btn nav-close-btn' onClick={showNavbar}>
// // // // //                     <RiTimesLine/>
// // // // //                 </button>
// // // // //             </ul>
// // // // //             <button className='nav-btn' onClick={showNavbar}>
// // // // //                 <RiBarsLine/>
// // // // //             </button>
// // // // //             </div>
// // // // //         </div>
// // // // //     );
// // // // // }

// // // // // export default Navbar;

// // // // import React from "react";
// // // // import { NavLink } from "react-router-dom";
// // // // import { RiBarsLine, RiTimesLine } from "react-icons/ri"; // Import icons from the RemixIcon library
// // // // import { useRef } from "react";
// // // // import '../Components/Navbar.css';

// // // // function Navbar(){

// // // //     const navRef = useRef();

// // // //     const showNavbar = () => {
// // // //         navRef.current.classList.toggle("responsive_nav");
// // // //     }
// // // //     return(
// // // //         <div className="Nav-Container">
// // // //             <div>
// // // //             <h3>MAZINGIRA</h3>
// // // //             </div>
// // // //             <div>
// // // //             <ul ref={navRef} className="hover-links">
// // // //                 <NavLink className='hover' to="/">Home</NavLink>
// // // //                 <NavLink className='hover' to="/About">About</NavLink>
// // // //                 <NavLink className='hover' to="/Contacts">Contacts</NavLink>
// // // //                 <NavLink className='hover' to="/Sign up">Sign up</NavLink>
// // // //                 <button className='nav-btn nav-close-btn' onClick={showNavbar}>
// // // //                     <RiTimesLine/> {/* Close icon */}
// // // //                 </button>
// // // //             </ul>
// // // //             <button className='nav-btn' onClick={showNavbar}>
// // // //                 <RiBarsLine/> {/* Menu icon */}
// // // //             </button>
// // // //             </div>
// // // //         </div>
// // // //     );
// // // // }

// // // // export default Navbar;

// // // import React from "react";
// // // import { NavLink } from "react-router-dom";
// // // import { useRef } from "react";
// // // import { RiBarsLine, RiCloseLine } from "react-icons/ri"; // Importing icons from RemixIcon library

// // // function Navbar() {
// // //     const navRef = useRef();

// // //     const showNavbar = () => {
// // //         navRef.current.classList.toggle("responsive_nav");
// // //     }

// // //     return (
// // //         <div className="Nav-Container">
// // //             <div>
// // //                 <h3>MAZINGIRA</h3>
// // //             </div>
// // //             <div>
// // //                 <ul ref={navRef} className="hover-links">
// // //                     <NavLink className='hover' to="/">Home</NavLink>
// // //                     <NavLink className='hover' to="/About">About</NavLink>
// // //                     <NavLink className='hover' to="/Contacts">Contacts</NavLink>
// // //                     <NavLink className='hover' to="/Sign up">Sign up</NavLink>
// // //                     <button className='nav-btn nav-close-btn' onClick={showNavbar}>
// // //                         <RiCloseLine/> {/* Close icon */}
// // //                     </button>
// // //                 </ul>
// // //                 <button className='nav-btn' onClick={showNavbar}>
// // //                     <RiBarsLine/> {/* Menu icon */}
// // //                 </button>
// // //             </div>
// // //         </div>
// // //     );
// // // }

// // // export default Navbar;


// // import React from "react";
// // import { NavLink } from "react-router-dom";
// // import { useRef } from "react";
// // import { RiBarsFill, RiCloseFill } from "react-icons/ri"; // Corrected import statement

// // function Navbar() {
// //     const navRef = useRef();

// //     const showNavbar = () => {
// //         navRef.current.classList.toggle("responsive_nav");
// //     }

// //     return (
// //         <div className="Nav-Container">
// //             <div>
// //                 <h3>MAZINGIRA</h3>
// //             </div>
// //             <div>
// //                 <ul ref={navRef} className="hover-links">
// //                     <NavLink className='hover' to="/">Home</NavLink>
// //                     <NavLink className='hover' to="/About">About</NavLink>
// //                     <NavLink className='hover' to="/Contacts">Contacts</NavLink>
// //                     <NavLink className='hover' to="/Sign up">Sign up</NavLink>
// //                     <button className='nav-btn nav-close-btn' onClick={showNavbar}>
// //                         <RiCloseFill/> {/* Close icon */}
// //                     </button>
// //                 </ul>
// //                 <button className='nav-btn' onClick={showNavbar}>
// //                     <RiBarsFill/> {/* Menu icon */}
// //                 </button>
// //             </div>
// //         </div>
// //     );
// // }

// // export default Navbar;a


// import React from "react";
// import { NavLink } from "react-router-dom";
// import { useRef } from "react";
// import { RiMenu3Fill, RiCloseFill } from "react-icons/ri"; // Updated import statement

// function Navbar() {
//     const navRef = useRef();

//     const showNavbar = () => {
//         navRef.current.classList.toggle("responsive_nav");
//     }

//     return (
//         <div className="Nav-Container">
//             <div>
//                 <h3>MAZINGIRA</h3>
//             </div>
//             <div>
//                 <ul ref={navRef} className="hover-links">
//                     <NavLink className='hover' to="/">Home</NavLink>
//                     <NavLink className='hover' to="/About">About</NavLink>
//                     <NavLink className='hover' to="/Contacts">Contacts</NavLink>
//                     <NavLink className='hover' to="/Sign up">Sign up</NavLink>
//                     <button className='nav-btn nav-close-btn' onClick={showNavbar}>
//                         <RiCloseFill/> {/* Close icon */}
//                     </button>
//                 </ul>
//                 <button className='nav-btn' onClick={showNavbar}>
//                     <RiMenu3Fill/> {/* Menu icon */}
//                 </button>
//             </div>
//         </div>
//     );
// }

// export default Navbar;


// Navbar.js
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
                    <NavLink className='hover' to="/">Home</NavLink>
                    <NavLink className='hover' to="/About">About</NavLink>
                    <NavLink className='hover' to="/Contact">Contact</NavLink>
                    <NavLink className='hover' to="/AuthForm">AuthForm</NavLink> {/* Changed "Sign up" to "Signup" to match the route */}
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
