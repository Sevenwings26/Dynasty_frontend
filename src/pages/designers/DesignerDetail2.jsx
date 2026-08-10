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
    <div className="bg-noir-900 min-h-screen text-zinc-100 flex flex-col font-sans selection:bg-gold-400 selection:text-black">
      <Header />

      <article className="max-w-4xl mx-auto px-4 py-16 w-full flex-1 font-serif">
        {/* Article Header */}
        <div className="text-center mb-12 space-y-3">
          <span className="text-xs uppercase tracking-[0.3em] text-gold-400 font-semibold px-3 py-1 rounded-full bg-gold-400/10 border border-gold-400/20">
            Designer Spotlight &bull; Dhven Touch
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif text-white font-bold leading-tight pt-2">
            Dhven Touch – Where Dreamwear Meets Design Precision
          </h1>
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-400 font-light">
            Published 1st October, 2022 &bull; Editorial Runway Review
          </p>
        </div>

        <div className="space-y-10 text-zinc-300 text-base sm:text-lg leading-relaxed font-light">
          <p>
            In a fashion landscape increasingly defined by mass production and fleeting trends, <strong>Dhven Touch</strong> offers a refreshing return to what truly matters: <strong className="text-white font-medium">intentional design, expert craftsmanship, and the power of personal expression.</strong> Their latest collection is a quiet triumph—an eloquent showcase of what happens when creativity is fused with precision and each piece is crafted not for the crowd, but for the individual.
          </p>

          <div className="rounded-2xl overflow-hidden border border-zinc-800 shadow-xl bg-zinc-950 p-2">
            <img
              src={images[0]}
              alt="Showcase visual"
              className="w-full max-h-[550px] object-contain rounded-xl"
            />
          </div>

          <p>
            Specializing in <strong className="text-white font-medium">custom-made outfits for both men and women</strong>, Dhven Touch has carved out a niche in the world of tailored elegance. This collection stands as a testament to the brand’s mission: to bring fashion dreams to life, one perfectly stitched seam at a time.
          </p>
          <p>
            At first glance, the collection captures attention with its effortless <strong className="text-white font-medium">balance of tradition and trend</strong>. There is no single defining look—instead, Dhven Touch delivers a <strong className="text-white font-medium">versatile and deeply personal range</strong>, each piece tailored to reflect the client’s character, the moment, and the mood.
          </p>

          <div className="rounded-2xl overflow-hidden border border-zinc-800 shadow-xl bg-zinc-950 p-2">
            <img
              src={images[1]}
              alt="Fabrique"
              className="w-full max-h-[550px] object-contain rounded-xl"
            />
          </div>

          <p>
            For women, the silhouettes are as diverse as they are flattering: flowing gowns that command attention, sleek jumpsuits that exude modern confidence, and two-piece sets that balance structure and softness with grace. Fabrics range from sumptuous satins and rich velvets to airy chiffons and finely woven lace—all chosen for their texture, drape, and visual allure.
          </p>
          <p>
            Men’s tailoring is no less exceptional. Dhven Touch reinterprets classic menswear with bold cuts, luxe detailing, and a contemporary edge. Blazers come with exaggerated lapels, trousers are tailored with minimalist precision, and traditional attire is refreshed with inventive textiles and embroidery that nod to cultural roots while looking firmly forward.
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
            What sets Dhven Touch apart is not just the aesthetic, but the craft behind the collection. Every stitch, pleat, and hem is evidence of a skilled hand at work—rooted in traditional techniques but refined for today’s fashion-savvy client. Fit is treated as a sacred principle. Every garment is made-to-measure, ensuring not only comfort but confidence.
            This attention to detail and finish—from invisible zippers to hand-applied embellishments—is where Dhven Touch quietly shines. Nothing feels overdone, but everything feels considered.                    
          </p>

          <div className="rounded-2xl overflow-hidden border border-zinc-800 shadow-xl bg-zinc-950 p-2">
            <img
              src={images[4]}
              alt="Model in motion"
              className="w-full max-h-[550px] object-contain rounded-xl"
            />
          </div>

          <p>
            While the collection incorporates current fashion trends—like exaggerated sleeves, monochrome palettes, and textural layering—it does so with <strong className="text-white font-medium">subtlety and purpose</strong>. Dhven Touch’s designs avoid the pitfall of trend-chasing. Instead, they offer <strong className="text-white font-medium">timeless wearability</strong>, ideal for weddings, red carpet events, formal galas, or simply those moments when one wants to feel seen and remembered.
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
              Each outfit speaks to a modern lifestyle but is designed to outlast the season. This is fashion meant to be revisited, restyled, and re-worn—an increasingly rare quality in today’s fast-paced industry.
              True to its name, Dhven Touch infuses each piece with a sense of intimacy and individuality. Whether designing for a client’s most important day or crafting an everyday essential, the brand listens. It understands that the best fashion doesn’t just fit the body—it fits the story.
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
            This collection reminds us that luxury is not always about spectacle. Sometimes, it’s in the quiet assurance of a well-fitted sleeve, the glimmer of hand-beaded detail, or the way a fabric moves in perfect harmony with its wearer.
            Dhven Touch has proven with this collection that personal style is powerful, and when placed in the right hands, it becomes unforgettable. Melding traditional techniques with modern vision, the brand doesn’t just follow fashion—it transforms it into something uniquely yours.
            If fashion is a language, then <strong className="text-gold-400">Dhven Touch</strong> is fluent in elegance, identity, and craftsmanship. This is a brand where dreams are not only welcomed—they are tailored to perfection.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-8">
            <div className="rounded-2xl overflow-hidden border border-zinc-800 shadow-xl bg-zinc-950 p-2">
              <img
                src={images[7]}
                alt="Editorial look"
                className="w-full h-80 sm:h-96 object-contain rounded-xl"
              />
            </div>
            <div className="rounded-2xl overflow-hidden border border-zinc-800 shadow-xl bg-zinc-950 p-2">
              <img
                src={images[8]}
                alt="Editorial look"
                className="w-full h-80 sm:h-96 object-contain rounded-xl"
              />
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default DesignerDetail2;
