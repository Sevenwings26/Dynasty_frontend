import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import S1 from '../../assets/images/designers/sannah/S1.jpg'
import S2 from '../../assets/images/designers/sannah/S2.jpg'
import S3 from '../../assets/images/designers/sannah/S3.jpg'
import S4 from '../../assets/images/designers/sannah/S4.jpg'
import S5 from '../../assets/images/designers/sannah/S5.jpg'

const images = [S1, S2, S3, S4, S5]

const DesignerInterview = () => {
  return (
    <div>
    <Header/>
    <div className="bg-white min-h-screen py-10 px-6 md:px-20">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10">
          An Interview Session with <span className="text-red-500">Sannah Fashion Hub</span>
        </h1>

        {/* Hero Section Images */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {[S1, S2, S3, S4].map((src, i) => (
            <div
            key={i}
            // className="relative group overflow-hidden rounded-2xl bg-[url('https://www.toptal.com/designers/subtlepatterns/patterns/dot-grid.png')] bg-cover p-1 shadow-md hover:shadow-xl transition duration-500"
            className="relative group overflow-hidden rounded-2xl bg-white bg-cover p-1 shadow-md hover:shadow-xl transition duration-500"
            >
            <img
                src={src}
                alt="Sannah fashion"
                className="rounded-xl h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
            </div>
        ))}
        </div>


        {/* Interview Content */}
        <div className="space-y-8 leading-relaxed text-gray-800">
          <div>
            <h2 className="font-semibold text-xl mb-2">“Culture Fit” Collection by Sannah FashionHub</h2>
            <p className="mb-2">
                At the Afrocentric Fashion Show, Sannah FashionHub unveiled its much-anticipated “Culture Fit” collection — a vibrant, contemporary homage to African heritage that celebrates identity, craftsmanship, and confidence. The showcase was more than a fashion presentation; it was a visual dialogue between tradition and modernity.    
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-xl mb-2">Design Concept and Inspiration</h2>
            <p className="mb-2">The Culture Fit collection lived up to its name by seamlessly blending cultural symbolism with modern silhouettes. Each look reflected a nuanced understanding of how today’s generation interprets African fashion — rooted in heritage but bold in global appeal. From Ankara and kente-inspired prints to rich aso-oke textures and beaded detailing, the collection explored regional diversity while maintaining cohesion through color harmony and thoughtful tailoring.
        </p>
            <img
                src={images[2]}
                alt="Model in motion"
                className="w-full object-contain rounded-2xl"
                />
          </div>

          <div>
            <h2 className="font-semibold text-xl mb-2">Color Palette and Textiles</h2>
            <p className="mb-2">
                Sannah FashionHub leaned into deep earthy tones — ochres, emeralds, burnt orange — contrasted with vibrant prints that popped under the runway lights. The use of sustainably sourced African fabrics underscored the brand’s commitment to ethical fashion and local craftsmanship. Texture played a key role: woven fabrics juxtaposed with soft cottons and modern mesh inserts brought tactile interest and urban edge.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-xl mb-2">Silhouettes and Styling</h2>
            <p className="mb-2">
                The silhouettes were strikingly inclusive — flowing kaftans, structured blazers with tribal accents, cinched-waist dresses, and androgynous pieces that blurred gender lines. Each design felt wearable yet statement-making. Layering, bold accessories, and confident styling amplified the message: culture is not static — it evolves, and we evolve with it.
            </p>
          </div>
          <div>
            <h2 className="font-semibold text-xl mb-2">Overall Presentation
            </h2>
            <p className="mb-2">
            The runway presentation was immersive, with rhythmic Afrobeat soundscapes and lighting that echoed the vibrancy of African marketplaces. Models of diverse backgrounds and body types embodied the essence of the theme — “fit” in both fashion and identity. The energy in the room was palpable, as each look celebrated individuality within a shared cultural narrative.
            </p>
          </div>
          
          <div>
            <h2 className="font-semibold text-xl mb-2">Final Verdict</h2>
            <p className="mb-2">
                Sannah FashionHub’s Culture Fit collection was a triumph of cultural expression and contemporary creativity. It reaffirmed the brand’s position as a voice for Afrocentric modernity — stylish, proud, and unapologetically rooted in heritage. The collection didn’t just showcase clothes; it told a story of belonging and evolution, making it one of the standout moments of the show.
            </p>
            <img
                src={images[3]}
                alt="Model in motion"
                className="w-full object-contain rounded-2xl"
                />
          </div>
        </div>

        {/* <div className="text-center mt-12">
          <p className="italic text-gray-500">
            “Fashion is more than clothing — it’s confidence, creativity, and culture.”
          </p>
        </div> */}
      </div>
    </div>
    <Footer/>
    </div>

  );
};

export default DesignerInterview;

