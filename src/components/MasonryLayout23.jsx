import React, { useState } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { AiOutlineClose } from 'react-icons/ai'; // Import close icon


// import images 
import pol1 from "../assets/year2023/pol1.jpg";
import pol2 from "../assets/year2023/pol2.jpg";
import pol3 from "../assets/year2023/pol3.jpg";
import pol4 from "../assets/year2023/pol4.jpg";
import pol5 from "../assets/year2023/pol5.jpg";
import pol6 from "../assets/year2023/pol6.jpg";
import pol7 from "../assets/year2023/pol7.jpg";
import pol8 from "../assets/year2023/pol8.jpg";

const images = [pol1, pol2, pol3, pol4, pol5, pol6, pol7, pol8];


const MasonryLayout23 = () => {
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
    <div className='w-11/12 m-auto pt-2 pb-2'>
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

export default MasonryLayout23;
