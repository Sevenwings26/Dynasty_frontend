import React from "react";
import { FaArrowRight } from "react-icons/fa";
import designerEllipse from "../assets/images/designerEllipse.jpg";
import { Link } from "react-router-dom";

const Subscribe = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center h-auto md:h-1/2 py-5">
      <div className="bg-black w-full md:w-1/2 h-full py-3">
        <form className="flex flex-col px-6 md:px-9 py-9 text-white text-base h-full">
          <h1 className="py-1 text-xl">Stay Updated</h1>
          <p className="mb-3 text-sm">Subscribe for updates on Arcade Dynasty</p>
          <label htmlFor="full-name" className="text-white py-1">
            Full name
          </label>
          <input
            type="text"
            name="full-name"
            id="full-name"
            className="bg-black border border-r-slate-100 h-8 p-2"
          />
          <label htmlFor="email" className="text-white mt-3 py-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="bg-black border border-r-slate-100 h-8 p-2"
          />
          <div className="flex flex-col items-center py-4">
          <button type="submit" className="flex flex-row justify-between items-center btn-subscribe w-32 md:w-40 text-center bg-white text-black px-4 py-2 hover:bg-gray-800 transition duration-300 no-underline">
            SIGN UP <FaArrowRight />
          </button>
          </div>
        </form>
      </div>
      <div className="hidden md:w-1/2 h-full md:flex flex-col justify-center items-center common-bg py-0">
        <img src={designerEllipse} alt="Designer" className="rounded-full w-1/2 md:w-1/2 mt-5" />
        <Link to="/" className="mt-5 flex items-center text-xl text-black mb-5 no-underline">
          Designers <FaArrowRight className="ml-2"/>
        </Link>
      </div>
    </div>
  );
};

export default Subscribe;
