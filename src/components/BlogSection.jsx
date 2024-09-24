import { useState, useEffect } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper/modules";

const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // const baseUrl = import.meta.env.VITE_API_URL;
  // const blogApi = `${baseUrl}api/blogs`;
  const blogApi = 'https://dynasty-backend.onrender.com/api/blogs';

  useEffect(() => {
    axios
      .get(blogApi)
      .then((response) => {
        console.log(response.data); // Debug the data structure
        setBlogs(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching blog content:", error);
        setIsLoading(false);
      });
  }, [blogApi]);

  if (isLoading) {
    return <div className="text-center py-10">Loading...</div>;
  }
  return (
    <div className="mx-auto">
      {isLoading ? (
        <div className="text-center py-10">Loading...</div>
      ) : (
        <Swiper
          breakpoints={{
            400: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            700: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
            1600: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="max-w-[90%] lg:max-w-[80%] relative"
        >
          {Array.isArray(blogs) ? (
            blogs.map((blog, index) => (
              <SwiperSlide key={index}>
                <div className="w-full flex flex-col items-center mb-1 group relative shadow-lg text-white rounded-lg p-2 overflow-hidden cursor-pointer">                  
                <img
                    src={blog.image.startsWith("https") ? blog.image : blog.image}
                    width="500px"
                    alt={`Image${index + 1}`}
                    className="w-full object-cover rounded-t-lg"
                  />
                  
                  {/* <div className="absolute bottom-3 mt-0 w-11/12 bg-black p-3 rounded-b-lg ">
                    <h2 className="text-2xl font-semibold text-white text-center">
                      {blog.title}
                    </h2>
                    <p className="text-blue-500 text-center">
                      {blog.description}
                    </p>
                  </div> */}
                </div>
              </SwiperSlide>
            ))
          ) : (
            <p>No blogs available</p>
          )}
        </Swiper>
      )}
      <div className="swiper-pagination mt-5 flex justify-center" />
    </div>
  );
};

export default BlogSection;
