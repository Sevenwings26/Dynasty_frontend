import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper/modules";

// Editorial fallback items if backend is not actively serving blogs
import carousel1 from "../assets/heroslides/carousel1.jpg";
import carousel2 from "../assets/heroslides/carousel2.jpg";
import carousel3 from "../assets/heroslides/carousel3.jpg";

const fallbackBlogs = [
  {
    title: "Inside Arcade Fashion Weekend 2025",
    description: "Unveiling the most captivating runway moments, avant-garde silhouettes, and couture trends of the season.",
    image: carousel1,
  },
  {
    title: "The Evolution of African Bridal Couture",
    description: "How contemporary African designers are reimagining traditional bridal wear for modern luxury markets.",
    image: carousel2,
  },
  {
    title: "Urban Style & Cultural Identity",
    description: "A deep dive into street culture, local craftsmanship, and global fashion movements redefining youth style.",
    image: carousel3,
  },
];

const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const baseUrl = import.meta.env.VITE_API_URL;
  const blogApi = baseUrl ? `${baseUrl}api/blogs` : null;

  useEffect(() => {
    if (blogApi) {
      axios
        .get(blogApi)
        .then((response) => {
          if (Array.isArray(response.data) && response.data.length > 0) {
            setBlogs(response.data);
          } else {
            setBlogs(fallbackBlogs);
          }
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching blog content, loading fallback editorial articles:", error);
          setBlogs(fallbackBlogs);
          setIsLoading(false);
        });
    } else {
      setBlogs(fallbackBlogs);
      setIsLoading(false);
    }
  }, [blogApi]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-16">
        <div className="w-8 h-8 border-2 border-gold-400 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="w-full">
      <Swiper
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 16 },
          640: { slidesPerView: 2, spaceBetween: 24 },
          1024: { slidesPerView: 3, spaceBetween: 32 },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[FreeMode, Pagination]}
        className="pb-12"
      >
        {blogs.map((blog, index) => (
          <SwiperSlide key={index}>
            <Link to="/blog" className="block group">
              <div className="relative rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 shadow-xl h-[380px] flex flex-col justify-end p-6 transition-all duration-500">
                <img
                  src={blog.image}
                  alt={blog.title || `Blog ${index + 1}`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-noir-950 via-noir-900/50 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />
                <div className="relative z-10">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-gold-400 font-semibold px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-gold-400/30">
                    Editorial
                  </span>
                  <h3 className="text-xl font-serif text-white font-bold mt-3 group-hover:text-gold-300 transition duration-300 leading-snug">
                    {blog.title}
                  </h3>
                  {blog.description && (
                    <p className="text-xs text-zinc-300 font-light mt-2 line-clamp-2">
                      {blog.description}
                    </p>
                  )}
                  <div className="mt-4 flex items-center text-xs text-gold-400 font-medium space-x-1">
                    <span>Read Article</span>
                    <span>&rarr;</span>
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BlogSection;

