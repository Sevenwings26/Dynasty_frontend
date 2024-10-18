import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { ServiceData } from "./slidesconstants";


const HeroSliderSmall = () => {
  return (
    <div className="container mx-auto mt-3 mb-3">
      <div className="text-2xl semibold"><p>Welcome to Arcade Dynasty</p></div>
      {/* Carousel - Hidden on larger screens, visible on small screens */}
      <div className="md:hidden">
        <Carousel fade indicators={false}> {/* controls={false} */}
          {ServiceData.map((image, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                src={image.backgroundImage}
                alt={`Slide ${index + 1}`}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default HeroSliderSmall;
