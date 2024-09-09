import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2"; // Import SweetAlert2
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
    application_type: [], // Array of IDs
    designer_category: [], // Array of IDs
  });

  const [applicationTypes, setApplicationTypes] = useState([]);
  const [designerCategories, setDesignerCategories] = useState([]);

  // Fetch application types and designer categories from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const baseUrl = import.meta.env.VITE_API_URL;
        const appTypeResponse = await axios.get(`${baseUrl}/api/application-types/`);
        const designerCatResponse = await axios.get(`${baseUrl}/api/designer-categories/`);
        
        setApplicationTypes(appTypeResponse.data); // Assume API returns [{ id, name }]
        setDesignerCategories(designerCatResponse.data); // Assume API returns [{ id, name }]
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: checked
          ? [...prevData[name], parseInt(value)] // Store the ID (integer)
          : prevData[name].filter((item) => item !== parseInt(value)), // Remove ID if unchecked
      }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare the data to send
    const preparedData = {
      ...formData,
      application_type: formData.application_type, // Send as array of IDs
      designer_category: formData.designer_category, // Send as array of IDs
    };

    const baseUrl = import.meta.env.VITE_API_URL;
    const designerReg = `${baseUrl}api/register-designer/`;

    axios
      .post(designerReg, preparedData)
      .then((response) => {
        console.log("Form submitted successfully:", response.data);
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Your form has been submitted successfully.',
        });
        // Handle success
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong. Please try again later.',
        });
        // Handle error
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
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="brand_name"
          >
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

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
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

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="phone_number"
          >
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

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="country"
          >
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
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="state"
            >
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
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="city"
            >
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

        <fieldset className="mb-4">
          <legend className="text-gray-700 text-xl font-semibold mb-2">
            I / We would like to submit an application for the following:
          </legend>
          <div className="flex flex-col">
            {applicationTypes.map((type) => (
              <label key={type.id} className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="application_type"
                  value={type.id} // Use the ID as the value
                  checked={formData.application_type.includes(type.id)}
                  onChange={handleChange}
                  className="form-checkbox"
                />
                <span className="ml-2">{type.name}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset className="mb-4">
          <legend className="text-gray-700 text-xl font-semibold mb-2">
            Designers Category Selection:
          </legend>
          <div className="flex flex-col">
            {designerCategories.map((category) => (
              <label key={category.id} className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="designer_category"
                  value={category.id} // Use the ID as the value
                  checked={formData.designer_category.includes(category.id)}
                  onChange={handleChange}
                  className="form-checkbox"
                />
                <span className="ml-2">{category.name}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <button
          type="submit"
          className="w-60 bg-black text-white p-2 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Submit
        </button>
      </form>
      <div className="bg-black mt-3" style={{ fontFamily: "Libre Bodoni" }}>
        {/* Footer */}
        <div className="container flex flex-row items-center justify-between text-center text-white p-4">
          <h2
            className="text-3xl font-bold"
            style={{ fontFamily: "Limelight" }}
          >
            Arcade
            <br />
            <span className="block text-3xl">Dynasty</span>
          </h2>
          <p className="text-lg mt-2">General inquiries</p>
        </div>
        <div className="container flex flex-row items-center justify-between text-white">
          <p>&copy;2024. Arcade Dynasty. All rights reserved. We may earn a portion of sales from products purchased through our site as part of our affiliate partnerships with retailers. The material on the site may not be reproduced, distributed, or otherwise used, except with prior permission.</p>
        </div>
      </div>
    </div>
  );
};

export default DesignerRegistrationForm;
