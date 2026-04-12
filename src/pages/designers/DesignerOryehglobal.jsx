import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import S1 from '../../assets/images/designers/Oryehglobal/or1.jpeg'
import S2 from '../../assets/images/designers/Oryehglobal/or2.jpeg'
import S3 from '../../assets/images/designers/Oryehglobal/or3.jpeg'
import S4 from '../../assets/images/designers/Oryehglobal/or4.jpeg'
import S5 from '../../assets/images/designers/Oryehglobal/or5.jpeg'
// import S6 from '../../assets/images/designers/Oryehglobal/or6.jpeg'
import S7 from '../../assets/images/designers/Oryehglobal/or7.jpeg'

import S8 from '../../assets/images/designers/Oryehglobal/or8.jpeg'
import S9 from '../../assets/images/designers/Oryehglobal/or9.jpeg'
import S10 from '../../assets/images/designers/Oryehglobal/or10.jpeg'

const images = [S1, S2, S3, S4, S5, S7, S8, S9, S10]

const DesignerOryehglobal = () => {
  return (
    <div>
    <Header/>
    <div className="bg-white min-h-screen py-10 px-6 md:px-20">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10">
        Oryehglobal Clothing: <span className="text-red-500">The New Men’s Collection</span>
        </h1>

        {/* Hero Section Images */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {[S1, S2, S3, S4, S7, S8, S9, S10].map((src, i) => (
            <div
            key={i}
            // className="relative group overflow-hidden rounded-2xl bg-[url('https://www.toptal.com/designers/subtlepatterns/patterns/dot-grid.png')] bg-cover p-1 shadow-md hover:shadow-xl transition duration-500"
            className="relative group overflow-hidden rounded-2xl bg-white bg-cover p-1 shadow-md hover:shadow-xl transition duration-500"
            >
            <img
                src={src}
                alt="Sannah fashion"
                className="rounded-xl h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
            </div>
        ))}
        </div>


        {/* Interview Content */}
        <div className="space-y-8 leading-relaxed text-gray-800">
          <div>
            <h2 className="font-semibold text-xl mb-2">Confidence starts with what you wear
              </h2> 
            <p className="mb-2">
          Our new men’s collection blends modern design with timeless craftsmanship, creating pieces that move effortlessly from day to night. Every detail has been considered — from premium fabrics to tailored fits — ensuring comfort without compromising on style.    
            </p>
          </div>

          <div>
            <p className="mb-2">
              Crafted for men who value quality and versatility, this collection is made to keep up with every moment — whether you’re at work, special occasion, meeting friends, or exploring the city.
        </p>
            <img
                src={images[2]}
                alt="Model in motion"
                className="w-full object-contain rounded-2xl"
                />
                <br />
            <img
                src={images[4]}
                alt="Model in motion"
                className="w-full object-contain rounded-2xl"
                />
          </div>

          <div>
            <h2 className="font-semibold text-xl mb-2">Key Features</h2>
            <p className="mb-2">
            - Premium quality materials for comfort and durability.
           </p>
            <p className="mb-2">
            - Tailored fits designed suitable for both casual and smart occasions.
           </p>
            <p className="mb-2">
            - Attention to detail in every stitch.
           </p>
          </div>

          <div>
            <p className="mb-2">
            Step into the season with confidence and discover pieces designed to define your personal style.
            </p>
          </div>
          
          <div>
            <img
                src={images[1]}
                alt="Model in motion"
                className="w-full object-contain rounded-2xl"
                />
                <br />
                
            <img
                src={images[5]}
                alt="Model in motion"
                className="w-full object-contain rounded-2xl"
                />
                <br />
                
            <img
                src={images[0]}
                alt="Model in motion"
                className="w-full object-contain rounded-2xl"
                />
            
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>

  );
};

export default DesignerOryehglobal;

