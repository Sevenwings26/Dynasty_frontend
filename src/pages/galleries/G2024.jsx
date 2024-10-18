import React from "react";
import MasonryLayout24 from "../../components/MasonryLayout24";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const G2024 = () => {
  return (
    <div>
      <Header />
      <h2 className="text-center m-4 uppercase">Arcade Fashion/Events</h2>
      <div className=" bg-gray-100 ">
        <MasonryLayout24 />
      </div>
      <Footer />
    </div>
  );
};

export default G2024;
