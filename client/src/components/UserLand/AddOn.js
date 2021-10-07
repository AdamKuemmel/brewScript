// import React from "react";
// import { useLocation, useHistory } from "react-router-dom";

// const AddonsList = ({ addons, title }) => {
//   if (!profiles.length) {
//     return <h3>No Products available!</h3>;
//   }

//   return (
//     <div>
//       <h3 className="text-primary">{title}</h3>
//       <div className="flex-row justify-space-between my-4">
//         {addons &&
//           addons.map((addon) => (
//             <div key={addon._id} className="col-12 col-xl-6">
//               <div className="card mb-3">
//                 <h4 className="card-header bg-dark text-light p-2 m-0">
//                   {addon.name} <br />
//                   <span className="text-white" style={{ fontSize: "1rem" }}>
//                     {addon.description}
//                   </span>
//                 </h4>

//                 <Link
//                   className="btn btn-block btn-squared btn-light text-dark"
//                   to={`/addons/${addons._id}`}
//                 >
//                   Go to item
//                 </Link>
//               </div>
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// };

// export default AddOn;
