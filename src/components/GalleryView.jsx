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
    <div className="flex flex-col justify-centerw-full h-64 md:flex md:flex-row flex-nowrap">
      {Array.isArray(shows) && shows.length > 0 ? ( 
        shows.map((show, index) => (
          <Link
            to={`/show/${show.id}`} // Adjust the path as needed
            key={index}
            className="show-item relative m-4 w-full sm:w-1/2 md:w-1/3"
          >
            <div className="w-full h-full">
            <img src={show.image} alt={show.title}     className="w-full h-auto rounded-lg"
              />

              <p className="show-title absolute bottom-12 px-3 py-4 left-1/4 w-1/2 bg-white bg-opacity-35 transform -translate-x-1/2 text-black rounded text-left font-bold italic text-3xl">
                {show.title}
              </p>
            </div>
          </Link>
        ))
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default GalleryView;
