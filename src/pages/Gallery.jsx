import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Gallery = () => {
  const [galleryItems, setGalleryItems] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/gallery/')
      .then(response => {
        setGalleryItems(response.data);
      })
      .catch(error => {
        console.error('Error fetching the gallery data', error);
      });
  }, []);

  return (
    <div>
      {galleryItems.map(item => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <img src={item.image} alt={item.title} />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
