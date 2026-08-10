import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import { ServiceData } from "./slidesconstants";
import { Link } from "react-router-dom";

const HeroSlider = () => {
  return (
    <div className="w-full bg-noir-900 py-8 px-4 border-b border-zinc-800/60">
      {/* Editorial Header Bar */}
      <div className="max-w-7xl mx-auto flex items-center justify-between mb-6 px-4">
        <div>
          <span className="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold">
            Runway & Collections
          </span>
          <h2 className="text-2xl md:text-3xl font-serif text-white mt-1">
            Season Highlights
          </h2>
        </div>
        <Link
          to="/designers"
          className="text-xs uppercase tracking-[0.2em] text-zinc-400 hover:text-gold-400 transition duration-300 flex items-center space-x-1"
        >
          <span>Explore All</span>
          <span>&rarr;</span>
        </Link>
      </div>

      <Swiper
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 16 },
          640: { slidesPerView: 2, spaceBetween: 24 },
          1024: { slidesPerView: 3, spaceBetween: 32 },
          1280: { slidesPerView: 3, spaceBetween: 40 },
        }}
        freeMode={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[FreeMode, Pagination, Autoplay]}
        className="max-w-7xl mx-auto pb-12"
      >
        {ServiceData.map((item, index) => (
          <SwiperSlide key={index} className="py-2">
            <Link to="/gallery" className="block group">
              <div className="relative h-[420px] lg:h-[500px] w-full overflow-hidden rounded-2xl bg-zinc-900 shadow-2xl transition-all duration-700">
                {/* Background Image with Hover Scale */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                  style={{ backgroundImage: `url(${item.backgroundImage})` }}
                />
                
                {/* Dark Luxury Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-noir-950 via-noir-900/40 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-500" />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] uppercase tracking-[0.25em] px-3 py-1 rounded-full bg-black/60 text-gold-400 backdrop-blur-md border border-gold-400/30 font-medium">
                      {item.tag}
                    </span>
                  </div>

                  <div className="transform transition duration-500 group-hover:-translate-y-1">
                    <h3 className="text-xl md:text-2xl font-serif text-white font-bold leading-tight group-hover:text-gold-300 transition duration-300">
                      {item.title}
                    </h3>
                    <p className="text-xs text-zinc-300 font-light mt-2 line-clamp-2">
                      {item.subtitle}
                    </p>
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

export default HeroSlider;

