import React from "react";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import designercall3 from "../assets/DesignersReg/designercall3.jpg";
import designercall1 from "../assets/DesignersReg/designercall1.jpg";
import designercall2 from "../assets/DesignersReg/designercall2.jpg";

const CallDesigners = () => {
  const images = [designercall3, designercall1, designercall2];

  return (
    <div className="container mx-auto mt-3 mb-3">
      {/* Image Grid - Hidden on small screens, visible on medium and larger */}
      <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div key={index} className="w-full relative">
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gray-800 bg-opacity-25 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity">
              <p className="text-black">Image {index + 1}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Carousel - Hidden on larger screens, visible on small screens */}
      <Link to={"/apply-designer"}>
        <div className="md:hidden">
          <Carousel fade>
            {images.map((image, index) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100"
                  src={image}
                  alt={`Slide ${index + 1}`}
                />
                <Carousel.Caption>
                  <h3>{}</h3>
                  <p>{}</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </Link>
      <Link
        to="/apply-designer"
        className="no-underline flex flex-col items-center justify-center m-3"
      >
        {/* Apply button with text animation and no underline */}
        <div className="w-40 text-center bg-black text-white p-2 hover:bg-gray-800 transition duration-300 no-underline">
          <span className="animate-pulse uppercase">Apply here</span>
        </div>
      </Link>
    </div>
  );
};

export default CallDesigners;
