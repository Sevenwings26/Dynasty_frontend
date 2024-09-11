import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MustRead = () => {
  const [galleryItems, setGalleryItems] = useState([]);

  const baseUrl = import.meta.env.VITE_API_URL;
  const mustread = `${baseUrl}api/gallery`;

  useEffect(() => {
    axios
      .get(mustread)
      .then((response) => {
        setGalleryItems(response.data);
      })
      .catch((error) => {
        console.error("Error fetching the gallery data", error);
      });
  }, []);

  return (
    <div>
      <Header />
      <div className="flex flex-col items-center justify-center w-full m-auto text-center">
        <h1 className="underline uppercase m-6 text-3xl font-bold">Must Read</h1>
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-6xl"> */}
        <div className="w-full px-3 md:px-0">
          {galleryItems.map((item) => (
            <div key={item.id} className="flex flex-col items-center mb-5">
              <h3 className="text-xl uppercase font-semibold">{item.title}</h3>
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-auto object-cover rounded-lg md:w-2/4"
              />
              <p className="text-left mt-6 md:w-2/3">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
      < Footer/>
    </div>
  );
};

export default MustRead;
