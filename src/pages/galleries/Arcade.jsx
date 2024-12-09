import React from "react";
import MasonryLayoutArcade from "../../components/MasonryLayoutArcade";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Arcade = () => {
  return (
    <div>
      <Header />
      <h2 className="text-center m-4 uppercase">Arcade Fashion/Events</h2>
      <div className=" bg-gray-100 ">
        <MasonryLayoutArcade />
      </div>
      <Footer />
    </div>
  );
};

export default Arcade;
