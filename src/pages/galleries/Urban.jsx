import React from "react";
import MasonryLayoutUrban from "../../components/MasonryLayoutUrban";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Urban = () => {
  return (
    <div>
      <Header />
      <h2 className="text-center m-4 uppercase">Urban-style fashion show</h2>
      <div className=" bg-gray-50 ">
        <MasonryLayoutUrban />
      </div>
      <Footer />
    </div>
  );
};

export default Urban;
