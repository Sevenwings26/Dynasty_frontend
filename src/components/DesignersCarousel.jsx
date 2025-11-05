import React from "react";
import { Link } from "react-router-dom";
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


// const DesignersCarousel = ({ designers }) => {
const DesignersCarousel = () => {
  return (
    <section className="w-full py-6 bg-gray-50">
      <div className="md:container mx-auto px-4">
        <h2 className="text-2xl font-semibold text-center mb-3">
          Featured Designers
        </h2>

        {/* Scroll Container */}
        <div className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth px-2 pb-4">
          {designers.map((designer, index) => (
            <Link
              to={designer.link}
              key={index}
              className="min-w-[250px] md:min-w-[280px] flex-shrink-0 snap-center group relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition duration-500"
            >
              <img
                src={designer.image}
                alt={designer.name}
                className="h-64 w-full object-cover rounded-2xl transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/40 transition"></div>
              <div className="absolute bottom-4 left-4">
                <p className="text-white text-lg font-semibold">
                  {designer.name}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignersCarousel;
