// // // // // import React, { useState, useEffect } from 'react';
// // // // // import axios from 'axios';

// // // // // function DonorComponent() {
// // // // //   const [organizations, setOrganizations] = useState([]);
// // // // //   const [selectedOrganization, setSelectedOrganization] = useState(null);
// // // // //   const [donationAmount, setDonationAmount] = useState(0);
// // // // //   const [isAnonymous, setIsAnonymous] = useState(false);
// // // // //   const [repeatDonation, setRepeatDonation] = useState(false);
// // // // //   const [monthlyReminder, setMonthlyReminder] = useState(false);
// // // // //   const [beneficiaryStories, setBeneficiaryStories] = useState([]);

// // // // //   useEffect(() => {
// // // // //     fetchOrganizations();
// // // // //     fetchBeneficiaryStories();
// // // // //   }, []);

// // // // //   const fetchOrganizations = async () => {
// // // // //     try {
// // // // //       const response = await axios.get('/api/organizations');
// // // // //       setOrganizations(response.data);
// // // // //     } catch (error) {
// // // // //       console.error('Error fetching organizations:', error);
// // // // //     }
// // // // //   };

// // // // //   const fetchBeneficiaryStories = async () => {
// // // // //     try {
// // // // //       const response = await axios.get('/api/beneficiary-stories');
// // // // //       setBeneficiaryStories(response.data);
// // // // //     } catch (error) {
// // // // //       console.error('Error fetching beneficiary stories:', error);
// // // // //     }
// // // // //   };

// // // // //   const handleDonate = async () => {
// // // // //     try {
// // // // //       const response = await axios.post('/api/donate', {
// // // // //         organizationId: selectedOrganization.id,
// // // // //         amount: donationAmount,
// // // // //         isAnonymous,
// // // // //         repeatDonation,
// // // // //         monthlyReminder,
// // // // //       });
// // // // //       console.log('Donation successful:', response.data);
// // // // //       // Optionally, you can fetch organizations and beneficiary stories again to update UI
// // // // //     } catch (error) {
// // // // //       console.error('Error donating:', error);
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <div>
// // // // //       <h2>Donate to an Organization</h2>
// // // // //       <div>
// // // // //         <h3>Organizations</h3>
// // // // //         <ul>
// // // // //           {organizations.map(org => (
// // // // //             <li key={org.id} onClick={() => setSelectedOrganization(org)}>
// // // // //               {org.name}
// // // // //             </li>
// // // // //           ))}
// // // // //         </ul>
// // // // //       </div>
// // // // //       {selectedOrganization && (
// // // // //         <div>
// // // // //           <h3>Donate to {selectedOrganization.name}</h3>
// // // // //           <div>
// // // // //             <label htmlFor="donationAmount">Amount: </label>
// // // // //             <input
// // // // //               type="number"
// // // // //               id="donationAmount"
// // // // //               value={donationAmount}
// // // // //               onChange={e => setDonationAmount(e.target.value)}
// // // // //             />
// // // // //           </div>
// // // // //           <div>
// // // // //             <label>
// // // // //               <input
// // // // //                 type="checkbox"
// // // // //                 checked={isAnonymous}
// // // // //                 onChange={() => setIsAnonymous(!isAnonymous)}
// // // // //               />
// // // // //               Anonymous Donation
// // // // //             </label>
// // // // //           </div>
// // // // //           <div>
// // // // //             <label>
// // // // //               <input
// // // // //                 type="checkbox"
// // // // //                 checked={repeatDonation}
// // // // //                 onChange={() => setRepeatDonation(!repeatDonation)}
// // // // //               />
// // // // //               Repeat Donation
// // // // //             </label>
// // // // //           </div>
// // // // //           {repeatDonation && (
// // // // //             <div>
// // // // //               <label>
// // // // //                 <input
// // // // //                   type="checkbox"
// // // // //                   checked={monthlyReminder}
// // // // //                   onChange={() => setMonthlyReminder(!monthlyReminder)}
// // // // //                 />
// // // // //                 Monthly Reminder
// // // // //               </label>
// // // // //             </div>
// // // // //           )}
// // // // //           <button onClick={handleDonate}>Donate</button>
// // // // //         </div>
// // // // //       )}
// // // // //       <div>
// // // // //         <h2>Beneficiary Stories</h2>
// // // // //         <ul>
// // // // //           {beneficiaryStories.map(story => (
// // // // //             <li key={story.id}>
// // // // //               <p>{story.title}</p>
// // // // //               <p>{story.content}</p>
// // // // //             </li>
// // // // //           ))}
// // // // //         </ul>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // export default DonorComponent;


// // // // import React, { useState, useEffect } from 'react';
// // // // import axios from 'axios';

// // // // function DonorComponent() {
// // // //   const [organizations, setOrganizations] = useState([]);
// // // //   // Other state variables...

// // // //   useEffect(() => {
// // // //     // Fetch organizations and other data on component mount
// // // //     fetchOrganizations();
// // // //     // Other fetch functions...
// // // //   }, []);

// // // //   const fetchOrganizations = async () => {
// // // //     try {
// // // //       const response = await axios.get('/api/organizations');
// // // //       setOrganizations(response.data);
// // // //     } catch (error) {
// // // //       console.error('Error fetching organizations:', error);
// // // //     }
// // // //   };

// // // //   // Other fetch functions and event handlers...

// // // //   return (
// // // //     <div>
// // // //       <h2>Donor Page</h2>
// // // //       {/* Your UI elements and logic */}
// // // //     </div>
// // // //   );
// // // // }

// // // // export default DonorComponent;




// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';

// // function DonorComponent() {
// //   const [organizations, setOrganizations] = useState([]);
  
// //   useEffect(() => {
// //     fetchOrganizations();
// //   }, []);

// //   const fetchOrganizations = async () => {
// //     try {
// //       const response = await axios.get('/api/organizations');
// //       setOrganizations(response.data);
// //     } catch (error) {
// //       console.error('Error fetching organizations:', error);
// //     }
// //   };

// //   return (
// //     <div>
// //       <h2>Donate to an Organization</h2>
// //       {/* Render your UI here */}
// //     </div>
// //   );
// // }

// // export default DonorComponent;

// // Donor.js
// import React from 'react';

// function DonorComponent() {
//   return (
//     <div>
//       <h2>Welcome, Donor!</h2>
//       {/* Add your donor-specific content here */}
//     </div>
//   );
// }

// export default DonorComponent;
