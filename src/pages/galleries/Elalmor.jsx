import React from "react";
import MasonryLayoutElamor from "../../components/MasonryLayoutElamor";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Elalmor = () => {
  return (
    <div>
      <Header />
      <h2 className="text-center m-4 uppercase">Elalmor fashion show</h2>
      <div className=" bg-gray-50 ">
        <MasonryLayoutElamor />
      </div>
      <Footer />
    </div>
  );
};

export default Elalmor;
