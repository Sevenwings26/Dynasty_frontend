import React, { useState } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { AiOutlineClose } from 'react-icons/ai'; // Import close icon

// import images 
import bridal01 from '../assets/images/gallery/bridal/bridal01.jpg'
import bridal1 from '../assets/images/gallery/bridal/bridal1.jpg'
import bridal02 from '../assets/images/gallery/bridal/bridal02.jpg'
import bridal03 from '../assets/images/gallery/bridal/bridal03.jpg'
import bridal04 from '../assets/images/gallery/bridal/bridal04.jpg'
// import bridal05 from '../assets/images/gallery/bridal/bridal05.jpg'
import bridal06 from '../assets/images/gallery/bridal/bridal06.jpg'
import bridal07 from '../assets/images/gallery/bridal/bridal07.jpg'
import bridal08 from '../assets/images/gallery/bridal/bridal08.jpg'
import bridal09 from '../assets/images/gallery/bridal/bridal09.jpg'
import bridal010 from '../assets/images/gallery/bridal/bridal010.jpg'
import bridal011 from '../assets/images/gallery/bridal/bridal011.jpg'
import bridal012 from '../assets/images/gallery/bridal/bridal012.jpg'
import bridal013 from '../assets/images/gallery/bridal/bridal013.jpg'

import bridal2 from '../assets/images/gallery/bridal/bridal2.jpg'
// import bridal3 from '../assets/images/gallery/bridal/bridal3.jpg'
import bridal4 from '../assets/images/gallery/bridal/bridal4.jpg'
import bridal5 from '../assets/images/gallery/bridal/bridal5.jpg'
import bridal6 from '../assets/images/gallery/bridal/bridal6.jpg'
import bridal7 from '../assets/images/gallery/bridal/bridal7.jpg'
import bridal8 from '../assets/images/gallery/bridal/bridal8.jpg'
import bridal9 from '../assets/images/gallery/bridal/bridal9.jpg'
import bridal10 from '../assets/images/gallery/bridal/bridal10.jpg'
import bridal11 from '../assets/images/gallery/bridal/bridal11.jpg'
import bridal12 from '../assets/images/gallery/bridal/bridal12.jpg'
import bridal13 from '../assets/images/gallery/bridal/bridal13.jpg'
import bridal14 from '../assets/images/gallery/bridal/bridal14.jpg'
import bridal15 from '../assets/images/gallery/bridal/bridal15.jpg'
import bridal16 from '../assets/images/gallery/bridal/bridal16.jpg'
import bridal17 from '../assets/images/gallery/bridal/bridal17.jpg'
import bridal18 from '../assets/images/gallery/bridal/bridal18.jpg'
import bridal19 from '../assets/images/gallery/bridal/bridal19.jpg'
import bridal20 from '../assets/images/gallery/bridal/bridal20.jpg'
import bridal21 from '../assets/images/gallery/bridal/bridal21.jpg'
import bridal22 from '../assets/images/gallery/bridal/bridal22.jpg'
import bridal23 from '../assets/images/gallery/bridal/bridal23.jpg'
import bridal24 from '../assets/images/gallery/bridal/bridal24.jpg'
import bridal25 from '../assets/images/gallery/bridal/bridal25.jpg'
import bridal26 from '../assets/images/gallery/bridal/bridal26.jpg'
import bridal27 from '../assets/images/gallery/bridal/bridal27.jpg'
import bridal28 from '../assets/images/gallery/bridal/bridal28.jpg'
import bridal29 from '../assets/images/gallery/bridal/bridal29.jpg'
import bridal30 from '../assets/images/gallery/bridal/bridal30.jpg'
import bridal31 from '../assets/images/gallery/bridal/bridal31.jpg'
import bridal32 from '../assets/images/gallery/bridal/bridal32.jpg'
import bridal33 from '../assets/images/gallery/bridal/bridal33.jpg'
import bridal34 from '../assets/images/gallery/bridal/bridal34.jpg'
// import bridal35 from '../assets/images/gallery/bridal/bridal35.jpg'
import bridal36 from '../assets/images/gallery/bridal/bridal36.jpg'
import bridal37 from '../assets/images/gallery/bridal/bridal37.jpg'
import bridal40 from '../assets/images/gallery/bridal/bridal40.jpg'
import bridal50 from '../assets/images/gallery/bridal/bridal50.jpg'
import bridal51 from '../assets/images/gallery/bridal/bridal51.jpg'
import bridal52 from '../assets/images/gallery/bridal/bridal52.jpg'
import bridal53 from '../assets/images/gallery/bridal/bridal53.jpg'
import bridal54 from '../assets/images/gallery/bridal/bridal54.jpg'
import bridal59 from '../assets/images/gallery/bridal/bridal59.jpg'
import bridal60 from '../assets/images/gallery/bridal/bridal60.jpg'
import bridal61 from '../assets/images/gallery/bridal/bridal61.jpg'
import bridal62 from '../assets/images/gallery/bridal/bridal62.jpg'
import bridal63 from '../assets/images/gallery/bridal/bridal63.jpg'
import bridal64 from '../assets/images/gallery/bridal/bridal64.jpg'


const images = [ bridal04, bridal01,  bridal03, bridal02, bridal2, bridal09, bridal07, bridal08, bridal011, bridal012, bridal013, bridal1, bridal4, bridal5, bridal6, bridal7, bridal8, bridal9, bridal10, bridal11, bridal12, bridal13, bridal14, bridal010, bridal15, bridal16, bridal17, bridal06, bridal18, bridal19, bridal20, bridal21, bridal22, bridal23, bridal24, bridal25, bridal26, bridal27, bridal29, bridal28, bridal30, bridal31, bridal32, bridal33, bridal34, bridal36, bridal37, bridal40, bridal50,  bridal51, bridal52, bridal53, bridal54, bridal59, bridal60, bridal61, bridal62, bridal63, bridal64,  
]

const MasonryLayoutBridal = () => {
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

export default MasonryLayoutBridal;
