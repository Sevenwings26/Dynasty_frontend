import React from "react";
import MasonryLayout23 from "../../components/MasonryLayoutBridal";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const G2023 = () => {
  return (
    <div>
      <Header />
      <h2 className="text-center m-4 uppercase">2023 event images</h2>
      <div className=" bg-gray-50 ">
        <MasonryLayoutBridal />
      </div>
      <Footer />
    </div>
  );
};

export default G2023;
