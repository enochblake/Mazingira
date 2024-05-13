// import { useState, useEffect } from "react";
// import { Button } from "@mui/material";
// function TeamTable(){
//     const [tableItems, setTableItems] = useState([])

//     useEffect(() => {
//         fetch("https://docs.google.com/document/d/1qV6JhotSgb63DAgHMnjG_lOshUzE4-VhMKqUPhyZo90/edit?hl=en")
//         .then(res => res.json())
//         .then(tableItems => setTableItems(tableItems))
//     },[])


//     return(
//       <div>
//       <h1 className="text-4xl overflow-hidden m-3 font-bold">ORGANIZATION</h1>
//       <h3 className="text-emerald-500 m-3 ">List of Organizitions</h3>
//       <table className="min-w-full border m-3  border-gray-800">
//         <thead>
//           <tr className="bg-sky-950">
//             <th className="py-2 border-gray-500 px-4 text-slate-200 border-r">approval_status</th>
//             <th className="py-2  border-gray-500 px-4 text-slate-200 border-r">description</th>
//             <th className="py-2  border-gray-500 px-4 text-slate-200 border-r">Email</th>
//             <th className="py-2  border-gray-500 px-4 text-slate-200 border-r">id</th>
//             <th className="py-2  border-gray-500 px-4 text-slate-200 border-r">image_url</th>
//             <th className="py-2  border-gray-500 px-4 text-slate-200 border-r">name</th>
//             <th className="py-2  border-gray-500 px-4 text-slate-200">location</th>
//           </tr>
//         </thead>
//         <tbody>
//           {tableItems.map((tableItem) => (
//             <tr key={tableItem.id} className="border-t  border-gray-800">
//               <td className="py-2  border-gray-500 px-4 border-r">{tableItem.id}</td>
//               <td className="py-2  border-gray-500 px-4 text-emerald-500 border-r">{`${tableItem.firstName} ${tableItem.lastName}`}</td>
//               <td className="py-2  border-gray-500 px-4 border-r">{tableItem.email}</td>
//               <td className="py-2  border-gray-500 px-4 border-r">{tableItem.contact}</td>
//               <td className="py-2  border-gray-500 px-4 border-r">{tableItem.address1}</td>
//               <td className="py-2  border-gray-500 px-4 border-r">{tableItem.address2}</td>
//               <Button class="py-2 f bg-emerald-800 text-slate-300 w-full pr-15 pt-pl-15 1 pb-1">{tableItem.position}</Button>
//             </tr>
//           ))}
//         </tbody>
//       </table></div>
        
//     )
// }

// export default TeamTable;
// import { useState, useEffect } from "react";
// import { Button } from "@mui/material";

// function TeamTable() {
//   const [tableItems, setTableItems] = useState([]);

//   useEffect(() => {
//     // Fetch data from the provided JSON file
//     fetch("https://docs.google.com/document/d/1qV6JhotSgb63DAgHMnjG_lOshUzE4-VhMKqUPhyZo90/edit?hl=en")
//       .then((res) => res.json())
//       .then((data) => setTableItems(data.data)); // Assuming 'data' contains an array named 'data'
//   }, []);

//   return (
//     <div>
//       <h1 className="text-4xl overflow-hidden m-3 font-bold">ORGANIZATION</h1>
//       <h3 className="text-emerald-500 m-3 ">List of Organizations</h3>
//       <table className="min-w-full border m-3  border-gray-800">
//         <thead>
//           <tr className="bg-sky-950">
//             <th className="py-2 border-gray-500 px-4 text-slate-200 border-r">Approval Status</th>
//             <th className="py-2 border-gray-500 px-4 text-slate-200 border-r">Description</th>
//             <th className="py-2 border-gray-500 px-4 text-slate-200 border-r">Email</th>
//             <th className="py-2 border-gray-500 px-4 text-slate-200 border-r">ID</th>
//             <th className="py-2 border-gray-500 px-4 text-slate-200 border-r">Image URL</th>
//             <th className="py-2 border-gray-500 px-4 text-slate-200 border-r">Name</th>
//             {/* Assuming 'location' is not present in the JSON data */}
//           </tr>
//         </thead>
//         <tbody>
//           {tableItems.map((tableItem) => (
//             <tr key={tableItem.id} className="border-t border-gray-800">
//               <td className="py-2 border-gray-500 px-4 border-r">{tableItem.approval_status.toString()}</td>
//               <td className="py-2 border-gray-500 px-4 text-emerald-500 border-r">{tableItem.description}</td>
//               <td className="py-2 border-gray-500 px-4 border-r">{tableItem.email}</td>
//               <td className="py-2 border-gray-500 px-4 border-r">{tableItem.id}</td>
//               <td className="py-2 border-gray-500 px-4 border-r">
//                 <img src={tableItem.image_url} alt={`Image of ${tableItem.name}`} />
//               </td>
//               <td className="py-2 border-gray-500 px-4 border-r">{tableItem.name}</td>
//               {/* Assuming 'location' is not present in the JSON data */}
//               <td className="py-2 border-gray-500 px-4">
//                 <Button className="py-2 bg-emerald-800 text-slate-300 w-full">View Details</Button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default TeamTable;
import { useState, useEffect } from "react";
import { Button } from "@mui/material";

function TeamTable() {
  const [tableItems, setTableItems] = useState([]);

  useEffect(() => {
    // Fetch data from the provided JSON file
    fetch("")
      .then((res) => res.json())
      .then((data) => setTableItems(data.data)); // Assuming 'data' contains an array named 'data'
  }, []);

  return (
    <div>
      <h1 className="text-4xl overflow-hidden m-3 font-bold">ORGANIZATION</h1>
      <h3 className="text-emerald-500 m-3 ">List of Organizations</h3>
      <table className="min-w-full border m-3  border-gray-800">
        <thead>
          <tr className="bg-sky-950">
            <th className="py-2 border-gray-500 px-4 text-slate-200 border-r">Approval Status</th>
            <th className="py-2 border-gray-500 px-4 text-slate-200 border-r">Description</th>
            <th className="py-2 border-gray-500 px-4 text-slate-200 border-r">Email</th>
            <th className="py-2 border-gray-500 px-4 text-slate-200 border-r">ID</th>
            <th className="py-2 border-gray-500 px-4 text-slate-200 border-r">Image URL</th>
            <th className="py-2 border-gray-500 px-4 text-slate-200 border-r">Name</th>
            {/* Assuming 'location' is not present in the JSON data */}
          </tr>
        </thead>
        <tbody>
          {tableItems.map((tableItem) => (
            <tr key={tableItem.id} className="border-t border-gray-800">
              <td className="py-2 border-gray-500 px-4 border-r">{tableItem.approval_status.toString()}</td>
              <td className="py-2 border-gray-500 px-4 text-emerald-500 border-r">{tableItem.description}</td>
              <td className="py-2 border-gray-500 px-4 border-r">{tableItem.email}</td>
              <td className="py-2 border-gray-500 px-4 border-r">{tableItem.id}</td>
              <td className="py-2 border-gray-500 px-4 border-r">
                <img src={tableItem.image_url} alt={` ${tableItem.name}`} />
              </td>
              <td className="py-2 border-gray-500 px-4 border-r">{tableItem.name}</td>
              {/* Assuming 'location' is not present in the JSON data */}
              <td className="py-2 border-gray-500 px-4">
                <Button className="py-2 bg-emerald-800 text-slate-300 w-full">View Details</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TeamTable;
