// // // import React, { useState, useEffect } from 'react';
// // // import axios from 'axios';

// // // function AdministratorComponent() {
// // //   const [applications, setApplications] = useState([]);

// // //   useEffect(() => {
// // //     fetchApplications();
// // //   }, []);

// // //   const fetchApplications = async () => {
// // //     try {
// // //       const response = await axios.get('/api/applications');
// // //       setApplications(response.data);
// // //     } catch (error) {
// // //       console.error('Error fetching applications:', error);
// // //     }
// // //   };

// // //   const approveApplication = async (id) => {
// // //     try {
// // //       await axios.put(`/api/applications/${id}/approve`);
// // //       fetchApplications();
// // //     } catch (error) {
// // //       console.error('Error approving application:', error);
// // //     }
// // //   };

// // //   const rejectApplication = async (id) => {
// // //     try {
// // //       await axios.put(`/api/applications/${id}/reject`);
// // //       fetchApplications();
// // //     } catch (error) {
// // //       console.error('Error rejecting application:', error);
// // //     }
// // //   };

// // //   const deleteOrganization = async (id) => {
// // //     try {
// // //       await axios.delete(`/api/organizations/${id}`);
// // //       fetchApplications();
// // //     } catch (error) {
// // //       console.error('Error deleting organization:', error);
// // //     }
// // //   };

// // //   return (
// // //     <div>
// // //       <h2>Organization Applications</h2>
// // //       <ul>
// // //         {applications.map(application => (
// // //           <li key={application.id}>
// // //             <p>{application.name}</p>
// // //             <button onClick={() => approveApplication(application.id)}>Approve</button>
// // //             <button onClick={() => rejectApplication(application.id)}>Reject</button>
// // //             <button onClick={() => deleteOrganization(application.id)}>Delete</button>
// // //           </li>
// // //         ))}
// // //       </ul>
// // //     </div>
// // //   );
// // // }

// // // export default AdministratorComponent;

// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';

// // function AdministratorComponent() {
// //   // State variables and useEffect...

// //   return (
// //     <div>
// //       <h2>Administrator Page</h2>
// //       {/* Your UI elements and logic */}
// //     </div>
// //   );
// // }

// // export default AdministratorComponent;

// import React from 'react';

// function AdministratorComponent() {
//   // Remove unused imports and variables
//   // const [applications, setApplications] = useState([]);
//   // useEffect(() => {
//   //   fetchApplications();
//   // }, []);

//   // const fetchApplications = async () => {
//   //   try {
//   //     const response = await axios.get('/api/applications');
//   //     setApplications(response.data);
//   //   } catch (error) {
//   //     console.error('Error fetching applications:', error);
//   //   }
//   // };

//   // const approveApplication = async (id) => {
//   //   try {
//   //     await axios.put(`/api/applications/${id}/approve`);
//   //     fetchApplications();
//   //   } catch (error) {
//   //     console.error('Error approving application:', error);
//   //   }
//   // };

//   // const rejectApplication = async (id) => {
//   //   try {
//   //     await axios.put(`/api/applications/${id}/reject`);
//   //     fetchApplications();
//   //   } catch (error) {
//   //     console.error('Error rejecting application:', error);
//   //   }
//   // };

//   // const deleteOrganization = async (id) => {
//   //   try {
//   //     await axios.delete(`/api/organizations/${id}`);
//   //     fetchApplications();
//   //   } catch (error) {
//   //     console.error('Error deleting organization:', error);
//   //   }
//   // };

//   return (
//     <div>
//       <h2>Organization Applications</h2>
//       {/* Render your UI here */}
//     </div>
//   );
// }

// export default AdministratorComponent;

