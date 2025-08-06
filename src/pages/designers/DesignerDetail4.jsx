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
    <div>
    <Header/>
    <div className="min-h-screen bg-white px-4 md:px-4 py-10 max-w-4xl mx-auto font-serif text-gray-800">
      <h1 className="text-4xl font-extrabold text-center leading-tight">
        Afro Radiance – SS25 by <span className="">Radiant Melanique Atelier</span>
      </h1>
      <p className='text-center italic'> 16th August, 2021.</p>
      <div className="space-y-10 text-lg leading-relaxed">
        <p>
            Illuminating the Future of Inclusive Luxury
        </p>
        
        <p>
        With Afro Radiance for SS25, Radiant Melanique Atelier delivers more than a seasonal offering, it delivers a manifesto. Anchored in its bold vision to become a global voice in inclusive luxury, this Afro-centric brand continues to challenge fashion’s Eurocentric gaze, offering a collection that celebrates culture, diversity, and unapologetic self-expression.
        </p>

        {/* <div className="w-full h-96 object-cover rounded-2xl"> */}
        <img
          src={images[0]}
          alt="Showcase visual"
          className="w-full h-96 object-contain rounded-2xl bg-none"
          />
        {/* </div> */}

        <p>
            Afro Radiance is a masterclass in cultural reverence and sartorial innovation. The collection draws from a rich palette of sun-soaked earth tones, vibrant citrus hues, and opulent metallics colors that evoke warmth, joy, and pride as the African culture strives in the darkness ointment of time. Textures range from airy hand-dyed cottons to structured jacquards woven with traditional motifs. Whether through flowing kaftans reimagined in silk organza or sharply tailored suits lined with Ankara-print accents, each garment radiates a quiet power.
        </p>
        <img
          src={images[1]}
          alt="Fabrique"
          className="w-full h-96 object-contain rounded-2xl"
        />

        <p>
            Designed with inclusivity at its core, the SS25 silhouettes celebrate form, not fit. Garments move with the body—fluid wrap dresses, wide-legged trousers with adjustable waistlines, and layered separates that invite personalization. This isn’t fashion that asks you to conform—it meets you where you are, and elevates you.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <img
            src={images[2]}
            alt="Color palette"
          className="w-full h-96 object-contain rounded-2xl"
          />

          <img
            src={images[3]}
            alt="Runway expression"
            className="w-full h-96 object-contain rounded-2xl"
            // className="h-80 object-cover w-full rounded-xl shadow"
          />
        </div>

        <p>
            Each piece in Afro Radiance tells a story—of diaspora, of heritage, of dreams deferred and dreams realized. Beading techniques reference Maasai traditions, while laser-cut overlays subtly nod to Ndebele wall art. Yet the storytelling never slips into costume; the execution is modern, minimalist where needed, and always intentional.
         </p>

        <img
          src={images[4]}
          alt="Model in motion"
          className="w-full h-96 object-contain rounded-2xl"
          // className="w-full h-96 object-cover rounded-2xl shadow-md"
        />

        <p>
            True to its mission, Radiant Melanique Atelier continues to cast models across a spectrum of races, genders, ages, and abilities—proving that beauty isn’t a narrow ideal, but a global spectrum. The campaign imagery, set against landscapes that bridge Africa’s natural grandeur with futuristic architecture, underscores the brand’s message: Black identity is not only historic—it’s visionary.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <img
            src={images[5]}
            alt="Model in motion"
            className="w-full h-96 object-contain rounded-2xl"

            // className="h-64 object-cover w-full rounded-xl shadow"
          />
          <p>
            Ultimately, Afro Radiance is about illumination—of voices long dimmed, of traditions misunderstood, of beauty redefined. It positions Radiant Melanique Atelier as a leader not just in Afro-luxury, but in fashion’s evolution toward something more just, more joyful, and more human.
          </p>
          <img
            src={images[6]}
            alt="Model in motion"
            className="w-full h-96 object-contain rounded-2xl"
            // className="h-64 object-cover w-full rounded-xl shadow"
          />
          <p>
            A triumph. Afro Radiance SS25 doesn’t just raise the bar—it reimagines the runway as a space of cultural communion, personal empowerment, and radiant belonging.

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

export default DesignerDetail4;
