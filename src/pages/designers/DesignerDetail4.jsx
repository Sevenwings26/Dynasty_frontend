import React from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";

// images 

import AT1 from '../../assets/images/designers/R.M Atelier/AT1.jpg'
import AT2 from '../../assets/images/designers/R.M Atelier/AT2.jpg'
import AT3 from '../../assets/images/designers/R.M Atelier/AT3.jpg'
import AT4 from '../../assets/images/designers/R.M Atelier/AT4.jpg'
import AT5 from '../../assets/images/designers/R.M Atelier/AT5.jpg'
import AT6 from '../../assets/images/designers/R.M Atelier/AT6.jpg'
import AT7 from '../../assets/images/designers/R.M Atelier/AT7.jpg'
import AT8 from '../../assets/images/designers/R.M Atelier/AT8.jpg'



const images = [
AT1, AT2, AT3, AT4, AT5, AT6,AT7,AT8
];

const DesignerDetail4 = () => {
  return (
    <div className="bg-noir-900 min-h-screen text-zinc-100 flex flex-col font-sans selection:bg-gold-400 selection:text-black">
      <Header />

      <article className="max-w-4xl mx-auto px-4 py-16 w-full flex-1 font-serif">
        {/* Article Header */}
        <div className="text-center mb-12 space-y-3">
          <span className="text-xs uppercase tracking-[0.3em] text-gold-400 font-semibold px-3 py-1 rounded-full bg-gold-400/10 border border-gold-400/20">
            Designer Spotlight &bull; Radiant Melanique Atelier
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif text-white font-bold leading-tight pt-2">
            Afro Radiance – SS25 by Radiant Melanique Atelier
          </h1>
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-400 font-light">
            Published 16th August, 2021 &bull; Editorial Runway Review
          </p>
        </div>

        <div className="space-y-10 text-zinc-300 text-base sm:text-lg leading-relaxed font-light">
          <p className="text-xl sm:text-2xl font-serif text-gold-400 text-center italic font-semibold leading-relaxed border-b border-zinc-800 pb-6 mb-8 max-w-2xl mx-auto">
            “Illuminating the Future of Inclusive Luxury”
          </p>
          
          <p>
            With Afro Radiance for SS25, Radiant Melanique Atelier delivers more than a seasonal offering, it delivers a manifesto. Anchored in its bold vision to become a global voice in inclusive luxury, this Afro-centric brand continues to challenge fashion’s Eurocentric gaze, offering a collection that celebrates culture, diversity, and unapologetic self-expression.
          </p>

          <div className="rounded-2xl overflow-hidden border border-zinc-800 shadow-xl bg-zinc-950 p-2">
            <img
              src={images[0]}
              alt="Showcase visual"
              className="w-full max-h-[550px] object-contain rounded-xl"
            />
          </div>

          <p>
            Afro Radiance is a masterclass in cultural reverence and sartorial innovation. The collection draws from a rich palette of sun-soaked earth tones, vibrant citrus hues, and opulent metallics colors that evoke warmth, joy, and pride as the African culture strives in the darkness ointment of time. Textures range from airy hand-dyed cottons to structured jacquards woven with traditional motifs. Whether through flowing kaftans reimagined in silk organza or sharply tailored suits lined with Ankara-print accents, each garment radiates a quiet power.
          </p>

          <div className="rounded-2xl overflow-hidden border border-zinc-800 shadow-xl bg-zinc-950 p-2">
            <img
              src={images[1]}
              alt="Fabrique"
              className="w-full max-h-[550px] object-contain rounded-xl"
            />
          </div>

          <p>
            Designed with inclusivity at its core, the SS25 silhouettes celebrate form, not fit. Garments move with the body—fluid wrap dresses, wide-legged trousers with adjustable waistlines, and layered separates that invite personalization. This isn’t fashion that asks you to conform—it meets you where you are, and elevates you.
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
            Each piece in Afro Radiance tells a story—of diaspora, of heritage, of dreams deferred and dreams realized. Beading techniques reference Maasai traditions, while laser-cut overlays subtly nod to Ndebele wall art. Yet the storytelling never slips into costume; the execution is modern, minimalist where needed, and always intentional.
          </p>

          <div className="rounded-2xl overflow-hidden border border-zinc-800 shadow-xl bg-zinc-950 p-2">
            <img
              src={images[4]}
              alt="Model in motion"
              className="w-full max-h-[550px] object-contain rounded-xl"
            />
          </div>

          <p>
            True to its mission, Radiant Melanique Atelier continues to cast models across a spectrum of races, genders, ages, and abilities—proving that beauty isn’t a narrow ideal, but a global spectrum. The campaign imagery, set against landscapes that bridge Africa’s natural grandeur with futuristic architecture, underscores the brand’s message: Black identity is not only historic—it’s visionary.
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
              Ultimately, Afro Radiance is about illumination—of voices long dimmed, of traditions misunderstood, of beauty redefined. It positions Radiant Melanique Atelier as a leader not just in Afro-luxury, but in fashion’s evolution toward something more just, more joyful, and more human.
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
            A triumph. Afro Radiance SS25 doesn’t just raise the bar—it reimagines the runway as a space of cultural communion, personal empowerment, and radiant belonging.
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

export default DesignerDetail4;
