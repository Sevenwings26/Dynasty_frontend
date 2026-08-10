import React, { useState } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { AiOutlineClose } from 'react-icons/ai'; // Import close icon

// import images 
import e1 from '../assets/images/gallery/el/e1.jpg'
import e2 from '../assets/images/gallery/el/e2.jpg'
import e3 from '../assets/images/gallery/el/e3.jpg'
import e4 from '../assets/images/gallery/el/e4.jpg'
import e5 from '../assets/images/gallery/el/e5.jpg'
import e6 from '../assets/images/gallery/el/e6.jpg'
import e7 from '../assets/images/gallery/el/e7.jpg'
import e8 from '../assets/images/gallery/el/e8.jpg'
import e9 from '../assets/images/gallery/el/e9.jpg'
import e10 from '../assets/images/gallery/el/e10.jpg'
import e11 from '../assets/images/gallery/el/e11.jpg'
import e12 from '../assets/images/gallery/el/e12.jpg'
import e13 from '../assets/images/gallery/el/e13.jpg'
import e14 from '../assets/images/gallery/el/e14.jpg'
import e15 from '../assets/images/gallery/el/e15.jpg'
import e16 from '../assets/images/gallery/el/e16.jpg'
import e17 from '../assets/images/gallery/el/e17.jpg'
import e18 from '../assets/images/gallery/el/e18.jpg'
import e19 from '../assets/images/gallery/el/e19.jpg'
import e20 from '../assets/images/gallery/el/e20.jpg'
import e21 from '../assets/images/gallery/el/e21.jpg'
import e22 from '../assets/images/gallery/el/e22.jpg'
import e23 from '../assets/images/gallery/el/e23.jpg'
import e24 from '../assets/images/gallery/el/e24.jpg'
import e25 from '../assets/images/gallery/el/e25.jpg'
import e26 from '../assets/images/gallery/el/e26.jpg'
import e27 from '../assets/images/gallery/el/e27.jpg'
import e28 from '../assets/images/gallery/el/e28.jpg'
import e29 from '../assets/images/gallery/el/e29.jpg'
import e30 from '../assets/images/gallery/el/e30.jpg'
import e31 from '../assets/images/gallery/el/e31.jpg'
import e32 from '../assets/images/gallery/el/e32.jpg'
import e33 from '../assets/images/gallery/el/e33.jpg'
import e34 from '../assets/images/gallery/el/e34.jpg'
import e35 from '../assets/images/gallery/el/e35.jpg'


const images = [e1, e2, e3,e4,e5,e6,e7, e8,e9,e10,e11,e12, e13,e14,e15,e16,e17, e18,e19,e20,e21, e22, e23,e24,e25,e26, e27, e28,e29,e30,e31, e32, e33, e34, e35]

const MasonryLayoutElamor = () => {
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
          className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-50 p-4 transition-all duration-300"
          onClick={closeModal} // Close modal when clicking outside
        >
          <div 
            className="relative bg-zinc-950 p-2 rounded-2xl border border-zinc-800 shadow-2xl max-w-screen-lg max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()} // Prevent modal close when clicking the image
          >
            {/* Close Button */}
            <button 
              className="absolute top-4 right-4 text-white bg-zinc-900/80 hover:bg-zinc-800 hover:text-red-400 p-2 rounded-full transition duration-300 z-10 border border-zinc-700/50"
              onClick={closeModal}
              aria-label="Close image modal"
            >
              <AiOutlineClose size={20} />
            </button>

            <img 
              src={selectedImage}
              alt="Zoomed view"
              className="max-w-full max-h-[80vh] w-auto h-auto object-contain rounded-xl transition-transform duration-300" 
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default MasonryLayoutElamor;
