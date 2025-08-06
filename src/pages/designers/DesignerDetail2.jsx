import React from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";

// images 
// import FB1 from '../../'
import DT0 from '../../assets/images/designers/DHVEN TOUCH/DT0.jpg'
import DT1 from '../../assets/images/designers/DHVEN TOUCH/DT1.jpg'
import DT2 from '../../assets/images/designers/DHVEN TOUCH/DT2.jpg'
import DT3 from '../../assets/images/designers/DHVEN TOUCH/DT3.jpg'
import DT4 from '../../assets/images/designers/DHVEN TOUCH/DT4.jpg'
import DT5 from '../../assets/images/designers/DHVEN TOUCH/DT5.jpg'
import DT6 from '../../assets/images/designers/DHVEN TOUCH/DT6.jpg'
import DT7 from '../../assets/images/designers/DHVEN TOUCH/DT7.jpg'
import DT8 from '../../assets/images/designers/DHVEN TOUCH/DT8.jpg'



const images = [
  DT0, DT1, DT2, DT3, DT4, DT5, DT6, DT7, DT8
];

const DesignerDetail2 = () => {
  return (
    <div>
    <Header/>
    <div className="min-h-screen bg-white px-4 md:px-4 py-10 max-w-4xl mx-auto font-serif text-gray-800">
      <h1 className="text-4xl font-extrabold text-center leading-tight">
        Dhven Touch – Where Dreamwear Meets Design Precision
      </h1>
      <p className='text-center italic'>1st October, 2022.</p>

      <div className="space-y-10 text-lg leading-relaxed">
        <p>
          In a fashion landscape increasingly defined by mass production and fleeting trends, <strong>Dhven Touch</strong> offers a refreshing return to what truly matters: <strong> intentional design, expert craftsmanship, and the power of personal expression.</strong> Their latest collection is a quiet triumph—an eloquent showcase of what happens when creativity is fused with precision and each piece is crafted not for the crowd, but for the individual.
        </p>

        {/* <div className="w-full h-96 object-cover rounded-2xl"> */}
        <img
          src={images[0]}
          alt="Showcase visual"
          className="w-full h-96 object-contain rounded-2xl bg-none"
          />
        {/* </div> */}

        <p>
            Specializing in <strong>custom-made outfits for both men and women</strong>, Dhven Touch has carved out a niche in the world of tailored elegance. This collection stands as a testament to the brand’s mission: to bring fashion dreams to life, one perfectly stitched seam at a time.
        </p>
        <p>
            At first glance, the collection captures attention with its effortless <strong>balance of tradition and trend</strong>. There is no single defining look—instead, Dhven Touch delivers a <strong>versatile and deeply personal range</strong>, each piece tailored to reflect the client’s character, the moment, and the mood.
        </p>

        <img
          src={images[1]}
          alt="Fabrique"
          className="w-full h-96 object-contain rounded-2xl"
        />

        <p>
            For women, the silhouettes are as diverse as they are flattering: flowing gowns that command attention, sleek jumpsuits that exude modern confidence, and two-piece sets that balance structure and softness with grace. Fabrics range from sumptuous satins and rich velvets to airy chiffons and finely woven lace—all chosen for their texture, drape, and visual allure.
        </p>
        <p>
            Men’s tailoring is no less exceptional. Dhven Touch reinterprets classic menswear with bold cuts, luxe detailing, and a contemporary edge. Blazers come with exaggerated lapels, trousers are tailored with minimalist precision, and traditional attire is refreshed with inventive textiles and embroidery that nod to cultural roots while looking firmly forward.
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
            What sets Dhven Touch apart is not just the aesthetic, but the craft behind the collection. Every stitch, pleat, and hem is evidence of a skilled hand at work—rooted in traditional techniques but refined for today’s fashion-savvy client. Fit is treated as a sacred principle. Every garment is made-to-measure, ensuring not only comfort but confidence.
            This attention to detail and finish—from invisible zippers to hand-applied embellishments—is where Dhven Touch quietly shines. Nothing feels overdone, but everything feels considered.                    
        </p>

        <img
          src={images[4]}
          alt="Model in motion"
          className="w-full h-96 object-contain rounded-2xl"
          // className="w-full h-96 object-cover rounded-2xl shadow-md"
        />

        <p>
            While the collection incorporates current fashion trends—like exaggerated sleeves, monochrome palettes, and textural layering—it does so with <strong>subtlety and purpose</strong>. Dhven Touch’s designs avoid the pitfall of trend-chasing. Instead, they offer <strong>timeless wearability</strong>, ideal for weddings, red carpet events, formal galas, or simply those moments when one wants to feel seen and remembered.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <img
            src={images[5]}
            alt="Model in motion"
            className="w-full h-96 object-contain rounded-2xl"

            // className="h-64 object-cover w-full rounded-xl shadow"
          />
          <p>
            Each outfit speaks to a modern lifestyle but is designed to outlast the season. This is fashion meant to be revisited, restyled, and re-worn—an increasingly rare quality in today’s fast-paced industry.
            True to its name, Dhven Touch infuses each piece with a sense of intimacy and individuality. Whether designing for a client’s most important day or crafting an everyday essential, the brand listens. It understands that the best fashion doesn’t just fit the body—it fits the story
          </p>
          <img
            src={images[6]}
            alt="Model in motion"
            className="w-full h-96 object-contain rounded-2xl"
            // className="h-64 object-cover w-full rounded-xl shadow"
          />
          <p>
            This collection reminds us that luxury is not always about spectacle. Sometimes, it’s in the quiet assurance of a well-fitted sleeve, the glimmer of hand-beaded detail, or the way a fabric moves in perfect harmony with its wearer.
            Dhven Touch has proven with this collection that personal style is powerful, and when placed in the right hands, it becomes unforgettable. Melding traditional techniques with modern vision, the brand doesn’t just follow fashion—it transforms it into something uniquely yours.
            If fashion is a language, then <strong>Dhven Touch</strong> is fluent in elegance, identity, and craftsmanship. This is a brand where dreams are not only welcomed—they are tailored to perfection.

          </p>
          <img
            src={images[7]}
            alt="Editorial look"
            className="w-full h-96 object-contain rounded-2xl"

            // className="h-64 object-cover w-full rounded-xl shadow"
          />
          <img
            src={images[8]}
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

export default DesignerDetail2;
