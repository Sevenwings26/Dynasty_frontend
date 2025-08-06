import React from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";

// images 
// import FB1 from '../../'
import OD0 from '../../assets/images/designers/ODESBABA COUTURE/OD0.jpg'
import OD1 from '../../assets/images/designers/ODESBABA COUTURE/OD1.jpg'
import OD2 from '../../assets/images/designers/ODESBABA COUTURE/OD2.jpg'
import OD3 from '../../assets/images/designers/ODESBABA COUTURE/OD3.jpg'
import OD4 from '../../assets/images/designers/ODESBABA COUTURE/OD4.jpg'
import OD5 from '../../assets/images/designers/ODESBABA COUTURE/OD5.jpg'
import OD6 from '../../assets/images/designers/ODESBABA COUTURE/OD6.jpg'
import OD7 from '../../assets/images/designers/ODESBABA COUTURE/OD7.jpg'
import OD8 from '../../assets/images/designers/ODESBABA COUTURE/OD8.jpg'



const images = [
    OD0, OD1, OD2, OD3, OD4, OD5, OD6, OD7, OD8
];

const DesignerDetail3 = () => {
  return (
    <div>
    <Header/>
    <div className="min-h-screen bg-white px-4 md:px-4 py-10 max-w-4xl mx-auto font-serif text-gray-800">
      <h1 className="text-4xl font-extrabold text-center leading-tight">
        Odesbaba Couture’s “African Heritage Meets Modern Elegance” – A Triumph of Cultural Refinement
      </h1>
      <p className='text-center italic'>21st July, 2022.</p>

      <div className="space-y-10 text-lg leading-relaxed">
        <p>
        With its latest collection, African Heritage Meets Modern Elegance, <strong>Odesbaba Couture</strong> redefines what it means to be a modern luxury brand rooted in African identity. The collection is a visual and emotional journey—a deliberate, artful fusion of rich cultural heritage and contemporary sophistication. This season, Odesbaba doesn’t just present fashion; it offers a cultural narrative stitched in gold thread, where ancestral legacy and modern design sensibilities dance in seamless harmony.
        </p>

        {/* <div className="w-full h-96 object-cover rounded-2xl"> */}
        <img
          src={images[0]}
          alt="Showcase visual"
          className="w-full h-96 object-contain rounded-2xl bg-none"
          />
        {/* </div> */}

        <p>
        At the heart of the collection is <strong>exquisite craftsmanship</strong>—a hallmark of the brand. Handwoven textiles, detailed beadwork, and bespoke tailoring showcase the meticulous artistry that Odesbaba is fast becoming known for. Fabrics native to the continent—aso-oke, kente, and richly dyed silks—are transformed into structured eveningwear, sharp suiting, and flowing gowns that speak to a global audience without losing their authenticity.
        </p>

        <img
          src={images[1]}
          alt="Fabrique"
          className="w-full h-96 object-contain rounded-2xl"
        />

        <p>
            The design language of the collection is bold yet refined. Silhouettes borrow from traditional African attire—flowing agbadas, wrap skirts, and kaftans—but are reinterpreted with architectural cuts, sleek tailoring, and minimalist embellishments. There is strength in the structure, and softness in the movement—every piece designed to honour the past while embracing the now.
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
            The color palette draws from the land punctuated by everlasting raw creativity from Africa. These hues evoke both the natural beauty of the continent and the regal essence of African royalty. Patterns and motifs, often hand-applied or woven in, are symbolic—each telling stories of heritage, identity, and pride.
         </p>

        <img
          src={images[4]}
          alt="Model in motion"
          className="w-full h-96 object-contain rounded-2xl"
          // className="w-full h-96 object-cover rounded-2xl shadow-md"
        />

        <p>
            For the discerning client, this collection offers a full sartorial spectrum—from <strong>haute couture</strong> masterpieces to elegantly tailored <strong> ready-to-wear</strong>, and <strong>bespoke pieces</strong> designed to be lived in and passed down. Odesbaba Couture is not only making garments; it is making heirlooms.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <img
            src={images[5]}
            alt="Model in motion"
            className="w-full h-96 object-contain rounded-2xl"

            // className="h-64 object-cover w-full rounded-xl shadow"
          />
          <p>
            What truly elevates the collection is its clarity of vision. In an industry where cultural elements are often borrowed without context, Odesbaba stands as a beacon of authenticity. This is luxury that does not compromise— <strong>elevated, rooted, and unmistakably African.</strong>
          </p>
          <img
            src={images[6]}
            alt="Model in motion"
            className="w-full h-96 object-contain rounded-2xl"
            // className="h-64 object-cover w-full rounded-xl shadow"
          />
          <p>
            African Heritage Meets Modern Elegance is more than a theme; it’s a philosophy—and Odesbaba Couture has brought it to life with breathtaking poise.
          </p>
          <img
            src={images[7]}
            alt="Editorial look"
            className="w-full h-96 object-contain rounded-2xl"
          />
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default DesignerDetail3;
