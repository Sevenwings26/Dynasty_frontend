import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const GalleryView = () => {
  const [shows, setShows] = useState([]);
  const baseUrl = import.meta.env.VITE_API_URL;
  const gallery = `${baseUrl}api/gallery`;

  useEffect(() => {
    axios
      .get(gallery)
      .then((response) => {
        console.log(response.data);
        setShows(response.data);
      })
      .catch((error) => {
        console.error("Error fetching the images:", error);
      });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full md:flex-row md:flex-nowrap md:justify-start">
      {Array.isArray(shows) && shows.length > 0 ? (
        shows.map((show, index) => (
          <Link
            // to={`/show/${show.id}`} // Adjust the path as needed
            to={'/must-read'} // Adjust the path as needed
            key={index}
            className="show-item relative m-4 w-full sm:w-2/3 md:w-1/3"
          >
            <div className="w-full h-full">
              <img
                src={show.image.startsWith("https") ? show.image : show.image}
                alt={show.title}
                className="w-full h-auto rounded-lg mx-auto"
              />

              <p className="absolute bottom-5 px-2 py-1 left-1/4 w-1/2 bg-gray-400 bg-opacity-35 transform -translate-x-1/2 text-black rounded text-left font-bold italic text-2xl">
                {show.title}
              </p>
            </div>
          </Link>
        ))
      ) : (
        <p className="">No images available</p>
      )}
    </div>
  );
};

export default GalleryView;
