import React, { useState } from "react";
import Swal from "sweetalert2";
import AxiosInstance from "../api/AxiosInstance";
import Header from '../components/Header'
import { useNavigate } from "react-router-dom";

const DesignerRegistrationForm = () => {
  const [formData, setFormData] = useState({
    brand_name: "",
    phone_number: "",
    email: "",
    country: "",
    state: "",
    city: "",
    postal_code: "",
    application_type: [], // Array to store selected application types
    designer_category: [], // Array to store selected designer categories
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prevState) => {
        const updatedValues = checked
          ? [...prevState[name], value] // Add selection to the array
          : prevState[name].filter((item) => item !== value); // Remove selection from the array
        return {
          ...prevState,
          [name]: updatedValues,
        };
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };
  
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the form from refreshing the page

    AxiosInstance.post('api/applications/', formData)
      .then(response => {
        Swal.fire({
          title: 'Success!',
          text: "Application submitted successfully. You would have received a confirmatory mail.\n Please do not re-apply.",
          icon: 'success',
          confirmButtonText: 'OK'
        }).then(() => {
          navigate('/'); // Navigate after successful alert
        });
        console.log('Application submitted successfully:', response.data);
      })
      .catch(error => {
        Swal.fire({
          title: 'Error!',
          text: 'There was an error submitting the application.',
          icon: 'error',
          confirmButtonText: 'OK'
        });
        console.error('There was an error submitting the application:', error);
      });
  };

  return (
    <div>
      <Header />
      <div className="container w-full flex flex-col items-center justify-center m-auto mt-4">
        <h1 className="text-2xl font-bold">Designer Registration Form</h1>
        <h1 className="text-xl font-bold">
          Arcade Dynasty Designer and Exhibitor registration form
        </h1>
        <p className="text-center">
          This registration is solely for Designers / Exhibitors who wish to participate in Arcade Dynasty Fashion. General Attendees are not qualified or allowed to apply.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="container mt-4 w-full mx-auto p-6 bg-white rounded-lg shadow-md" style={{ fontFamily: "Libre Bodoni" }} >
        {/* Form Fields */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="brand_name" > Brand Name
          </label>
          <input id="brand_name" name="brand_name" type="text" value={formData.brand_name} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md" required />
        </div>

        {/* Phone Number */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone_number"> Phone Number
          </label>
          <input id="phone_number" name="phone_number" type="text" value={formData.phone_number} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone_number"> Email
          </label>
          <input id="email" name="email" type="text" value={formData.email} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md" required />
        </div>

        {/* Address Details */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="country"
          >
            Country
          </label><input
            id="country" name="country"type="text"value={formData.country} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md"  required
          />
        </div>

        <div className="md:flex md:flex-row justify-between">
          <div className="mb-4 md:w-1/2 md:px-2">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="state">              State
            </label>
            <input id="state" name="state"type="text"value={formData.state}onChange={handleChange}className="w-full p-2 border border-gray-300 rounded-md"required/>
          </div>
          <div className="mb-4 md:w-1/2 md:px-2">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="city"> City</label>
            <input  id="city"name="city"type="text" value={formData.city}  onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="postal_code"
          >
            Postal Code
          </label>
          <input
            id="postal_code"
            name="postal_code"
            type="text"
            value={formData.postal_code}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Application Type */}
        <div className="mb-4"> <label className="block text-gray-700 text-sm font-bold mb-2"> Application Type
          </label> 
          <label key="exhibition">
            <input type="checkbox" name="application_type" value="exhibition" onChange={handleChange} />{" "}Exhibition
          </label>{" "}
          <br />
          <label key="runway"><input type="checkbox" name="application_type" value="runway" onChange={handleChange} />{" "} Runway</label>
          <br />
          <label key="both"> <input type="checkbox" name="application_type" value="both" onChange={handleChange} />{" "}Both</label>
        </div>

        {/* Designer Category */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Designer Category</label>
          <label key="Fashion Designer"><input type="checkbox" name="designer_category" value="Fashion Designer" onChange={handleChange}/>{" "}Fashion Designer</label>
          <br />
          <label key="Exclusive Designer"><input type="checkbox" name="designer_category" value="Exclusive Designer" onChange={handleChange}/>{" "}Exclusive Designer</label>{" "}
          <br />
          <label key="Stylists"><input type="checkbox" name="designer_category" value="Stylists" onChange={handleChange}/>{" "}Stylists</label>
          <br />
          <label key="Accessory Designer"><input type="checkbox" name="designer_category" value="Accessory Designer" onChange={handleChange}/>{" "}Accessory Designer</label>
          <br />
          <label key="Emerging Designer">
            <input
              type="checkbox"
              name="designer_category"
              value="Emerging Designer"
              onChange={handleChange}
            />{" "}
            Emerging Designer
          </label>
          <br />
          <label key="Established Designer">
            <input
              type="checkbox"
              name="designer_category"
              value="Established Designer"
              onChange={handleChange}
            />{" "}
            Established Designer
          </label>
        </div>

        <button          type="submit" className="w-40 p-2 text-xl bg-gray-800 text-white rounded-md">Submit</button>
      </form>
      <div className="w-full bg-black mt-20">
        <div className="container flex flex-row items-center justify-between text-white">
          <p>
            &copy;2024. Arcade Dynasty. All rights reserved. We may earn a portion
            of sales from products purchased through our site as part of our
            affiliate partnerships with retailers. The material on the site may
            not be reproduced, distributed, or otherwise used, except with prior
            written permission.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DesignerRegistrationForm;

