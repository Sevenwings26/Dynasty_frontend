import React, { useState, useEffect } from "react";
import AxiosInstance from "../api/AxiosInstance";
import Swal from "sweetalert2";
import Header from "../components/Header";

const DesignerRegistrationForm = () => {
  const [formData, setFormData] = useState({
    brand_name: "",
    email: "",
    phone_number: "",
    country: "",
    state: "",
    city: "",
    postal_code: "",
    application_type: [], // Array to hold selected application types
    designer_category: [], // Array to hold selected designer categories
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData(prevState => ({
          ...prevState,
          [name]: checked ? [...prevState[name], value] : prevState[name].filter(item => item !== value)
      }));
    } else {
      setFormData({
          ...formData,
          [name]: value
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    AxiosInstance.post('register-designer/', formData)
        .then(response => {
          console.log('Registration successful:', response.data);
          Swal.fire({
            icon: "success",
            title: "Success!",
            text: "Your form has been submitted successfully.",
          });
        })
        .catch(error => {
          console.error('There was an error registering!', error);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong. Please try again later.",
          });
        }); 
  };

  return (
    <div>
      <Header />
      <form
        onSubmit={handleSubmit}
        className="container mt-4 w-full mx-auto p-6 bg-white rounded-lg shadow-md"
        style={{ fontFamily: "Libre Bodoni" }}
      >
        {/* Form Fields */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="brand_name">
            Brand Name
          </label>
          <input
            id="brand_name"
            name="brand_name"
            type="text"
            value={formData.brand_name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Phone Number */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone_number">
            Phone Number
          </label>
          <input
            id="phone_number"
            name="phone_number"
            type="text"
            value={formData.phone_number}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Address Details */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="country">
            Country
          </label>
          <input
            id="country"
            name="country"
            type="text"
            value={formData.country}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="md:flex md:flex-row justify-between">
          <div className="mb-4 md:w-1/2 md:px-2">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="state">
              State
            </label>
            <input
              id="state"
              name="state"
              type="text"
              value={formData.state}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4 md:w-1/2 md:px-2">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="city">
              City
            </label>
            <input
              id="city"
              name="city"
              type="text"
              value={formData.city}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="postal_code">
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
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Application Type
          </label>
          <label key="exhibition">
            <input
              type="checkbox"
              name="application_type"
              value="exhibition"
              onChange={handleChange}
            /> Exhibition
          </label>
          <label key="runway">
            <input
              type="checkbox"
              name="application_type"
              value="runway"
              onChange={handleChange}
            /> Runway
          </label>
          <label key="both">
            <input
              type="checkbox"
              name="application_type"
              value="both"
              onChange={handleChange}
            /> Both
          </label>
        </div>

        {/* Designer Category */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Designer Category
          </label>
          <label key="Fashion Designer">
            <input
              type="checkbox"
              name="designer_category"
              value="Fashion Designer"
              onChange={handleChange}
            /> Fashion Designer
          </label>
          <label key="Exclusive Designer">
            <input
              type="checkbox"
              name="designer_category"
              value="Exclusive Designer"
              onChange={handleChange}
            /> Exclusive Designer
          </label>
          <label key="Stylists">
            <input
              type="checkbox"
              name="designer_category"
              value="Stylists"
              onChange={handleChange}
            /> Stylists
          </label>
          <label key="Accessory Designer">
            <input
              type="checkbox"
              name="designer_category"
              value="Accessory Designer"
              onChange={handleChange}
            /> Accessory Designer
          </label>
          <label key="Emerging Designer">
            <input
              type="checkbox"
              name="designer_category"
              value="Emerging Designer"
              onChange={handleChange}
            /> Emerging Designer
          </label>
          <label key="Established Designer">
            <input
              type="checkbox"
              name="designer_category"
              value="Established Designer"
              onChange={handleChange}
            /> Established Designer
          </label>
        </div>

        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded-md">
          Register
        </button>
      </form>
    </div>
  );
};

export default DesignerRegistrationForm;
