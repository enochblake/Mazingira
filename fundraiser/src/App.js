// // // // // // // // // // // // // // // // // // // // // import React from 'react';
// // // // // // // // // // // // // // // // // // // // // import Donor from '../fundraiser/src/components/donor.jsx';
// // // // // // // // // // // // // // // // // // // // // import Organization from '../components/Organization.jsx';
// // // // // // // // // // // // // // // // // // // // // import Administrator from '../fundraiser/src/components/Administrator.jsx';

// // // // // // // // // // // // // // // // // // // // // function App() {
// // // // // // // // // // // // // // // // // // // // //   // Assume userRole is fetched from the authentication process
// // // // // // // // // // // // // // // // // // // // //   const userRole = 'donor'; // 'organization', 'administrator'

// // // // // // // // // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // // // // // // // // //     <div className="App">
// // // // // // // // // // // // // // // // // // // // //       <h1>Environmental Preservation Donation Platform</h1>
// // // // // // // // // // // // // // // // // // // // //       {userRole === 'donor' && <Donor/>}
// // // // // // // // // // // // // // // // // // // // //       {userRole === 'organization' && <Organization />}
// // // // // // // // // // // // // // // // // // // // //       {userRole === 'administrator' && <Administrator/>}
// // // // // // // // // // // // // // // // // // // // //     </div>
// // // // // // // // // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // // // // // // // // }


// // // // // // // // // // // // import React from 'react';
// // // // // // // // // // // // import AuthForm from "./components/AuthForm.jsx";

// // // // // // // // // // // // function App() {
// // // // // // // // // // // //   return (
// // // // // // // // // // // //     <div>
// // // // // // // // // // // //       <h1>Mazingira</h1>
// // // // // // // // // // // //       <AuthForm />
// // // // // // // // // // // //     </div>
// // // // // // // // // // // //   );
// // // // // // // // // // // // }

// // // // // // // // // // // // export default App;


// // // // // // // // // // // // // // // // // // // // import React, { useState } from 'react';
// // // // // // // // // // // // // // // // // // // // import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
// // // // // // // // // // // // // // // // // // // // import AuthForm from './components/AuthForm.jsx';
// // // // // // // // // // // // // // // // // // // // import DonorPage from '../fundraiser/src/components/DonorPage.jsx';
// // // // // // // // // // // // // // // // // // // // import OrganizationPage from '../components/OrganizationPage.jsx';
// // // // // // // // // // // // // // // // // // // // import AdministratorPage from '../fundraiser/src/components/AdministratorPage.jsx';

// // // // // // // // // // // // // // // // // // // // function App() {
// // // // // // // // // // // // // // // // // // // //   const [userRole, setUserRole] = useState(null);

// // // // // // // // // // // // // // // // // // // //   // Function to set user role after authentication
// // // // // // // // // // // // // // // // // // // //   const handleAuthentication = (role) => {
// // // // // // // // // // // // // // // // // // // //     setUserRole(role);
// // // // // // // // // // // // // // // // // // // //   };

// // // // // // // // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // // // // // // // //     <Router>
// // // // // // // // // // // // // // // // // // // //       <div>
// // // // // // // // // // // // // // // // // // // //         <h1>Mazingira</h1>
// // // // // // // // // // // // // // // // // // // //         <Route exact path="/">
// // // // // // // // // // // // // // // // // // // //           {userRole ? <Redirect to={`/${userRole}`} /> : <AuthForm onAuthentication={handleAuthentication} />}
// // // // // // // // // // // // // // // // // // // //         </Route>
// // // // // // // // // // // // // // // // // // // //         <Route path="/donor">
// // // // // // // // // // // // // // // // // // // //           {userRole === 'donor' ? <DonorPage /> : <Redirect to="/" />}
// // // // // // // // // // // // // // // // // // // //         </Route>
// // // // // // // // // // // // // // // // // // // //         <Route path="/organization">
// // // // // // // // // // // // // // // // // // // //           {userRole === 'organization' ? <OrganizationPage /> : <Redirect to="/" />}
// // // // // // // // // // // // // // // // // // // //         </Route>
// // // // // // // // // // // // // // // // // // // //         <Route path="/administrator">
// // // // // // // // // // // // // // // // // // // //           {userRole === 'administrator' ? <AdministratorPage /> : <Redirect to="/" />}
// // // // // // // // // // // // // // // // // // // //         </Route>
// // // // // // // // // // // // // // // // // // // //       </div>
// // // // // // // // // // // // // // // // // // // //     </Router>
// // // // // // // // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // // // // // // // }

// // // // // // // // // // // // // // // // // // // // export default App;

// // // // // // // // // // // // // // // // // // // import React, { useState } from 'react';
// // // // // // // // // // // // // // // // // // // import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
// // // // // // // // // // // // // // // // // // // import AuthForm from './components/AuthForm.jsx';
// // // // // // // // // // // // // // // // // // // import DonorComponent from './components/Donor.jsx';
// // // // // // // // // // // // // // // // // // // import OrganizationComponent from './components/Organization.jsx';
// // // // // // // // // // // // // // // // // // // import AdministratorComponent from './components/Administrator.jsx';

// // // // // // // // // // // // // // // // // // // function App() {
// // // // // // // // // // // // // // // // // // //   const [userRole, setUserRole] = useState(null);

// // // // // // // // // // // // // // // // // // //   // Function to set user role after authentication
// // // // // // // // // // // // // // // // // // //   const handleAuthentication = (role) => {
// // // // // // // // // // // // // // // // // // //     setUserRole(role);
// // // // // // // // // // // // // // // // // // //   };

// // // // // // // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // // // // // // //     <Router>
// // // // // // // // // // // // // // // // // // //       <div>
// // // // // // // // // // // // // // // // // // //         <h1>Mazingira</h1>
// // // // // // // // // // // // // // // // // // //         <Route exact path="/">
// // // // // // // // // // // // // // // // // // //           {userRole ? <Redirect to={`/${userRole}`} /> : <AuthForm onAuthentication={handleAuthentication} />}
// // // // // // // // // // // // // // // // // // //         </Route>
// // // // // // // // // // // // // // // // // // //         <Route path="/donor">
// // // // // // // // // // // // // // // // // // //           {userRole === 'donor' ? <DonorComponent /> : <Redirect to="/" />}
// // // // // // // // // // // // // // // // // // //         </Route>
// // // // // // // // // // // // // // // // // // //         <Route path="/organization">
// // // // // // // // // // // // // // // // // // //           {userRole === 'organization' ? <OrganizationComponent /> : <Redirect to="/" />}
// // // // // // // // // // // // // // // // // // //         </Route>
// // // // // // // // // // // // // // // // // // //         <Route path="/administrator">
// // // // // // // // // // // // // // // // // // //           {userRole === 'administrator' ? <AdministratorComponent /> : <Redirect to="/" />}
// // // // // // // // // // // // // // // // // // //         </Route>
// // // // // // // // // // // // // // // // // // //       </div>
// // // // // // // // // // // // // // // // // // //     </Router>
// // // // // // // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // // // // // // }

// // // // // // // // // // // // // // // // // // // export default App;

// // // // // // // // // // // // // // // // // // import React, { useState } from 'react';
// // // // // // // // // // // // // // // // // // import { BrowserRouter as Router, Route } from 'react-router-dom';
// // // // // // // // // // // // // // // // // // import { navigate } from 'react-router-dom';
// // // // // // // // // // // // // // // // // // import AuthForm from './components/AuthForm.jsx';
// // // // // // // // // // // // // // // // // // import DonorComponent from './components/Donor.jsx';
// // // // // // // // // // // // // // // // // // import OrganizationComponent from './components/Organization.jsx';
// // // // // // // // // // // // // // // // // // import AdministratorComponent from './components/Administrator.jsx';

// // // // // // // // // // // // // // // // // // function App() {
// // // // // // // // // // // // // // // // // //   const [userRole, setUserRole] = useState(null);

// // // // // // // // // // // // // // // // // //   // Function to set user role after authentication
// // // // // // // // // // // // // // // // // //   const handleAuthentication = (role) => {
// // // // // // // // // // // // // // // // // //     setUserRole(role);
// // // // // // // // // // // // // // // // // //     // Navigate to the respective role page after authentication
// // // // // // // // // // // // // // // // // //     navigate(`/${role}`);
// // // // // // // // // // // // // // // // // //   };

// // // // // // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // // // // // //     <Router>
// // // // // // // // // // // // // // // // // //       <div>
// // // // // // // // // // // // // // // // // //         <h1>Mazingira</h1>
// // // // // // // // // // // // // // // // // //         <Route exact path="/">
// // // // // // // // // // // // // // // // // //           {userRole ? <AuthForm onAuthentication={handleAuthentication} /> : <AuthForm />}
// // // // // // // // // // // // // // // // // //         </Route>
// // // // // // // // // // // // // // // // // //         <Route path="/donor">
// // // // // // // // // // // // // // // // // //           {userRole === 'donor' ? <DonorComponent /> : null}
// // // // // // // // // // // // // // // // // //         </Route>
// // // // // // // // // // // // // // // // // //         <Route path="/organization">
// // // // // // // // // // // // // // // // // //           {userRole === 'organization' ? <OrganizationComponent /> : null}
// // // // // // // // // // // // // // // // // //         </Route>
// // // // // // // // // // // // // // // // // //         <Route path="/administrator">
// // // // // // // // // // // // // // // // // //           {userRole === 'administrator' ? <AdministratorComponent /> : null}
// // // // // // // // // // // // // // // // // //         </Route>
// // // // // // // // // // // // // // // // // //       </div>
// // // // // // // // // // // // // // // // // //     </Router>
// // // // // // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // // // // // }

// // // // // // // // // // // // // // // // // // export default App;


// // // // // // // // // // // // // // // // // import React, { useState } from 'react';
// // // // // // // // // // // // // // // // // import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
// // // // // // // // // // // // // // // // // import AuthForm from './components/AuthForm.jsx';
// // // // // // // // // // // // // // // // // import DonorComponent from './components/Donor.jsx';
// // // // // // // // // // // // // // // // // import OrganizationComponent from './components/Organization.jsx';
// // // // // // // // // // // // // // // // // import AdministratorComponent from './components/Administrator.jsx';

// // // // // // // // // // // // // // // // // function App() {
// // // // // // // // // // // // // // // // //   const [userRole, setUserRole] = useState(null);

// // // // // // // // // // // // // // // // //   // Function to set user role after authentication
// // // // // // // // // // // // // // // // //   const handleAuthentication = (role) => {
// // // // // // // // // // // // // // // // //     setUserRole(role);
// // // // // // // // // // // // // // // // //   };

// // // // // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // // // // //     <Router>
// // // // // // // // // // // // // // // // //       <div>
// // // // // // // // // // // // // // // // //         <h1>Mazingira</h1>
// // // // // // // // // // // // // // // // //         <Route exact path="/">
// // // // // // // // // // // // // // // // //           {userRole ? <Redirect to={`/${userRole}`} /> : <AuthForm onAuthentication={handleAuthentication} />}
// // // // // // // // // // // // // // // // //         </Route>
// // // // // // // // // // // // // // // // //         <Route path="/donor">
// // // // // // // // // // // // // // // // //           {userRole === 'donor' ? <DonorComponent /> : null}
// // // // // // // // // // // // // // // // //         </Route>
// // // // // // // // // // // // // // // // //         <Route path="/organization">
// // // // // // // // // // // // // // // // //           {userRole === 'organization' ? <OrganizationComponent /> : null}
// // // // // // // // // // // // // // // // //         </Route>
// // // // // // // // // // // // // // // // //         <Route path="/administrator">
// // // // // // // // // // // // // // // // //           {userRole === 'administrator' ? <AdministratorComponent /> : null}
// // // // // // // // // // // // // // // // //         </Route>
// // // // // // // // // // // // // // // // //       </div>
// // // // // // // // // // // // // // // // //     </Router>
// // // // // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // // // // }

// // // // // // // // // // // // // // // // // export default App;

// // // // // // // // // // // // // // // import React, { useState } from 'react';
// // // // // // // // // // // // // // // import { BrowserRouter as Router, Route } from 'react-router-dom'; // Import Redirect from react-router-dom
// // // // // // // // // // // // // // // import { Redirect } from 'react-router-dom';
// // // // // // // // // // // // // // // import AuthForm from './components/AuthForm.jsx';
// // // // // // // // // // // // // // // import DonorComponent from './components/Donor.jsx';
// // // // // // // // // // // // // // // import OrganizationComponent from '../components/Organization.jsx'; // Update the import path
// // // // // // // // // // // // // // // import AdministratorComponent from './components/Administrator.jsx';

// // // // // // // // // // // // // // // function App() {
// // // // // // // // // // // // // // //   const [userRole, setUserRole] = useState(null);

// // // // // // // // // // // // // // //   // Function to set user role after authentication
// // // // // // // // // // // // // // //   const handleAuthentication = (role) => {
// // // // // // // // // // // // // // //     setUserRole(role);
// // // // // // // // // // // // // // //   };

// // // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // // //     <Router>
// // // // // // // // // // // // // // //       <div>
// // // // // // // // // // // // // // //         <h1>Mazingira</h1>
// // // // // // // // // // // // // // //         <Route exact path="/">
// // // // // // // // // // // // // // //           {userRole ? <Redirect to={`/${userRole}`} /> : <AuthForm onAuthentication={handleAuthentication} />}
// // // // // // // // // // // // // // //         </Route>
// // // // // // // // // // // // // // //         <Route path="/donor">
// // // // // // // // // // // // // // //           {userRole === 'donor' ? <DonorComponent /> : null}
// // // // // // // // // // // // // // //         </Route>
// // // // // // // // // // // // // // //         <Route path="/organization">
// // // // // // // // // // // // // // //           {userRole === 'organization' ? <OrganizationComponent /> : null}
// // // // // // // // // // // // // // //         </Route>
// // // // // // // // // // // // // // //         <Route path="/administrator">
// // // // // // // // // // // // // // //           {userRole === 'administrator' ? <AdministratorComponent /> : null}
// // // // // // // // // // // // // // //         </Route>
// // // // // // // // // // // // // // //       </div>
// // // // // // // // // // // // // // //     </Router>
// // // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // // }

// // // // // // // // // // // // // // // export default App;


// // // // // // // // // // // // // // import React, { useState } from 'react';
// // // // // // // // // // // // // // import { BrowserRouter as Router, Route } from 'react-router-dom';
// // // // // // // // // // // // // // import AuthForm from './components/AuthForm.jsx';
// // // // // // // // // // // // // // import DonorComponent from './components/Donor.jsx';
// // // // // // // // // // // // // // import OrganizationComponent from './components/Organisation.jsx'// Update the import path
// // // // // // // // // // // // // // import AdministratorComponent from './components/Administrator.jsx';

// // // // // // // // // // // // // // function App() {
// // // // // // // // // // // // // //   const [userRole, setUserRole] = useState(null);

// // // // // // // // // // // // // //   // Function to set user role after authentication
// // // // // // // // // // // // // //   const handleAuthentication = (role) => {
// // // // // // // // // // // // // //     setUserRole(role);
// // // // // // // // // // // // // //   };

// // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // //     <Router>
// // // // // // // // // // // // // //       <div>
// // // // // // // // // // // // // //         <h1>Mazingira</h1>
// // // // // // // // // // // // // //         <Route exact path="/">
// // // // // // // // // // // // // //           {userRole ? <Redirect to={`/${userRole}`} /> : <AuthForm onAuthentication={handleAuthentication} />}
// // // // // // // // // // // // // //         </Route>
// // // // // // // // // // // // // //         <Route path="/donor">
// // // // // // // // // // // // // //           {userRole === 'donor' && <DonorComponent />}
// // // // // // // // // // // // // //         </Route>
// // // // // // // // // // // // // //         <Route path="/organization">
// // // // // // // // // // // // // //           {userRole === 'organization' && <OrganizationComponent />}
// // // // // // // // // // // // // //         </Route>
// // // // // // // // // // // // // //         <Route path="/administrator">
// // // // // // // // // // // // // //           {userRole === 'administrator' && <AdministratorComponent />}
// // // // // // // // // // // // // //         </Route>
// // // // // // // // // // // // // //       </div>
// // // // // // // // // // // // // //     </Router>
// // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // }

// // // // // // // // // // // // // // export default App;

// // // // // // // // // // // // // import React, { useState } from 'react';
// // // // // // // // // // // // // import { BrowserRouter as Router, Route, useNavigate } from 'react-router-dom';
// // // // // // // // // // // // // import AuthForm from './components/AuthForm.jsx';
// // // // // // // // // // // // // import DonorComponent from './components/Donor.jsx';
// // // // // // // // // // // // // import OrganizationComponent from  './components/Organisation.jsx';

// // // // // // // // // // // // // import AdministratorComponent from './components/Administrator.jsx';

// // // // // // // // // // // // // function App() {
// // // // // // // // // // // // //   const [userRole, setUserRole] = useState(null);
// // // // // // // // // // // // //   const navigate = useNavigate(); // Initialize the navigate hook

// // // // // // // // // // // // //   // Function to set user role after authentication
// // // // // // // // // // // // //   const handleAuthentication = (role) => {
// // // // // // // // // // // // //     setUserRole(role);
// // // // // // // // // // // // //     navigate(`/${role}`); // Navigate to the corresponding route after authentication
// // // // // // // // // // // // //   };

// // // // // // // // // // // // //   return (
// // // // // // // // // // // // //     <Router>
// // // // // // // // // // // // //       <div>
// // // // // // // // // // // // //         <h1>Mazingira</h1>
// // // // // // // // // // // // //         <Route exact path="/">
// // // // // // // // // // // // //           {userRole ? <AuthForm onAuthentication={handleAuthentication} /> : null}
// // // // // // // // // // // // //         </Route>
// // // // // // // // // // // // //         <Route path="/donor">
// // // // // // // // // // // // //           {userRole === 'donor' && <DonorComponent />}
// // // // // // // // // // // // //         </Route>
// // // // // // // // // // // // //         <Route path="/organization">
// // // // // // // // // // // // //           {userRole === 'organization' && <OrganizationComponent />}
// // // // // // // // // // // // //         </Route>
// // // // // // // // // // // // //         <Route path="/administrator">
// // // // // // // // // // // // //           {userRole === 'administrator' && <AdministratorComponent />}
// // // // // // // // // // // // //         </Route>
// // // // // // // // // // // // //       </div>
// // // // // // // // // // // // //     </Router>
// // // // // // // // // // // // //   );
// // // // // // // // // // // // // }

// // // // // // // // // // // // // export default App;


// // // // // // // // // // // // import React, { useState } from 'react';
// // // // // // // // // // // // import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
// // // // // // // // // // // // import AuthForm from './components/AuthForm.jsx';
// // // // // // // // // // // // import DonorComponent from './components/Donor.jsx';
// // // // // // // // // // // // import OrganizationComponent from './components/Administrator.jsx';
// // // // // // // // // // // // import AdministratorComponent from './components/Administrator.jsx';

// // // // // // // // // // // // function App() {
// // // // // // // // // // // //   const [userRole, setUserRole] = useState(null);
// // // // // // // // // // // //   const navigate = useNavigate(); // Define useNavigate here

// // // // // // // // // // // //   // Function to set user role after authentication
// // // // // // // // // // // //   const handleAuthentication = (role) => {
// // // // // // // // // // // //     setUserRole(role);
// // // // // // // // // // // //     navigate(`/${role}`); // Use navigate here after setting user role
// // // // // // // // // // // //   };

// // // // // // // // // // // //   return (
// // // // // // // // // // // //     <Router>
// // // // // // // // // // // //       <div>
// // // // // // // // // // // //         <h1>Mazingira</h1>
// // // // // // // // // // // //         <Routes>
// // // // // // // // // // // //           <Route exact path="/">
// // // // // // // // // // // //             {userRole ? <navigate to={`/${userRole}`} /> : <AuthForm onAuthentication={handleAuthentication} />}
// // // // // // // // // // // //           </Route>
// // // // // // // // // // // //           <Route path="/donor" element={<DonorComponent />} />
// // // // // // // // // // // //           <Route path="/organization" element={<OrganizationComponent />} />
// // // // // // // // // // // //           <Route path="/administrator" element={<AdministratorComponent />} />
// // // // // // // // // // // //         </Routes>
// // // // // // // // // // // //       </div>
// // // // // // // // // // // //     </Router>
// // // // // // // // // // // //   );
// // // // // // // // // // // // }

// // // // // // // // // // // // export default App;

// // // // // // // // // // // // import React, { useState } from 'react';
// // // // // // // // // // // // import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; // Import Navigate
// // // // // // // // // // // // import AuthForm from './components/AuthForm.jsx';
// // // // // // // // // // // // import DonorComponent from './components/Donor.jsx';
// // // // // // // // // // // // import OrganizationComponent from './components/Organisation.jsx';
// // // // // // // // // // // // import AdministratorComponent from './components/Administrator.jsx';

// // // // // // // // // // // // function App() {
// // // // // // // // // // // //   const [userRole, setUserRole] = useState(null);

// // // // // // // // // // // //   // Function to set user role after authentication
// // // // // // // // // // // //   const handleAuthentication = (role) => {
// // // // // // // // // // // //     setUserRole(role);
// // // // // // // // // // // //   };

// // // // // // // // // // // //   return (
// // // // // // // // // // // //     <Router> {/* Ensure that the Router element wraps the entire app */}
// // // // // // // // // // // //       <div>
// // // // // // // // // // // //         <h1>Mazingira</h1>
// // // // // // // // // // // //         <Routes>
// // // // // // // // // // // //           <Route exact path="/">
// // // // // // // // // // // //             {userRole ? <Navigate to={`/${userRole}`} /> : <AuthForm onAuthentication={handleAuthentication} />}
// // // // // // // // // // // //           </Route>
// // // // // // // // // // // //           <Route path="/donor" element={<DonorComponent />} />
// // // // // // // // // // // //           <Route path="/organization" element={<OrganizationComponent />} />
// // // // // // // // // // // //           <Route path="/administrator" element={<AdministratorComponent />} />
// // // // // // // // // // // //         </Routes>
// // // // // // // // // // // //       </div>
// // // // // // // // // // // //     </Router>
// // // // // // // // // // // //   );
// // // // // // // // // // // // }

// // // // // // // // // // // // export default App;

// // // // // // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // // // // // import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// // // // // // // // // // // import Cookies from 'js-cookie';
// // // // // // // // // // // import AuthForm from './components/AuthForm.jsx';
// // // // // // // // // // // import DonorComponent from './components/Donor.jsx';
// // // // // // // // // // // import OrganizationComponent from './components/Organisation.jsx';
// // // // // // // // // // // import AdministratorComponent from './components/Administrator.jsx';

// // // // // // // // // // // function App() {
// // // // // // // // // // //   const [userRole, setUserRole] = useState(null);

// // // // // // // // // // //   // Function to set user role after authentication
// // // // // // // // // // //   const handleAuthentication = (role) => {
// // // // // // // // // // //     setUserRole(role);
// // // // // // // // // // //     // Save the user role in a cookie
// // // // // // // // // // //     Cookies.set('userRole', role, { expires: 7 }); // Expires in 7 days
// // // // // // // // // // //   };

// // // // // // // // // // //   // Function to check if a user is already authenticated based on the cookie
// // // // // // // // // // //   const checkAuthentication = () => {
// // // // // // // // // // //     const storedUserRole = Cookies.get('userRole');
// // // // // // // // // // //     if (storedUserRole) {
// // // // // // // // // // //       setUserRole(storedUserRole);
// // // // // // // // // // //     }
// // // // // // // // // // //   };

// // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // //     checkAuthentication();
// // // // // // // // // // //   }, []);

// // // // // // // // // // //   return (
// // // // // // // // // // //     <Router>
// // // // // // // // // // //       <div>
// // // // // // // // // // //         <h1>Mazingira</h1>
// // // // // // // // // // //         <Routes>
// // // // // // // // // // //           <Route exact path="/">
// // // // // // // // // // //             {userRole ? <Navigate to={`/${userRole}`} /> : <AuthForm onAuthentication={handleAuthentication} />}
// // // // // // // // // // //           </Route>
// // // // // // // // // // //           <Route path="/donor" element={<DonorComponent />} />
// // // // // // // // // // //           <Route path="/organization" element={<OrganizationComponent />} />
// // // // // // // // // // //           <Route path="/administrator" element={<AdministratorComponent />} />
// // // // // // // // // // //         </Routes>
// // // // // // // // // // //       </div>
// // // // // // // // // // //     </Router>
// // // // // // // // // // //   );
// // // // // // // // // // // }

// // // // // // // // // // // export default App;


// // // // // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // // // // import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// // // // // // // // // // import Cookies from 'js-cookie';
// // // // // // // // // // import AuthForm from './components/AuthForm.jsx';
// // // // // // // // // // import DonorComponent from './components/Donor.jsx';
// // // // // // // // // // import OrganizationComponent from './components/Organisation.jsx';
// // // // // // // // // // import AdministratorComponent from './components/Administrator.jsx';

// // // // // // // // // // function App() {
// // // // // // // // // //   const [userRole, setUserRole] = useState(null);

// // // // // // // // // //   // Function to set user role after authentication
// // // // // // // // // //   const handleAuthentication = (role) => {
// // // // // // // // // //     setUserRole(role);
// // // // // // // // // //     // Save the user role in a cookie
// // // // // // // // // //     Cookies.set('userRole', role, { expires: 7 }); // Expires in 7 days
// // // // // // // // // //   };

// // // // // // // // // //   // Function to check if a user is already authenticated based on the cookie
// // // // // // // // // //   const checkAuthentication = () => {
// // // // // // // // // //     const storedUserRole = Cookies.get('userRole');
// // // // // // // // // //     if (storedUserRole) {
// // // // // // // // // //       setUserRole(storedUserRole);
// // // // // // // // // //     }
// // // // // // // // // //   };

// // // // // // // // // //   useEffect(() => {
// // // // // // // // // //     checkAuthentication();
// // // // // // // // // //   }, []);

// // // // // // // // // //   return (
// // // // // // // // // //     <Router>
// // // // // // // // // //       <div>
// // // // // // // // // //         <h1>Mazingira</h1>
// // // // // // // // // //         <Routes>
// // // // // // // // // //           <Route exact path="/">
// // // // // // // // // //             {userRole ? <Navigate to={`/${userRole}`} /> : <AuthForm onAuthentication={handleAuthentication} />}
// // // // // // // // // //           </Route>
// // // // // // // // // //           <Route path="/donor" element={<DonorComponent />} />
// // // // // // // // // //           <Route path="/organization" element={<OrganizationComponent />} />
// // // // // // // // // //           <Route path="/administrator" element={<AdministratorComponent />} />
// // // // // // // // // //         </Routes>
// // // // // // // // // //       </div>
// // // // // // // // // //     </Router>
// // // // // // // // // //   );
// // // // // // // // // // }

// // // // // // // // // // export default App;


// // // // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // // // import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// // // // // // // // // import Cookies from 'js-cookie';
// // // // // // // // // import AuthForm from './components/AuthForm.jsx';
// // // // // // // // // import DonorComponent from './components/Donor.jsx';
// // // // // // // // // import OrganizationComponent from './components/Organisation.jsx';
// // // // // // // // // import AdministratorComponent from './components/Administrator.jsx';

// // // // // // // // // function App() {
// // // // // // // // //   const [userRole, setUserRole] = useState(null);

// // // // // // // // //   // Function to set user role after authentication
// // // // // // // // //   const handleAuthentication = (role) => {
// // // // // // // // //     setUserRole(role);
// // // // // // // // //     // Save the user role in a cookie
// // // // // // // // //     Cookies.set('userRole', role, { expires: 7 }); // Expires in 7 days
// // // // // // // // //   };

// // // // // // // // //   // Function to check if a user is already authenticated based on the cookie
// // // // // // // // //   const checkAuthentication = () => {
// // // // // // // // //     const storedUserRole = Cookies.get('userRole');
// // // // // // // // //     if (storedUserRole) {
// // // // // // // // //       setUserRole(storedUserRole);
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   useEffect(() => {
// // // // // // // // //     checkAuthentication();
// // // // // // // // //   }, []);

// // // // // // // // //   return (
// // // // // // // // //     <Router>
// // // // // // // // //       <div>
// // // // // // // // //         <h1>Mazingira</h1>
// // // // // // // // //         <Routes>
// // // // // // // // //           <Route exact path="/">
// // // // // // // // //             {userRole ? <Navigate to={`/${userRole}`} /> : <AuthForm onAuthentication={handleAuthentication} />}
// // // // // // // // //           </Route>
// // // // // // // // //           <Route path="/donor" element={<DonorComponent />} />
// // // // // // // // //           <Route path="/organization" element={<OrganizationComponent />} />
// // // // // // // // //           <Route path="/administrator" element={<AdministratorComponent />} />
// // // // // // // // //         </Routes>
// // // // // // // // //       </div>
// // // // // // // // //     </Router>
// // // // // // // // //   );
// // // // // // // // // }

// // // // // // // // // export default App;



// // // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // // import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// // // // // // // // import Cookies from 'js-cookie';
// // // // // // // // import AuthForm from './components/AuthForm.jsx';
// // // // // // // // import DonorComponent from './components/Donor.jsx';
// // // // // // // // import OrganizationComponent from './components/Organization.jsx';
// // // // // // // // import AdministratorComponent from './components/Administrator.jsx';

// // // // // // // // function App() {
// // // // // // // //   const [userRole, setUserRole] = useState(null);

// // // // // // // //   // Function to set user role after authentication
// // // // // // // //   const handleAuthentication = (role) => {
// // // // // // // //     setUserRole(role);
// // // // // // // //     // Save the user role in a cookie
// // // // // // // //     Cookies.set('userRole', role, { expires: 7 }); // Expires in 7 days
// // // // // // // //   };

// // // // // // // //   // Function to check if a user is already authenticated based on the cookie
// // // // // // // //   const checkAuthentication = () => {
// // // // // // // //     const storedUserRole = Cookies.get('userRole');
// // // // // // // //     if (storedUserRole) {
// // // // // // // //       setUserRole(storedUserRole);
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   useEffect(() => {
// // // // // // // //     checkAuthentication();
// // // // // // // //   }, []);

// // // // // // // //   return (
// // // // // // // //     <Router>
// // // // // // // //       <div>
// // // // // // // //         <h1>Mazingira</h1>
// // // // // // // //         <Routes>
// // // // // // // //           <Route path="/" element={<Homepage userRole={userRole} />} />
// // // // // // // //           <Route path="/donor" element={<DonorComponent />} />
// // // // // // // //           <Route path="/organization" element={<OrganizationComponent />} />
// // // // // // // //           <Route path="/administrator" element={<AdministratorComponent />} />
// // // // // // // //         </Routes>
// // // // // // // //       </div>
// // // // // // // //     </Router>
// // // // // // // //   );
// // // // // // // // }

// // // // // // // // // Define a separate element for the homepage
// // // // // // // // const Homepage = ({ userRole }) => {
// // // // // // // //   // If userRole is not null, redirect to the corresponding route
// // // // // // // //   if (userRole) {
// // // // // // // //     return <Navigate to={`/${userRole}`} />;
// // // // // // // //   }
// // // // // // // //   // Otherwise, show the authentication form
// // // // // // // //   return <AuthForm onAuthentication={handleAuthentication} />;
// // // // // // // // };

// // // // // // // // export default App;


// // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// // // // // // // import Cookies from 'js-cookie';
// // // // // // // import AuthForm from './components/AuthForm.jsx';
// // // // // // // import DonorComponent from './components/Donor.jsx';
// // // // // // // import OrganizationComponent from './components/Organisation.jsx'; // Ensure correct path
// // // // // // // import AdministratorComponent from './components/Administrator.jsx';

// // // // // // // function App() {
// // // // // // //   const [userRole, setUserRole] = useState(null);

// // // // // // //   // Move handleAuthentication function inside App element
// // // // // // //   const handleAuthentication = (role) => {
// // // // // // //     setUserRole(role);
// // // // // // //     // Save the user role in a cookie
// // // // // // //     Cookies.set('userRole', role, { expires: 7 }); // Expires in 7 days
// // // // // // //   };

// // // // // // //   // Function to check if a user is already authenticated based on the cookie
// // // // // // //   const checkAuthentication = () => {
// // // // // // //     const storedUserRole = Cookies.get('userRole');
// // // // // // //     if (storedUserRole) {
// // // // // // //       setUserRole(storedUserRole);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   useEffect(() => {
// // // // // // //     checkAuthentication();
// // // // // // //   }, []);

// // // // // // //   return (
// // // // // // //     <Router>
// // // // // // //       <div>
// // // // // // //         <h1>Mazingira</h1>
// // // // // // //         <Routes>
// // // // // // //           <Route path="/" element={<Homepage userRole={userRole} handleAuthentication={handleAuthentication} />} />
// // // // // // //           <Route path="/donor" element={<DonorComponent />} />
// // // // // // //           <Route path="/organization" element={<OrganizationComponent />} />
// // // // // // //           <Route path="/administrator" element={<AdministratorComponent />} />
// // // // // // //         </Routes>
// // // // // // //       </div>
// // // // // // //     </Router>
// // // // // // //   );
// // // // // // // }

// // // // // // // // Define a separate element for the homepage
// // // // // // // const Homepage = ({ userRole, handleAuthentication }) => {
// // // // // // //   // If userRole is not null, redirect to the corresponding route
// // // // // // //   if (userRole) {
// // // // // // //     return <Navigate to={`/${userRole}`} />;
// // // // // // //   }
// // // // // // //   // Otherwise, show the authentication form
// // // // // // //   return <AuthForm onAuthentication={handleAuthentication} />;
// // // // // // // };

// // // // // // // export default App;

// // // // // // // App.js
// // // // // // import React, { useState, useEffect } from 'react';
// // // // // // import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// // // // // // import Cookies from 'js-cookie';
// // // // // // import AuthForm from './components/AuthForm.jsx';
// // // // // // import DonorComponent from './components/Donor.jsx';
// // // // // // import OrganizationComponent from './components/Organisation.jsx';
// // // // // // import AdministratorComponent from './components/Administrator.jsx';

// // // // // // function App() {
// // // // // //   const [userRole, setUserRole] = useState(null);

// // // // // //   const handleAuthentication = (role) => {
// // // // // //     setUserRole(role);
// // // // // //     Cookies.set('userRole', role, { expires: 7 }); // Expires in 7 days
// // // // // //   };

// // // // // //   const checkAuthentication = () => {
// // // // // //     const storedUserRole = Cookies.get('userRole');
// // // // // //     if (storedUserRole) {
// // // // // //       setUserRole(storedUserRole);
// // // // // //     }
// // // // // //   };

// // // // // //   useEffect(() => {
// // // // // //     checkAuthentication();
// // // // // //   }, []);

// // // // // //   return (
// // // // // //     <Router>
// // // // // //       <div>
// // // // // //         <h1>Mazingira</h1>
// // // // // //         <Routes>
// // // // // //           <Route path="/" element={<Homepage userRole={userRole} handleAuthentication={handleAuthentication} />} />
// // // // // //           <Route path="/donor" element={<DonorComponent />} />
// // // // // //           <Route path="/organization" element={<OrganizationComponent />} />
// // // // // //           <Route path="/administrator" element={<AdministratorComponent />} />
// // // // // //         </Routes>
// // // // // //       </div>
// // // // // //     </Router>
// // // // // //   );
// // // // // // }

// // // // // // const Homepage = ({ userRole, handleAuthentication }) => {
// // // // // //   if (userRole) {
// // // // // //     return <Navigate to={`/${userRole}`} />;
// // // // // //   }
// // // // // //   return <AuthForm onAuthentication={handleAuthentication} />;
// // // // // // };

// // // // // // export default App;

// // // // // // App.js
// // // // // import React, { useState, useEffect } from 'react';
// // // // // import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// // // // // import Cookies from 'js-cookie';
// // // // // import AuthForm from './components/AuthForm';
// // // // // import DonorComponent from './components/Donor';
// // // // // import OrganizationComponent from './components/Organisation.jsx';
// // // // // import AdministratorComponent from './components/Administrator';

// // // // // function App() {
// // // // //   const [userRole, setUserRole] = useState(null);

// // // // //   const handleAuthentication = (role) => {
// // // // //     setUserRole(role);
// // // // //     Cookies.set('userRole', role, { expires: 7 }); // Expires in 7 days
// // // // //   };

// // // // //   const checkAuthentication = () => {
// // // // //     const storedUserRole = Cookies.get('userRole');
// // // // //     if (storedUserRole) {
// // // // //       setUserRole(storedUserRole);
// // // // //     }
// // // // //   };

// // // // //   useEffect(() => {
// // // // //     checkAuthentication();
// // // // //   }, []);

// // // // //   return (
// // // // //     <Router>
// // // // //       <div>
// // // // //         <h1>Mazingira</h1>
// // // // //         <Routes>
// // // // //           <Route path="/" element={<Homepage userRole={userRole} />} />
// // // // //           <Route path="/donor" element={<DonorComponent />} />
// // // // //           <Route path="/organization" element={<OrganizationComponent />} />
// // // // //           <Route path="/administrator" element={<AdministratorComponent />} />
// // // // //         </Routes>
// // // // //       </div>
// // // // //     </Router>
// // // // //   );
// // // // // }

// // // // // const Homepage = ({ userRole }) => {
// // // // //   if (userRole === 'donor') {
// // // // //     return <Navigate to="/donor" />;
// // // // //   } else if (userRole === 'organization') {
// // // // //     return <Navigate to="/organization" />;
// // // // //   } else if (userRole === 'administrator') {
// // // // //     return <Navigate to="/administrator" />;
// // // // //   }
  
// // // // //   return <AuthForm />;
// // // // // };

// // // // // export default App;


// // // // // App.js
// // // // import React, { useState, useEffect } from 'react';
// // // // import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// // // // import Cookies from 'js-cookie';
// // // // import AuthForm from './components/AuthForm';
// // // // import DonorComponent from './components/Donor';
// // // // import OrganizationComponent from './components/Organisation.jsx';
// // // // import AdministratorComponent from './components/Administrator';

// // // // function App() {
// // // //   const [userRole, setUserRole] = useState(null);

// // // //   useEffect(() => {
// // // //     const storedUserRole = Cookies.get('userRole');
// // // //     if (storedUserRole) {
// // // //       setUserRole(storedUserRole);
// // // //     }
// // // //   }, []);

// // // //   const handleAuthentication = (role) => {
// // // //     setUserRole(role);
// // // //     Cookies.set('userRole', role, { expires: 7 }); // Expires in 7 days
// // // //   };

// // // //   return (
// // // //     <Router>
// // // //       <div>
// // // //         <h1>Mazingira</h1>
// // // //         <Routes>
// // // //           <Route path="/" element={<Homepage userRole={userRole} />} />
// // // //           <Route path="/donor" element={<DonorComponent />} />
// // // //           <Route path="/organization" element={<OrganizationComponent />} />
// // // //           <Route path="/administrator" element={<AdministratorComponent />} />
// // // //         </Routes>
// // // //       </div>
// // // //     </Router>
// // // //   );
// // // // }

// // // // const Homepage = ({ userRole }) => {
// // // //   if (userRole) {
// // // //     return <Navigate to={`/${userRole}`} />;
// // // //   }
// // // //   return <AuthForm />;
// // // // };

// // // // export default App;

// // // // // App.js
// // // // import React, { useState, useEffect } from 'react';
// // // // import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// // // // import Cookies from 'js-cookie';
// // // // import AuthForm from './components/AuthForm';

// // // // function App() {
// // // //   const [userRole, setUserRole] = useState(null);

// // // //   useEffect(() => {
// // // //     const storedUserRole = Cookies.get('userRole');
// // // //     if (storedUserRole) {
// // // //       setUserRole(storedUserRole);
// // // //     }
// // // //   }, []);

// // // //   return (
// // // //     <Router>
// // // //       <div>
// // // //         <h1>Mazingira</h1>
// // // //         <Routes>
// // // //           <Route path="/" element={<Homepage userRole={userRole} />} />
// // // //           <Route path="/don" element={<DonorComponent />} />
// // // //           <Route path="/organization" element={<OrganizationComponent />} />
// // // //           <Route path="/administrator" element={<AdministratorComponent />} />
// // // //         </Routes>
// // // //       </div>
// // // //     </Router>
// // // //   );
// // // // }

// // // // const Homepage = ({ userRole }) => {
// // // //   if (userRole) {
// // // //     return <Navigate to={`/${userRole}`} />;
// // // //   }
// // // //   return <AuthForm />;
// // // // };

// // // // export default App;

// // // import React from 'react';
// // // import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// // // import Navbar from './Navbar';
// // // import Home from './Home';
// // // import About from './About';
// // // import Contact from './Contact';
// // // import AuthForm from './AuthForm';

// // // function App() {
// // //   return (
// // //     <Router>
// // //       <div>
// // //         <Navbar />
// // //         <Switch>
// // //           <Route exact path="/" element={Home} />
// // //           <Route path="/about" element={About} />
// // //           <Route path="/contact" element={Contact} />
// // //           <Route path="/sign-up" element={AuthForm} />
// // //         </Switch>
// // //       </div>
// // //     </Router>
// // //   );
// // // }

// // // export default App;

// // import React from 'react';
// // import { BrowserRouter as Router, Route } from 'react-router-dom'; // Removed Switch import
// // import Navbar from './components/Navbar.js';
// // import Home from '.home.js';
// // import About from './components/about.js';
// // import Contact from '.contact.js';
// // import AuthForm from './components/AuthForm.jsx';

// // function App() {
// //   return (
// //     <Router>
// //       <div>
// //         <Navbar />
// //         {/* Removed Switch element */}
// //         <Route exact path="/" element={Home} />
// //         <Route path="/about" element={About} />
// //         <Route path="/contact" element={Contact} />
// //         <Route path="/sign-up" element={AuthForm} />
// //       </div>
// //     </Router>
// //   );
// // }

// // export default App;


// import React from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Navbar from './components/Navbar.js';
// import Home from './Home'; // Corrected import path
// import About from './About';
// import Contact from './Contact';
// import AuthForm from './AuthForm';

// function App() {
//   return (
//     <Router>
//       <div>
//         <Navbar />
//         <Route exact path="/" element={Home} />
//         <Route path="/about" element={About} />
//         <Route path="/contact" element={Contact} />
//         <Route path="/sign-up" element={AuthForm} />
//       </div>
//     </Router>
//   );
// }

// export default App;

import React from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import About from './components/About.js';
import Contact from './components/Contact.js';
import AuthForm from './components/AuthForm.js';
import Home from './components/Home.js';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
   <div className='app'>
    <Navbar />
    <Routes>

        <Route exact path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/authform" element={<AuthForm/>} />

    </Routes>
   </div> 
  );
}

export default App;


