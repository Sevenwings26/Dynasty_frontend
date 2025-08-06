import React from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";

// images 
// import FB1 from '../../'
import FB1 from '../../assets/images/designers/Fabique Beauty/FB1.jpg'
import FB2 from '../../assets/images/designers/Fabique Beauty/FB2.jpg'
import FB3 from '../../assets/images/designers/Fabique Beauty/FB3.jpg'
import FB4 from '../../assets/images/designers/Fabique Beauty/FB4.jpg'
import FB5 from '../../assets/images/designers/Fabique Beauty/FB5.jpg'
import FB6 from '../../assets/images/designers/Fabique Beauty/FB6.jpg'
import FB7 from '../../assets/images/designers/Fabique Beauty/FB7.jpg'
import FB8 from '../../assets/images/designers/Fabique Beauty/FB8.jpg'
import FB9 from '../../assets/images/designers/Fabique Beauty/FB9.jpg'
import FB10 from '../../assets/images/designers/Fabique Beauty/FB10.jpg'
import FB11 from '../../assets/images/designers/Fabique Beauty/FB11.jpg'


const images = [
  FB1, 
  FB2, FB11, FB4, FB5, FB8, FB9, FB10, FB6,  FB7, FB3,
];

const DesignerDetail1 = () => {
  return (
    <div>
    <Header/>
    <div className="min-h-screen bg-white px-4 md:px-4 py-10 max-w-4xl mx-auto font-serif text-gray-800">
      <h1 className="text-4xl font-extrabold text-center leading-tight">
        Fabique Beauty’s Vibrant Celebration of African Elegance
      </h1>
      <p className='text-center italic'>18th December, 2022.</p>


      <div className="space-y-10 text-lg leading-relaxed">
        <p>
          Fabique Beauty’s latest showcase was nothing short of a visual feast — a bold,
          unapologetic celebration of African heritage through color, pattern, and form.
          Known for its African-inspired aesthetic, Fabique Beauty has once again affirmed
          its place at the intersection of tradition and modern fashion with a collection
          that radiates joy, cultural pride, and creative ingenuity.
        </p>

        {/* <div className="w-full h-96 object-cover rounded-2xl"> */}
        <img
          src={images[0]}
          alt="Showcase visual"
          className="w-full h-96 object-contain rounded-2xl bg-none"
          />
        {/* </div> */}

        <p>
          The collection bursts with vibrant prints, rich textures, and intricate details —
          each piece telling a story of heritage, craftsmanship, and identity. From flowing
          Ankara gowns to structured two-piece sets adorned with handwoven details, the
          garments reflect a seamless fusion of contemporary silhouettes and timeless
          African artistry.
        </p>

        <img
          src={images[1]}
          alt="Fabrique"
          className="w-full h-96 object-contain rounded-2xl"
        />

        <p>
          What makes Fabique Beauty stand out is its commitment to honoring African roots
          while embracing global fashion sensibilities. The use of bold, earthy hues — deep
          oranges, emerald greens, radiant blues — evokes the landscapes, festivals, and
          spirit of the continent. Yet, the tailoring remains refined, with clean lines and
          versatile styling that speaks to modern elegance.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <img
            src={images[2]}
            alt="Color palette"
          className="w-full h-96 object-contain rounded-2xl"

            // className="h-80 object-cover w-full rounded-xl shadow"
          />
          <img
            src={images[3]}
            alt="Runway expression"
            className="w-full h-96 object-contain rounded-2xl"
            // className="h-80 object-cover w-full rounded-xl shadow"
          />
        </div>

        <p>
          The show wasn’t just a fashion display; it was an immersive cultural experience.
          Models walked to the rhythm of Afrobeat music, their presence exuding power and
          grace. Each look was not just worn — it was owned.
        </p>

        <img
          src={images[4]}
          alt="Model in motion"
          className="w-full h-96 object-contain rounded-2xl"
          // className="w-full h-96 object-cover rounded-2xl shadow-md"
        />

        <p>
          Fabique Beauty’s colorful collection is more than beautiful clothing — it’s a
          narrative of identity, resilience, and pride woven into fabric. For lovers of
          fashion with depth, color, and story, this brand continues to be a radiant force
          to watch.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <img
            src={images[5]}
            alt="Model in motion"
            className="w-full h-96 object-contain rounded-2xl"

            // className="h-64 object-cover w-full rounded-xl shadow"
          />
          <img
            src={images[6]}
            alt="Model in motion"
            className="w-full h-96 object-contain rounded-2xl"

            // className="h-64 object-cover w-full rounded-xl shadow"
          />
          <img
            src={images[7]}
            alt="Editorial look"
            className="w-full h-96 object-contain rounded-2xl"

            // className="h-64 object-cover w-full rounded-xl shadow"
          />
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default DesignerDetail1;



