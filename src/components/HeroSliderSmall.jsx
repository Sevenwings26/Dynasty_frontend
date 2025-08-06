import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { ServiceData } from "./slidesconstants";
import { Link } from "react-router-dom";


const HeroSliderSmall = () => {
  return (
    <div className="w-full items-center mx-auto">
      <div className="w-full bg-black justify-center text-center text-2xl semibold">
        <Link to={"/designers"} className="text-white ">
                  <p className="m-1">Trending News</p>
                  </Link>        
      </div>
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
