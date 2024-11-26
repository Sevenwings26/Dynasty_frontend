import React from "react";
import Header from "../components/Header";
import HeroSlider from "../components/HeroSlider";
import CallDesigners from "../components/CallDesigners";
import agbadaModel from "../assets/images/agbadaModel.jpg";
import wedding from "../assets/images/wedding.png";
import { Link } from "react-router-dom";
import GalleryView from "../components/GalleryView";
import Footer from "../components/Footer";
import Subscribe from "../components/Subscribe";
import BlogSection from "../components/BlogSection";
import HeroSliderSmall from "../components/HeroSliderSmall";

const Home = () => {
  return (
    <div>
      {/* header section */}
      <section>
        <Header />
      </section>
      {/* hero section */}
      <section className="hidden md:block">
        <HeroSlider />
      </section>
      {/* hero section - small screen */}
      <section className="md:hidden">
        <HeroSliderSmall/>
      </section>
      {/* {call for designers} */}
      <section>
        <CallDesigners />
      </section>

      {/* display section */}
      <section className="container">
        <div className="m-auto flex items-center justify-center text-center flex-col">
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl font-semibold">Arcade Fashion Weekend</h1>
            <p className="px-7 md:px-10 capitalize">
              Recent updates on models, runway trends, and casual fashion,
              featuring both seasoned supermodels and emerging talents.
            </p>
            <div className="brand mt-2 rounded-xl w-full relative">
              <Link to="/gallery/bridal-fashion-week">
                <div className="absolute w-32 md:w-40 view_more text-center bg-black text-white p-2 hover:bg-gray-800 transition duration-300 no-underline">
                  <span className="animate-pulse uppercase">View More</span>
                </div>
                <img src={agbadaModel} alt="" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="m-auto mt-3 relative md:flex flex-row justify-between items-center md:py-8">
          <div className="py-3 text-center md:hidden">
            <Link to="/about" className="bold no-underline text-black">
              About Us
            </Link>
          </div>
          <div className="md:w-2/5 border-red-50">
            <Link to="/about">
              <img src={wedding} alt="Arcade Bridal" />
            </Link>
          </div>
          <div className="hidden md:block md:w-3/5 px-10">
            <h2 className="text-2xl font-semibold ">About Us</h2>
            <p className="leading-[1.1] xl:leading-[1.5]">
              Arcade DYNASTY is a brand tasked with the vision to create a
              lasting solution for fashion entrepreneurs, models, and creatives.
              Our goal is to showcase different couture, styles, and design,
              creating a dependable platform for fashion designers to tell their
              story and enhance their creativity on the runway through our
              different and innovative fashion events such as ARCADE FASHION
              WEEKEND, IBADAN BRIDAL FASHION SHOW, ESTILO LUZ KIDS AND TEEN
              FASHION SHOW, URBAN STYLE FASHION SHOW, THE BRIDAL FASHION
              WEEKEND, LAGOS BRIDAL FASHION EXPERIENCE, AND EL AMOR FASHION
              TOUR.
            </p>
            <ul className="py-4 list-disc list-inside leading-[1] xl:leading-[1.3]">
              {" "}
              <li>
                Provide an opportunity where fashion enthusiasts and consumers
                interact with each other.
              </li>
              <li>
                Create a well-managed platform for customers to meet the people
                behind strong and emerging brands.
              </li>
              <li className="leading-tight truncate-ellipsis">
                Reveal the products and services offered by your brand to a
                large audience, reaching out to local and global markets...
              </li>
            </ul>
            <Link to="/about" className="text-red-500">
              Read More
            </Link>
          </div>
        </div>
      </section>

      {/* Must read section */}
      <section>
        <div className="border-t border-b border-gray-600 mt-2 mb-2">
          <p className="font-semibold text-center mt-2">Must Read</p>
        </div>
        <div className="w-full md:container m-auto">
          <div className="">
            <GalleryView />
          </div>
        </div>
      </section>

      {/* blog section */}
      <section>
        <div className="border-t border-b border-gray-600 mt-2 mb-2">
          <p className="font-semibold text-center mt-2">Arcade Blogs</p>
        </div>
        <div className="w-full md:container m-auto py-2 px-6">
          <div className="">
            <BlogSection/>
          </div>
        </div>
      </section>


      {/* subcribe section */}
      <section className="w-full md:container m-auto">
        <Subscribe/>
      </section>

      {/* sponsors section  */}
      <section>
        {/* <Sponsors /> */}
      </section>

      {/* footer section */}
      <section>
        <footer>
          <Footer/>
        </footer>
      </section>

    </div>
  );
};

export default Home;
