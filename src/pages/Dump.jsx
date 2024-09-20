import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import About from "./pages/About";
import { Routes, Route, useLocation } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoutes";
import PasswordResetRequest from "./components/PasswordResetRequest";
import PasswordReset from "./components/PasswordReset";
import DesignerRegistrationForm from "./pages/DesignerRegistrationForm";
import Gallery from "./pages/Gallery";
import Designers from "./pages/Designers";
import MustRead from "./pages/MustRead";
import Blog from "./pages/Blog";
import G2024 from "./pages/galleries/G2024";


function App() {
  // const location = useLocation();

  // // Condition to hide navbar on specific routes
  // const noNavbar =
  //   location.pathname === "/register" ||
  //   location.pathname === "/" ||
  //   location.pathname.includes("password") ||
  //   location.pathname === "/login";

  return (
    <>
      {/* { !noNavbar && <Navbar /> }  Conditionally render Navbar */}
      <Routes>
        {/* Auth Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/request/password_reset" element={<PasswordResetRequest />} />
        <Route path="/password-reset/:token" element={<PasswordReset/>}/>
        <Route path="/about" element={<About />} />
        <Route path="/must-read" element={<MustRead />} />
 
        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/designers" element={<Designers/>} />
          <Route path="/apply-designer" element={<DesignerRegistrationForm />} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/gallery/g-2024" element={<G2024/>}/>
        </Route>

      </Routes>
    </>
  );
}

export default App;


// // import React, { useState } from "react";
// // import Swal from "sweetalert2";
// // import Header from "../components/Header";
// // import AxiosInstance from "../api/AxiosInstance";

// // const DesignerRegistrationForm = () => {
// //   const [formData, setFormData] = useState({ brand_name: "", phone_number: "",
// //     country: "", state: "", city: "", postal_code: "", application_type: [], designer_category: [],
// //   });

// //   const handleChange = (e) => {
// //     const { name, value, type, checked } = e.target;
// //     if (type === "checkbox") {
// //         setFormData((prevState) => {
// //             const updatedValues = checked
// //                 ? [...prevState[name], value]
// //                 : prevState[name].filter((item) => item !== value);
// //             return {
// //                 ...prevState,
// //                 [name]: updatedValues,
// //             };
// //         });
// //     } else {
// //         setFormData({
// //             ...formData,
// //             [name]: value,
// //         });
// //     }
// // };


// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     try {
// //       const response = await AxiosInstance.post(
// //         `${import.meta.env.VITE_API_URL}designer-registration/`,
// //         formData,
// //       );

// //       console.log("Registration successful:", response.data);
// //       Swal.fire({
// //         title: 'Success!',
// //         text: 'Registration successful. Check your email for confirmation.',
// //         icon: 'success',
// //         confirmButtonText: 'Okay'
// //       });
// //       setFormData({
// //         brand_name: "",
// //         phone_number: "",
// //         country: "",
// //         state: "",
// //         city: "",
// //         postal_code: "",
// //         application_type: [], 
// //         designer_category: []
// //       });
// //     } catch (error) {
// //       console.error("There was an error registering!", error);
// //       Swal.fire({
// //         title: 'Error!',
// //         text: error.response?.data?.detail || 'An unexpected error occurred.',
// //         icon: 'error',
// //         confirmButtonText: 'Okay'
// //       });
// //     }
// //   };

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();

//   //   // Client-side validation (optional)
//   //   if (!formData.brand_name || !formData.phone_number || !formData.country || !formData.state || !formData.city || !formData.postal_code || formData.application_type.length === 0 || formData.designer_category.length === 0) {
//   //     Swal.fire({
//   //       title: 'Error!',
//   //       text: 'Please fill in all required fields.',
//   //       icon: 'error',
//   //       confirmButtonText: 'Okay'
//   //     });
//   //     return;
//   //   }

//   //   try {
//   //     const response = await AxiosInstance.post(
//   //       `${import.meta.env.VITE_API_URL}designer-registration/`,
//   //       formData
//   //     );

//   //     console.log("Registration successful:", response.data);
//   //     Swal.fire({
//   //       title: 'Success!',
//   //       text: 'Registration successful. Check your email for confirmation.',
//   //       icon: 'success',
//   //       confirmButtonText: 'Okay'
//   //     });
//   //     setFormData({
//   //       brand_name: "",
//   //       phone_number: "",
//   //       country: "",
//   //       state: "",
//   //       city: "",
//   //       postal_code: "",
//   //       application_type: [],
//   //       designer_category: []
//   //     });
//   //   } catch (error) {
//   //     console.error("There was an error registering!", error);
//   //     let errorMessage = "An unexpected error occurred.";

//   //     // Check for detailed error message from backend
//   //     if (error.response && error.response.data && error.response.data.detail) {
//   //       errorMessage = error.response.data.detail;
//   //     }

//   //     Swal.fire({
//   //       title: 'Error!',
//   //       text: errorMessage,
//   //       icon: 'error',
//   //       confirmButtonText: 'Okay'
//   //     });
//   //   }
//   // };

// // import React, { useState } from "react";
// // import Swal from "sweetalert2";
// // import Header from "../components/Header";
// // import AxiosInstance from "../api/AxiosInstance";

// // const DesignerRegistrationForm = () => {
// //   const [formData, setFormData] = useState({
// //     brand_name: "",
// //     phone_number: "",
// //     country: "",
// //     state: "",
// //     city: "",
// //     postal_code: "",
// //     application_type: [],
// //     designer_category: [],
// //   });

// //   const handleChange = (e) => {
// //     const { name, value, type, checked } = e.target;
// //     if (type === "checkbox") {
// //       setFormData((prevState) => {
// //         const updatedValues = checked
// //           ? [...prevState[name], value]
// //           : prevState[name].filter((item) => item !== value);
// //         return {
// //           ...prevState,
// //           [name]: updatedValues,
// //         };
// //       });
// //     } else {
// //       setFormData({
// //         ...formData,
// //         [name]: value,
// //       });
// //     }
// //   };


// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     AxiosInstance.post('designer/register/', formData,
// //       {
// //         headers: {
// //           Authorization: `Token ${token}` // Or `Bearer ${token}` depending on your setup
// //         }
// //       })
// //       .then((response) => {
// //         alert("Registration Successful");
// //       })
// //       .catch((error) => {
// //         console.error(error);
// //         alert("An error occurred");
// //       });
// //   };

// import React, { useState } from "react";
// import Swal from "sweetalert2";
// import AxiosInstance from "../api/AxiosInstance";
// import Header from '../components/Header'

// const DesignerRegistrationForm = () => {
//   const [formData, setFormData] = useState({
//     brand_name: "",
//     phone_number: "",
//     country: "",
//     state: "",
//     city: "",
//     postal_code: "",
//     application_type: [], // Array to store selected application types
//     designer_category: [], // Array to store selected designer categories
//   });

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     if (type === "checkbox") {
//       setFormData((prevState) => {
//         const updatedValues = checked
//           ? [...prevState[name], value] // Add selection to the array
//           : prevState[name].filter((item) => item !== value); // Remove selection from the array
//         return {
//           ...prevState,
//           [name]: updatedValues,
//         };
//       });
//     } else {
//       setFormData({
//         ...formData,
//         [name]: value,
//       });
//     }
//   };

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
  
//   //   const applicationTypeString = formData.application_type.join(",");
//   //   const designerCategoryString = formData.designer_category.join(",");
  
//   //   const token = localStorage.getItem('Token');
  
//   //   try {
//   //     if (token) {
//   //       await AxiosInstance.post("/designer/register/", {
//   //         ...formData, // Send all form data
//   //         ...(applicationTypeString && { application_type: applicationTypeString }), // Include if you're sending as strings
//   //         ...(designerCategoryString && { designer_category: designerCategoryString }), // Include if you're sending as strings
//   //         // ... (If you prefer sending IDs, add logic to handle IDs here)
//   //       }, {
//   //         headers: {
//   //           Authorization: `Token ${token}`, // Or `Bearer ${token}` depending on your setup
//   //         },
//   //       });
  
//   //       Swal.fire("Success!", "Registration Successful!", "success");
//   //       // Clear form data or redirect to a confirmation page
//   //     } else {
//   //       Swal.fire("Error!", "Authentication token not found. Please log in again.", "error");
//   //     }
//   //   } catch (error) {
//   //     console.error("Error:", error.response ? error.response.data : error.message);
//   //     Swal.fire("Error!", "An error occurred. Please try again.", "error");
//   //   }
//   // };
//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     // Assuming formData.application_type and formData.designer_category are arrays of objects with an id property
//     const applicationTypeIds = formData.application_type.map(type => type.id);
//     const designerCategoryIds = formData.designer_category.map(category => category.id);
  
//     const token = localStorage.getItem('Token');
  
//     try {
//       if (token) {
//         const response = await AxiosInstance.post("/designer/register/", {
//           ...formData, // Send all other form data
//           application_type: applicationTypeIds,
//           designer_category: designerCategoryIds,
//         }, {
//           headers: {
//             Authorization: `Token ${token}`, // Or `Bearer ${token}` depending on your setup
//           },
//         });
  
//         Swal.fire("Success!", "Registration Successful!", "success");
//         // Clear form data or redirect to a confirmation page
//       } else {
//         Swal.fire("Error!", "Authentication token not found. Please log in again.", "error");
//       }
//     } catch (error) {
//       console.error("Error:", error.response ? error.response.data : error.message);
//       Swal.fire("Error!", "An error occurred. Please try again.", "error");
//     }
//   };
  

//   return (
//     <div>
//       <Header />
//       <div className="container w-full flex flex-col items-center justify-center m-auto mt-4">
//         <h1 className="text-2xl font-bold">Designer Registration Form</h1>
//         <h1 className="text-xl font-bold">
//           Arcade Dynasty Designer and Exhibitor registration form
//         </h1>
//         <p className="text-center">
//           This registration is solely for Designers / Exhibitors who wish to participate in Arcade Dynasty Fashion. General Attendees are not qualified or allowed to apply.
//         </p>
//       </div>

//       <form
//         onSubmit={handleSubmit}
//         className="container mt-4 w-full mx-auto p-6 bg-white rounded-lg shadow-md"
//         style={{ fontFamily: "Libre Bodoni" }}
//       >
//         {/* Form Fields */}
//         <div className="mb-4">
//           <label
//             className="block text-gray-700 text-sm font-bold mb-2"
//             htmlFor="brand_name"
//           >
//             Brand Name
//           </label>
//           <input
//             id="brand_name" name="brand_name" type="text" value={formData.brand_name} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md"
//             required
//           />
//         </div>

//         {/* Phone Number */}
//         <div className="mb-4">
//           <label
//             className="block text-gray-700 text-sm font-bold mb-2"
//             htmlFor="phone_number"
//           >
//             Phone Number
//           </label>
//           <input
//             id="phone_number"
//             name="phone_number"
//             type="text"
//             value={formData.phone_number}
//             onChange={handleChange}
//             className="w-full p-2 border border-gray-300 rounded-md"
//             required
//           />
//         </div>

//         {/* Address Details */}
//         <div className="mb-4">
//           <label
//             className="block text-gray-700 text-sm font-bold mb-2"
//             htmlFor="country"
//           >
//             Country
//           </label><input
//             id="country"            name="country"type="text"value={formData.country} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md"  required
//           />
//         </div>

//         <div className="md:flex md:flex-row justify-between">
//           <div className="mb-4 md:w-1/2 md:px-2">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="state">              State
//             </label>
//             <input id="state" name="state"type="text"value={formData.state}onChange={handleChange}className="w-full p-2 border border-gray-300 rounded-md"required/>
//           </div>
//           <div className="mb-4 md:w-1/2 md:px-2">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="city"> City</label>
//             <input  id="city"name="city"type="text" value={formData.city}  onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md"
//               required
//             />
//           </div>
//         </div>

//         <div className="mb-4">
//           <label
//             className="block text-gray-700 text-sm font-bold mb-2"
//             htmlFor="postal_code"
//           >
//             Postal Code
//           </label>
//           <input
//             id="postal_code"
//             name="postal_code"
//             type="text"
//             value={formData.postal_code}
//             onChange={handleChange}
//             className="w-full p-2 border border-gray-300 rounded-md"
//             required
//           />
//         </div>

//         {/* Application Type */}
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2">
//             Application Type
//           </label>
//           <label key="exhibition">
//             <input
//               type="checkbox"
//               name="application_type"
//               value="exhibition"
//               onChange={handleChange}
//             />{" "}
//             Exhibition
//           </label>{" "}
//           <br />
//           <label key="runway">
//             <input
//               type="checkbox"
//               name="application_type"
//               value="runway"
//               onChange={handleChange}
//             />{" "}
//             Runway
//           </label>
//           <br />
//           <label key="both">
//             <input
//               type="checkbox"
//               name="application_type"
//               value="both"
//               onChange={handleChange}
//             />{" "}
//             Both
//           </label>
//         </div>

//         {/* Designer Category */}
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2">
//             Designer Category
//           </label>
//           <label key="Fashion Designer">
//             <input
//               type="checkbox"
//               name="designer_category"
//               value="Fashion Designer"
//               onChange={handleChange}
//             />{" "}
//             Fashion Designer
//           </label>
//           <br />
//           <label key="Exclusive Designer">
//             <input
//               type="checkbox"
//               name="designer_category"
//               value="Exclusive Designer"
//               onChange={handleChange}
//             />{" "}
//             Exclusive Designer
//           </label>{" "}
//           <br />
//           <label key="Stylists">
//             <input
//               type="checkbox"
//               name="designer_category"
//               value="Stylists"
//               onChange={handleChange}
//             />{" "}
//             Stylists
//           </label>
//           <br />
//           <label key="Accessory Designer">
//             <input
//               type="checkbox"
//               name="designer_category"
//               value="Accessory Designer"
//               onChange={handleChange}
//             />{" "}
//             Accessory Designer
//           </label>
//           <br />
//           <label key="Emerging Designer">
//             <input
//               type="checkbox"
//               name="designer_category"
//               value="Emerging Designer"
//               onChange={handleChange}
//             />{" "}
//             Emerging Designer
//           </label>
//           <br />
//           <label key="Established Designer">
//             <input
//               type="checkbox"
//               name="designer_category"
//               value="Established Designer"
//               onChange={handleChange}
//             />{" "}
//             Established Designer
//           </label>
//         </div>

//         <button
//           type="submit"
//           className="w-40 p-2 text-xl bg-gray-800 text-white rounded-md"
//         >
//           Submit
//         </button>
//       </form>
//       <div className="w-full bg-black mt-20">
//         <div className="container flex flex-row items-center justify-between text-white">
//           <p>
//             &copy;2024. Arcade Dynasty. All rights reserved. We may earn a portion
//             of sales from products purchased through our site as part of our
//             affiliate partnerships with retailers. The material on the site may
//             not be reproduced, distributed, or otherwise used, except with prior
//             written permission.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DesignerRegistrationForm;
