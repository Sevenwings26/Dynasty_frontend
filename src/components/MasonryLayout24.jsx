import { React, useState } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { AiOutlineClose } from 'react-icons/ai'; // Import close icon


// import images 
import arcade1 from "../assets/images/gallery/arcade/arcade1.jpg"
import arcade2 from "../assets/images/gallery/arcade/arcade2.jpg"
import arcade3 from "../assets/images/gallery/arcade/arcade3.jpg"
import arcade4 from "../assets/images/gallery/arcade/arcade4.jpg"
import arcade5 from "../assets/images/gallery/arcade/arcade5.jpg"
import arcade6 from "../assets/images/gallery/arcade/arcade6.jpg"
import arcade7 from "../assets/images/gallery/arcade/arcade7.jpg"
import arcade8 from "../assets/images/gallery/arcade/arcade8.jpg"
import arcade9 from "../assets/images/gallery/arcade/arcade9.jpg"
import arcade10 from "../assets/images/gallery/arcade/arcade10.jpg"
import arcade11 from "../assets/images/gallery/arcade/arcade11.jpg"
import arcade12 from "../assets/images/gallery/arcade/arcade12.jpg"
import arcade13 from "../assets/images/gallery/arcade/arcade13.jpg"
import arcade14 from "../assets/images/gallery/arcade/arcade14.jpg"
import arcade15 from "../assets/images/gallery/arcade/arcade15.jpg"
import arcade16 from "../assets/images/gallery/arcade/arcade16.jpg"
import arcade17 from "../assets/images/gallery/arcade/arcade17.jpg"
import arcade18 from "../assets/images/gallery/arcade/arcade18.jpg"
import arcade19 from "../assets/images/gallery/arcade/arcade19.jpg"
import arcade20 from "../assets/images/gallery/arcade/arcade20.jpg"
import arcade21 from "../assets/images/gallery/arcade/arcade21.jpg"
import arcade22 from "../assets/images/gallery/arcade/arcade22.jpg"
import arcade23 from "../assets/images/gallery/arcade/arcade23.jpg"
import arcade24 from "../assets/images/gallery/arcade/arcade24.jpg"
import arcade25 from "../assets/images/gallery/arcade/arcade25.jpg"
import arcade26 from "../assets/images/gallery/arcade/arcade26.jpg"
import arcade27 from "../assets/images/gallery/arcade/arcade27.jpg"
import arcade30 from "../assets/images/gallery/arcade/arcade30.jpg"
import arcade31 from "../assets/images/gallery/arcade/arcade31.jpg"
import arcade32 from "../assets/images/gallery/arcade/arcade32.jpg"
import arcade33 from "../assets/images/gallery/arcade/arcade33.jpg"
import arcade34 from "../assets/images/gallery/arcade/arcade34.jpg"
import arcade35 from "../assets/images/gallery/arcade/arcade35.jpg"
import arcade36 from "../assets/images/gallery/arcade/arcade36.jpg"
import arcade37 from "../assets/images/gallery/arcade/arcade37.jpg"
// import arcade38 from "../assets/images/gallery/arcade/arcade38.jpg"
import arcade39 from "../assets/images/gallery/arcade/arcade39.jpg"
import arcade40 from "../assets/images/gallery/arcade/arcade40.jpg"
import arcade41 from "../assets/images/gallery/arcade/arcade41.jpg"
import arcade42 from "../assets/images/gallery/arcade/arcade42.jpg"

const images = [
  arcade1, arcade2, arcade3, arcade4, arcade5, arcade6, arcade7, arcade8, arcade9, arcade10, arcade11, arcade12, arcade13, arcade13, arcade14, arcade15, arcade16, arcade17, arcade18, arcade19, arcade20, arcade21, arcade22, arcade23, arcade24, arcade25, arcade26, arcade27, arcade30, arcade31, arcade32, arcade33, arcade34, arcade35, arcade36, arcade37, arcade39, arcade40, arcade41, arcade42,
];


const MasonryLayout24 = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Function to open modal with the selected image
  const openImageModal = (image) => {
    setSelectedImage(image);
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className='md:w-11/12 m-auto pt-2 pb-2'>
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 2, 750: 2, 900: 3 }}
      >
        <Masonry gutter="10px">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              style={{ width: '100%', display: 'block', cursor: 'pointer' }}
              alt={`Masonry item ${index}`}
              onClick={() => openImageModal(image)} // Open modal on click
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>

      {/* Modal for the zoom-out effect */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-gray-100 bg-opacity-80 flex items-center justify-center z-50"
          onClick={closeModal} // Close modal when clicking outside
        >
          <div 
            className="relative bg-white p-4 rounded-lg shadow-lg max-w-screen-lg max-h-screen"
            onClick={(e) => e.stopPropagation()} // Prevent modal close when clicking the image
          >
            {/* Close Button */}
            <button 
              className="absolute top-2 right-2 text-white bg-black opacity-35 p-2 rounded-full hover:bg-red-500"
              onClick={closeModal}
            >
              <AiOutlineClose size={24} />
            </button>

            <img 
              src={selectedImage}
              alt="Zoomed out"
              className="max-w-full max-h-[80vh] w-auto h-auto transition-transform duration-300 transform scale-95 hover:scale-100" 
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default MasonryLayout24;

