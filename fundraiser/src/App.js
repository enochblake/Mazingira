// // // // // // // // // // import React from 'react';
// // // // // // // // // // import Donor from '../fundraiser/src/components/donor.jsx';
// // // // // // // // // // import Organization from '../components/Organization.jsx';
// // // // // // // // // // import Administrator from '../fundraiser/src/components/Administrator.jsx';

// // // // // // // // // // function App() {
// // // // // // // // // //   // Assume userRole is fetched from the authentication process
// // // // // // // // // //   const userRole = 'donor'; // 'organization', 'administrator'

// // // // // // // // // //   return (
// // // // // // // // // //     <div className="App">
// // // // // // // // // //       <h1>Environmental Preservation Donation Platform</h1>
// // // // // // // // // //       {userRole === 'donor' && <Donor/>}
// // // // // // // // // //       {userRole === 'organization' && <Organization />}
// // // // // // // // // //       {userRole === 'administrator' && <Administrator/>}
// // // // // // // // // //     </div>
// // // // // // // // // //   );
// // // // // // // // // // }


import React from 'react';
import AuthForm from "./components/AuthForm.jsx";

function App() {
  return (
    <div>
      <h1>Mazingira</h1>
      <AuthForm />
    </div>
  );
}

export default App;


// // // // // // // // // import React, { useState } from 'react';
// // // // // // // // // import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
// // // // // // // // // import AuthForm from './components/AuthForm.jsx';
// // // // // // // // // import DonorPage from '../fundraiser/src/components/DonorPage.jsx';
// // // // // // // // // import OrganizationPage from '../components/OrganizationPage.jsx';
// // // // // // // // // import AdministratorPage from '../fundraiser/src/components/AdministratorPage.jsx';

// // // // // // // // // function App() {
// // // // // // // // //   const [userRole, setUserRole] = useState(null);

// // // // // // // // //   // Function to set user role after authentication
// // // // // // // // //   const handleAuthentication = (role) => {
// // // // // // // // //     setUserRole(role);
// // // // // // // // //   };

// // // // // // // // //   return (
// // // // // // // // //     <Router>
// // // // // // // // //       <div>
// // // // // // // // //         <h1>Mazingira</h1>
// // // // // // // // //         <Route exact path="/">
// // // // // // // // //           {userRole ? <Redirect to={`/${userRole}`} /> : <AuthForm onAuthentication={handleAuthentication} />}
// // // // // // // // //         </Route>
// // // // // // // // //         <Route path="/donor">
// // // // // // // // //           {userRole === 'donor' ? <DonorPage /> : <Redirect to="/" />}
// // // // // // // // //         </Route>
// // // // // // // // //         <Route path="/organization">
// // // // // // // // //           {userRole === 'organization' ? <OrganizationPage /> : <Redirect to="/" />}
// // // // // // // // //         </Route>
// // // // // // // // //         <Route path="/administrator">
// // // // // // // // //           {userRole === 'administrator' ? <AdministratorPage /> : <Redirect to="/" />}
// // // // // // // // //         </Route>
// // // // // // // // //       </div>
// // // // // // // // //     </Router>
// // // // // // // // //   );
// // // // // // // // // }

// // // // // // // // // export default App;

// // // // // // // // import React, { useState } from 'react';
// // // // // // // // import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
// // // // // // // // import AuthForm from './components/AuthForm.jsx';
// // // // // // // // import DonorComponent from './components/Donor.jsx';
// // // // // // // // import OrganizationComponent from './components/Organization.jsx';
// // // // // // // // import AdministratorComponent from './components/Administrator.jsx';

// // // // // // // // function App() {
// // // // // // // //   const [userRole, setUserRole] = useState(null);

// // // // // // // //   // Function to set user role after authentication
// // // // // // // //   const handleAuthentication = (role) => {
// // // // // // // //     setUserRole(role);
// // // // // // // //   };

// // // // // // // //   return (
// // // // // // // //     <Router>
// // // // // // // //       <div>
// // // // // // // //         <h1>Mazingira</h1>
// // // // // // // //         <Route exact path="/">
// // // // // // // //           {userRole ? <Redirect to={`/${userRole}`} /> : <AuthForm onAuthentication={handleAuthentication} />}
// // // // // // // //         </Route>
// // // // // // // //         <Route path="/donor">
// // // // // // // //           {userRole === 'donor' ? <DonorComponent /> : <Redirect to="/" />}
// // // // // // // //         </Route>
// // // // // // // //         <Route path="/organization">
// // // // // // // //           {userRole === 'organization' ? <OrganizationComponent /> : <Redirect to="/" />}
// // // // // // // //         </Route>
// // // // // // // //         <Route path="/administrator">
// // // // // // // //           {userRole === 'administrator' ? <AdministratorComponent /> : <Redirect to="/" />}
// // // // // // // //         </Route>
// // // // // // // //       </div>
// // // // // // // //     </Router>
// // // // // // // //   );
// // // // // // // // }

// // // // // // // // export default App;

// // // // // // // import React, { useState } from 'react';
// // // // // // // import { BrowserRouter as Router, Route } from 'react-router-dom';
// // // // // // // import { navigate } from 'react-router-dom';
// // // // // // // import AuthForm from './components/AuthForm.jsx';
// // // // // // // import DonorComponent from './components/Donor.jsx';
// // // // // // // import OrganizationComponent from './components/Organization.jsx';
// // // // // // // import AdministratorComponent from './components/Administrator.jsx';

// // // // // // // function App() {
// // // // // // //   const [userRole, setUserRole] = useState(null);

// // // // // // //   // Function to set user role after authentication
// // // // // // //   const handleAuthentication = (role) => {
// // // // // // //     setUserRole(role);
// // // // // // //     // Navigate to the respective role page after authentication
// // // // // // //     navigate(`/${role}`);
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <Router>
// // // // // // //       <div>
// // // // // // //         <h1>Mazingira</h1>
// // // // // // //         <Route exact path="/">
// // // // // // //           {userRole ? <AuthForm onAuthentication={handleAuthentication} /> : <AuthForm />}
// // // // // // //         </Route>
// // // // // // //         <Route path="/donor">
// // // // // // //           {userRole === 'donor' ? <DonorComponent /> : null}
// // // // // // //         </Route>
// // // // // // //         <Route path="/organization">
// // // // // // //           {userRole === 'organization' ? <OrganizationComponent /> : null}
// // // // // // //         </Route>
// // // // // // //         <Route path="/administrator">
// // // // // // //           {userRole === 'administrator' ? <AdministratorComponent /> : null}
// // // // // // //         </Route>
// // // // // // //       </div>
// // // // // // //     </Router>
// // // // // // //   );
// // // // // // // }

// // // // // // // export default App;


// // // // // // import React, { useState } from 'react';
// // // // // // import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
// // // // // // import AuthForm from './components/AuthForm.jsx';
// // // // // // import DonorComponent from './components/Donor.jsx';
// // // // // // import OrganizationComponent from './components/Organization.jsx';
// // // // // // import AdministratorComponent from './components/Administrator.jsx';

// // // // // // function App() {
// // // // // //   const [userRole, setUserRole] = useState(null);

// // // // // //   // Function to set user role after authentication
// // // // // //   const handleAuthentication = (role) => {
// // // // // //     setUserRole(role);
// // // // // //   };

// // // // // //   return (
// // // // // //     <Router>
// // // // // //       <div>
// // // // // //         <h1>Mazingira</h1>
// // // // // //         <Route exact path="/">
// // // // // //           {userRole ? <Redirect to={`/${userRole}`} /> : <AuthForm onAuthentication={handleAuthentication} />}
// // // // // //         </Route>
// // // // // //         <Route path="/donor">
// // // // // //           {userRole === 'donor' ? <DonorComponent /> : null}
// // // // // //         </Route>
// // // // // //         <Route path="/organization">
// // // // // //           {userRole === 'organization' ? <OrganizationComponent /> : null}
// // // // // //         </Route>
// // // // // //         <Route path="/administrator">
// // // // // //           {userRole === 'administrator' ? <AdministratorComponent /> : null}
// // // // // //         </Route>
// // // // // //       </div>
// // // // // //     </Router>
// // // // // //   );
// // // // // // }

// // // // // // export default App;

// // // // import React, { useState } from 'react';
// // // // import { BrowserRouter as Router, Route } from 'react-router-dom'; // Import Redirect from react-router-dom
// // // // import { Redirect } from 'react-router-dom';
// // // // import AuthForm from './components/AuthForm.jsx';
// // // // import DonorComponent from './components/Donor.jsx';
// // // // import OrganizationComponent from '../components/Organization.jsx'; // Update the import path
// // // // import AdministratorComponent from './components/Administrator.jsx';

// // // // function App() {
// // // //   const [userRole, setUserRole] = useState(null);

// // // //   // Function to set user role after authentication
// // // //   const handleAuthentication = (role) => {
// // // //     setUserRole(role);
// // // //   };

// // // //   return (
// // // //     <Router>
// // // //       <div>
// // // //         <h1>Mazingira</h1>
// // // //         <Route exact path="/">
// // // //           {userRole ? <Redirect to={`/${userRole}`} /> : <AuthForm onAuthentication={handleAuthentication} />}
// // // //         </Route>
// // // //         <Route path="/donor">
// // // //           {userRole === 'donor' ? <DonorComponent /> : null}
// // // //         </Route>
// // // //         <Route path="/organization">
// // // //           {userRole === 'organization' ? <OrganizationComponent /> : null}
// // // //         </Route>
// // // //         <Route path="/administrator">
// // // //           {userRole === 'administrator' ? <AdministratorComponent /> : null}
// // // //         </Route>
// // // //       </div>
// // // //     </Router>
// // // //   );
// // // // }

// // // // export default App;


// // // import React, { useState } from 'react';
// // // import { BrowserRouter as Router, Route } from 'react-router-dom';
// // // import AuthForm from './components/AuthForm.jsx';
// // // import DonorComponent from './components/Donor.jsx';
// // // import OrganizationComponent from './components/Organisation.jsx'// Update the import path
// // // import AdministratorComponent from './components/Administrator.jsx';

// // // function App() {
// // //   const [userRole, setUserRole] = useState(null);

// // //   // Function to set user role after authentication
// // //   const handleAuthentication = (role) => {
// // //     setUserRole(role);
// // //   };

// // //   return (
// // //     <Router>
// // //       <div>
// // //         <h1>Mazingira</h1>
// // //         <Route exact path="/">
// // //           {userRole ? <Redirect to={`/${userRole}`} /> : <AuthForm onAuthentication={handleAuthentication} />}
// // //         </Route>
// // //         <Route path="/donor">
// // //           {userRole === 'donor' && <DonorComponent />}
// // //         </Route>
// // //         <Route path="/organization">
// // //           {userRole === 'organization' && <OrganizationComponent />}
// // //         </Route>
// // //         <Route path="/administrator">
// // //           {userRole === 'administrator' && <AdministratorComponent />}
// // //         </Route>
// // //       </div>
// // //     </Router>
// // //   );
// // // }

// // // export default App;

// // import React, { useState } from 'react';
// // import { BrowserRouter as Router, Route, useNavigate } from 'react-router-dom';
// // import AuthForm from './components/AuthForm.jsx';
// // import DonorComponent from './components/Donor.jsx';
// // import OrganizationComponent from  './components/Organisation.jsx';

// // import AdministratorComponent from './components/Administrator.jsx';

// // function App() {
// //   const [userRole, setUserRole] = useState(null);
// //   const navigate = useNavigate(); // Initialize the navigate hook

// //   // Function to set user role after authentication
// //   const handleAuthentication = (role) => {
// //     setUserRole(role);
// //     navigate(`/${role}`); // Navigate to the corresponding route after authentication
// //   };

// //   return (
// //     <Router>
// //       <div>
// //         <h1>Mazingira</h1>
// //         <Route exact path="/">
// //           {userRole ? <AuthForm onAuthentication={handleAuthentication} /> : null}
// //         </Route>
// //         <Route path="/donor">
// //           {userRole === 'donor' && <DonorComponent />}
// //         </Route>
// //         <Route path="/organization">
// //           {userRole === 'organization' && <OrganizationComponent />}
// //         </Route>
// //         <Route path="/administrator">
// //           {userRole === 'administrator' && <AdministratorComponent />}
// //         </Route>
// //       </div>
// //     </Router>
// //   );
// // }

// // export default App;


// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
// import AuthForm from './components/AuthForm.jsx';
// import DonorComponent from './components/Donor.jsx';
// import OrganizationComponent from './components/Administrator.jsx';
// import AdministratorComponent from './components/Administrator.jsx';

// function App() {
//   const [userRole, setUserRole] = useState(null);
//   const navigate = useNavigate(); // Define useNavigate here

//   // Function to set user role after authentication
//   const handleAuthentication = (role) => {
//     setUserRole(role);
//     navigate(`/${role}`); // Use navigate here after setting user role
//   };

//   return (
//     <Router>
//       <div>
//         <h1>Mazingira</h1>
//         <Routes>
//           <Route exact path="/">
//             {userRole ? <navigate to={`/${userRole}`} /> : <AuthForm onAuthentication={handleAuthentication} />}
//           </Route>
//           <Route path="/donor" element={<DonorComponent />} />
//           <Route path="/organization" element={<OrganizationComponent />} />
//           <Route path="/administrator" element={<AdministratorComponent />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; // Import Navigate
// import AuthForm from './components/AuthForm.jsx';
// import DonorComponent from './components/Donor.jsx';
// import OrganizationComponent from './components/Organisation.jsx';
// import AdministratorComponent from './components/Administrator.jsx';

// function App() {
//   const [userRole, setUserRole] = useState(null);

//   // Function to set user role after authentication
//   const handleAuthentication = (role) => {
//     setUserRole(role);
//   };

//   return (
//     <Router> {/* Ensure that the Router component wraps the entire app */}
//       <div>
//         <h1>Mazingira</h1>
//         <Routes>
//           <Route exact path="/">
//             {userRole ? <Navigate to={`/${userRole}`} /> : <AuthForm onAuthentication={handleAuthentication} />}
//           </Route>
//           <Route path="/donor" element={<DonorComponent />} />
//           <Route path="/organization" element={<OrganizationComponent />} />
//           <Route path="/administrator" element={<AdministratorComponent />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

