import React from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";

import { Link } from 'react-router-dom';

import DT1 from '../assets/images/designers/DHVEN TOUCH/DT1.jpg'
import OD1 from '../assets/images/designers/ODESBABA COUTURE/OD1.jpg'
import FB2 from '../assets/images/designers/Fabique Beauty/FB2.jpg'
import AT6 from '../assets/images/designers/R.M Atelier/AT6.jpg'
import S1 from '../assets/images/designers/sannah/S1.jpg'
// import S1 from 


const designers = [
  {
    link: '/designers/sannah-fashion-interview',
    name: 'SANNAH FASHION HUB',
    image: S1,
  },
  {
    link: '/designers/rm-atelier',
    name: 'R.M. ATELIER',
    image: AT6,
  },
  {
    // id: 1,
    link: '/designers/fabrique-beauty',
    name: 'FABRIQUE BEAUTY',
    image: FB2,
  },
  {
    link: '/designers/dhven-touch',
    name: 'DHVEN TOUCH',
    image: DT1,
  },
  {
    link: '/designers/odesbaba-couture',
    name: 'ODESBABA COUTURE',
    image: OD1,
  },
];


const Designers = () => {
  return (
    <div>
      <Header/>
    <div className="min-h-screen bg-gray-100 px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-10">Meet Our Designers</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {designers.map((designer) => (
          <Link
            to={`${designer.link}`}
            key={designer.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 decoration-white"
          >
            <img
              src={designer.image}
              alt={designer.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-black">{designer.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  < Footer/>
    </div>
  );


};

export default Designers;
