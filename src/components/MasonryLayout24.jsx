import { React, useState } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { AiOutlineClose } from 'react-icons/ai'; // Import close icon


// import images 
import POL1 from "../assets/year2024/POL1.jpg";
import POL2 from "../assets/year2024/POL2.jpg";
import POL3 from "../assets/year2024/POL3.jpg";
import POL4 from "../assets/year2024/POL4.jpg";
import POL5 from "../assets/year2024/POL5.jpg";
import POL6 from "../assets/year2024/POL6.jpg";
import POL7 from "../assets/year2024/POL7.jpg";
import POL8 from "../assets/year2024/POL8.jpg";
import POL9 from "../assets/year2024/POL9.jpg";
import POL10 from "../assets/year2024/POL10.jpg";
import POL11 from "../assets/year2024/POL11.jpg";
import POL12 from "../assets/year2024/POL12.jpg";
import POL13 from "../assets/year2024/POL13.jpg";

const images = [
  POL1, POL2, POL3, POL4, POL5, POL6, POL7, POL8, POL9, POL10, POL11, POL12
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
