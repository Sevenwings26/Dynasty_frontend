import React, { useState } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { AiOutlineClose } from 'react-icons/ai'; // Import close icon

// import images 
import ur1 from '../assets/images/gallery/urban/ur1.jpg'
import ur2 from '../assets/images/gallery/urban/ur2.jpg'
import ur3 from '../assets/images/gallery/urban/ur3.jpg'
import ur4 from '../assets/images/gallery/urban/ur4.jpg'
import ur5 from '../assets/images/gallery/urban/ur5.jpg'
import ur6 from '../assets/images/gallery/urban/ur6.jpg'
import ur7 from '../assets/images/gallery/urban/ur7.jpg'
import ur8 from '../assets/images/gallery/urban/ur8.jpg'
import ur9 from '../assets/images/gallery/urban/ur9.jpg'
import ur10 from '../assets/images/gallery/urban/ur10.jpg'
import ur11 from '../assets/images/gallery/urban/ur11.jpg'
import ur12 from '../assets/images/gallery/urban/ur12.jpg'
import ur13 from '../assets/images/gallery/urban/ur13.jpg'
import ur14 from '../assets/images/gallery/urban/ur14.jpg'
import ur15 from '../assets/images/gallery/urban/ur15.jpg'
import ur16 from '../assets/images/gallery/urban/ur16.jpg'
import ur17 from '../assets/images/gallery/urban/ur17.jpg'
import ur18 from '../assets/images/gallery/urban/ur18.jpg'
import ur19 from '../assets/images/gallery/urban/ur19.jpg'
import ur20 from '../assets/images/gallery/urban/ur20.jpg'
import ur21 from '../assets/images/gallery/urban/ur21.jpg'
import ur22 from '../assets/images/gallery/urban/ur22.jpg'
import ur23 from '../assets/images/gallery/urban/ur23.jpg'
import ur24 from '../assets/images/gallery/urban/ur24.jpg'
import ur25 from '../assets/images/gallery/urban/ur25.jpg'
import ur26 from '../assets/images/gallery/urban/ur26.jpg'
import ur27 from '../assets/images/gallery/urban/ur27.jpg'
import ur28 from '../assets/images/gallery/urban/ur28.jpg'
import ur29 from '../assets/images/gallery/urban/ur29.jpg'
import ur30 from '../assets/images/gallery/urban/ur30.jpg'
import ur31 from '../assets/images/gallery/urban/ur31.jpg'
import urban1 from '../assets/images/gallery/urban/urban1.jpg'
import urban2 from '../assets/images/gallery/urban/urban2.jpg'
import urban3 from '../assets/images/gallery/urban/urban3.jpg'
import urban4 from '../assets/images/gallery/urban/urban4.jpg'
import urban5 from '../assets/images/gallery/urban/urban5.jpg'
import urban6 from '../assets/images/gallery/urban/urban6.jpg'
import urban7 from '../assets/images/gallery/urban/urban7.jpg'
import urban8 from '../assets/images/gallery/urban/urban8.jpg'


const images = [ur1, urban6, urban2, urban3, urban4, urban1, urban5, urban7, urban8, ur2, ur3, ur4, ur5, ur6, ur7, ur8, ur9, ur10, ur11, ur12, ur13, ur14, ur15, ur16, ur17, ur18, ur19, ur20, ur21, ur22, ur23, ur24, ur25, ur26, ur27, ur28, ur29, ur30, ur31]

const MasonryLayoutUrban = () => {
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

export default MasonryLayoutUrban;
