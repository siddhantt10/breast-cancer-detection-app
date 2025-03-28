// pages/dashboard.js
'use client'; // Ensure this runs on the client side

export default function DashboardHome() {
  return (
    <div className="animate-fadeInSlide flex items-center justify-center h-full text-gray-300 text-xl">
      <p>Choose an option from the sidebar to begin.</p>
    </div>
  );
}


// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import Sidebar from '../../components/Sidebar';
// import Navbar from '../../components/Navbar';  // Importing the already existing Navbar component

// const Dashboard = () => {
//   const [selectedSection, setSelectedSection] = useState('instruction'); // Default is instruction
//   const [isMobile, setIsMobile] = useState(false);
//   const router = useRouter();

//   useEffect(() => {
//     // Check for window width to adjust mobile/tablet responsiveness
//     const handleResize = () => {
//       if (window.innerWidth <= 768) {
//         setIsMobile(true);
//       } else {
//         setIsMobile(false);
//       }
//     };

//     window.addEventListener('resize', handleResize);
//     handleResize(); // Call it initially

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   const [formData, setFormData] = useState({
//     meanRadius: '',
//     meanTexture: '',
//     meanPerimeter: '',
//     meanArea: '',
//     meanSmoothness: '',
//     meanCompactness: '',
//     meanConcavity: '',
//     meanConcavePoints: '',
//     meanSymmetry: '',
//     meanFractalDimension: '',
//     radiusError: '',
//     textureError: '',
//     perimeterError: '',
//     areaError: '',
//     smoothnessError: '',
//     compactnessError: '',
//     concavityError: '',
//     concavePointsError: '',
//     symmetryError: '',
//     fractalDimensionError: '',
//     worstRadius: '',
//     worstTexture: '',
//     worstPerimeter: '',
//     worstArea: '',
//     worstSmoothness: '',
//     worstCompactness: '',
//     worstConcavity: '',
//     worstConcavePoints: '',
//     worstSymmetry: '',
//     worstFractalDimension: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit(formData); // Pass data to the parent for processing
//     console.log('Form Data Submitted:', formData);
//   };

//   const handleSectionChange = (section) => {
//     setSelectedSection(section);
//     router.push(`/dashboard/${section}`); // Navigate to the selected section dynamically
//   };

//   return (
//     <div className='flex flex-col bg-black'>
//       <Navbar />
//       <div className="flex mt-24">
//         <Sidebar />
//         <div className="bg-gray-600 p-4 w-full h-[89vh] lg:h-[87vh] overflow-y-auto">
//           <h2 className="text-white text-xl font-bold mb-4">Input Parameters</h2>
//           <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             {Object.keys(formData).map((key) => (
//               <div key={key} className="flex flex-col">
//                 <label htmlFor={key} className="text-white font-semibold text-sm mb-1">
//                   {key
//                     .replace(/([A-Z])/g, ' $1')
//                     .replace(/^./, (str) => str.toUpperCase())}
//                 </label>
//                 <input
//                   type="number"
//                   id={key}
//                   name={key}
//                   value={formData[key]}
//                   onChange={handleChange}
//                   className="p-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring focus:ring-bcdBlue"
//                   placeholder={`Enter ${key}`}
//                 />
//               </div>
//             ))}
//             <div className="col-span-1 md:col-span-2">
//               <button
//                 type="submit"
//                 className="w-full p-3 bg-bcdBlue text-white font-bold rounded-md hover:bg-bcdBlue-light focus:outline-none focus:ring focus:ring-bcdBlue-dark"
//               >
//                 Submit
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
