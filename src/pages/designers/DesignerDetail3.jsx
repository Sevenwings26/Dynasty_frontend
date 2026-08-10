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
    <div className="bg-noir-900 min-h-screen text-zinc-100 flex flex-col font-sans selection:bg-gold-400 selection:text-black">
      <Header />

      <article className="max-w-4xl mx-auto px-4 py-16 w-full flex-1 font-serif">
        {/* Article Header */}
        <div className="text-center mb-12 space-y-3">
          <span className="text-xs uppercase tracking-[0.3em] text-gold-400 font-semibold px-3 py-1 rounded-full bg-gold-400/10 border border-gold-400/20">
            Designer Spotlight &bull; Odesbaba Couture
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif text-white font-bold leading-tight pt-2">
            Odesbaba Couture’s “African Heritage Meets Modern Elegance” – A Triumph of Cultural Refinement
          </h1>
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-400 font-light">
            Published 21st July, 2022 &bull; Editorial Runway Review
          </p>
        </div>

        <div className="space-y-10 text-zinc-300 text-base sm:text-lg leading-relaxed font-light">
          <p>
            With its latest collection, African Heritage Meets Modern Elegance, <strong>Odesbaba Couture</strong> redefines what it means to be a modern luxury brand rooted in African identity. The collection is a visual and emotional journey—a deliberate, artful fusion of rich cultural heritage and contemporary sophistication. This season, Odesbaba doesn’t just present fashion; it offers a cultural narrative stitched in gold thread, where ancestral legacy and modern design sensibilities dance in seamless harmony.
          </p>

          <div className="rounded-2xl overflow-hidden border border-zinc-800 shadow-xl bg-zinc-950 p-2">
            <img
              src={images[0]}
              alt="Showcase visual"
              className="w-full max-h-[550px] object-contain rounded-xl"
            />
          </div>

          <p>
            At the heart of the collection is <strong className="text-white font-medium">exquisite craftsmanship</strong>—a hallmark of the brand. Handwoven textiles, detailed beadwork, and bespoke tailoring showcase the meticulous artistry that Odesbaba is fast becoming known for. Fabrics native to the continent—aso-oke, kente, and richly dyed silks—are transformed into structured eveningwear, sharp suiting, and flowing gowns that speak to a global audience without losing their authenticity.
          </p>

          <div className="rounded-2xl overflow-hidden border border-zinc-800 shadow-xl bg-zinc-950 p-2">
            <img
              src={images[1]}
              alt="Fabrique"
              className="w-full max-h-[550px] object-contain rounded-xl"
            />
          </div>

          <p>
            The design language of the collection is bold yet refined. Silhouettes borrow from traditional African attire—flowing agbadas, wrap skirts, and kaftans—but are reinterpreted with architectural cuts, sleek tailoring, and minimalist embellishments. There is strength in the structure, and softness in the movement—every piece designed to honour the past while embracing the now.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-8">
            <div className="rounded-2xl overflow-hidden border border-zinc-800 shadow-xl bg-zinc-950 p-2">
              <img
                src={images[2]}
                alt="Color palette"
                className="w-full h-80 sm:h-96 object-contain rounded-xl"
              />
            </div>

            <div className="rounded-2xl overflow-hidden border border-zinc-800 shadow-xl bg-zinc-950 p-2">
              <img
                src={images[3]}
                alt="Runway expression"
                className="w-full h-80 sm:h-96 object-contain rounded-xl"
              />
            </div>
          </div>

          <p>
            The color palette draws from the land punctuated by everlasting raw creativity from Africa. These hues evoke both the natural beauty of the continent and the regal essence of African royalty. Patterns and motifs, often hand-applied or woven in, are symbolic—each telling stories of heritage, identity, and pride.
          </p>

          <div className="rounded-2xl overflow-hidden border border-zinc-800 shadow-xl bg-zinc-950 p-2">
            <img
              src={images[4]}
              alt="Model in motion"
              className="w-full max-h-[550px] object-contain rounded-xl"
            />
          </div>

          <p>
            For the discerning client, this collection offers a full sartorial spectrum—from <strong className="text-white font-medium">haute couture</strong> masterpieces to elegantly tailored <strong className="text-white font-medium">ready-to-wear</strong>, and <strong className="text-white font-medium">bespoke pieces</strong> designed to be lived in and passed down. Odesbaba Couture is not only making garments; it is making heirlooms.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 my-8">
            <div className="rounded-2xl overflow-hidden border border-zinc-800 shadow-xl bg-zinc-950 p-2 flex items-center justify-center">
              <img
                src={images[5]}
                alt="Model in motion"
                className="w-full h-72 sm:h-80 object-contain rounded-xl"
              />
            </div>
            <p className="flex items-center text-sm font-light text-zinc-400 leading-relaxed px-2">
              What truly elevates the collection is its clarity of vision. In an industry where cultural elements are often borrowed without context, Odesbaba stands as a beacon of authenticity. This is luxury that does not compromise— <strong className="text-gold-400 font-medium">elevated, rooted, and unmistakably African.</strong>
            </p>
            <div className="rounded-2xl overflow-hidden border border-zinc-800 shadow-xl bg-zinc-950 p-2 flex items-center justify-center">
              <img
                src={images[6]}
                alt="Model in motion"
                className="w-full h-72 sm:h-80 object-contain rounded-xl"
              />
            </div>
          </div>

          <p className="text-zinc-300">
            African Heritage Meets Modern Elegance is more than a theme; it’s a philosophy—and Odesbaba Couture has brought it to life with breathtaking poise.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-8">
            <div className="rounded-2xl overflow-hidden border border-zinc-800 shadow-xl bg-zinc-950 p-2 sm:col-span-2">
              <img
                src={images[7]}
                alt="Editorial look"
                className="w-full max-h-[550px] object-contain rounded-xl"
              />
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default DesignerDetail3;
