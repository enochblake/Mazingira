// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import AddBeneficiary from '../BeneficiaryInventory/AddBeneficiary';
// import BeneficiaryInventory from '../BeneficiaryInventory/BeneficiaryInventory';

// function BeneficiaryInventoryPage() {
//   const [selectedContent, setSelectedContent] = useState('details');

//   const handleContentChange = (content) => {
//     setSelectedContent(content);
//   };

//   return (
//     <div className='bg-gray-100 min-h-screen'>
//       <div className='container mx-auto p-5'>
//         <h1 className='text-center text-orange-700 font-bold text-5xl mx-auto mt-4'>
//           ORGANIZATION STUFF
//         </h1>
//         <div className='flex justify-center my-4'>
//           <Link
//             to='#'
//             className={`mx-4 text-black  font-bold text-lg ${
//               selectedContent === 'add_beneficiary'
//                 ? 'border-b-4 border-orange-500'
//                 : ''
//             }`}
//             onClick={() => handleContentChange('add_beneficiary')}
//           >
//             Create Beneficiary
//           </Link>
//           <Link
//             to='#'
//             className={`mx-4 text-black font-bold text-lg ${
//               selectedContent === 'beneficiary_inventory'
//                 ? 'border-b-4 border-orange-500'
//                 : ''
//             }`}
//             onClick={() => handleContentChange('beneficiary_stories')}
//           >
//             Beneficiary Stories
//           </Link>
//         </div>
//         {selectedContent === 'add_beneficiary' && <AddBeneficiary />}
//         {selectedContent === 'beneficiary_stories' && <BeneficiaryInventory />}
//       </div>
//     </div>
//   );
// }

// export default BeneficiaryInventoryPage;
