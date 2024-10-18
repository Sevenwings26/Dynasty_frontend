import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import g2019 from "../assets/images/gallery/g2019.jpg";
import g2020 from "../assets/images/gallery/g2020.jpg";
// import g2021 from "../assets/images/gallery/g2021.jpg";
import g2022 from "../assets/images/gallery/g2022.jpg";
// import g2023 from "../assets/images/gallery/g2023.jpg";
// import g2024 from "../assets/images/gallery/g2024.jpg";
import bridal100 from "../assets/images/gallery/bridal100.jpg";
import arcade44 from "../assets/images/gallery/arcade44.jpg";
import urban1 from "../assets/images/gallery/urban1.jpg";
import elAlmor from "../assets/images/gallery/elAlmor.jpg";

import { Link } from "react-router-dom";

const Gallery = () => {
  const images = [
    { title: 'Arcade Fashion Weekend', image: arcade44, link:"/gallery/g-2024" },
    { title: 'Bridal Fashion Show', image: bridal100, link:"/gallery/g-2023" },
    { title: '2022', image: g2022, link:"/gallery/g-2022" },
    { title: 'Urban-Style Fashion Show', image: urban1, link:"/gallery/g-2021" },
    { title: 'El-Almor', image: elAlmor, link:"/gallery/g-2020" },
    { title: '2019', image: g2019, link:"/gallery/g-2019" },
  ];

  return (
    <div>
      <Header />
      <div className="flex flex-col items-center justify-center w-full m-auto text-center bg-black">
        <div className="w-2/3 mt-4">
          <h1 className="uppercase text-3xl font-bold text-white">
            Key Moments from Past Arcade Fashion Week Seasons & Events
          </h1>
        </div>
        <div>
        <Link
        to="/apply-designer"
        className="no-underline flex flex-col items-center justify-center m-3"
      >
        {/* Apply button with text animation and no underline */}
        <div className="w-2/3 text-center bg-white text-black p-2 hover:bg-gray-800 transition duration-300 no-underline">
          <span className="animate-pulse uppercase">Apply as a Designer</span>
        </div>
      </Link>
        </div>
        <div className="w-full py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {images.map((item, index) => (
              <Link to={item.link} 
              // to={item.link} 
              key={index}>
                <div key={index}
                  className="relative bg-cover m-auto bg-center w-44 h-44 md:w-72 md:h-72 rounded-full"
                  style={{
                    backgroundImage: `url(${item.image})`,
                  }}
                >
                  <h2 className="absolute bottom-0 left-0 w-full text-center bg-black bg-opacity-50 text-white text-1xl md:text-2xl rounded-b-full">
                     {item.title}
                  </h2>
                </div>
               </Link> 
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
