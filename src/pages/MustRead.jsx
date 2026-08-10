import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MustRead = () => {
  const [galleryItems, setGalleryItems] = useState([]);

  const baseUrl = import.meta.env.VITE_API_URL;
  const mustread = `${baseUrl}api/gallery`;

  useEffect(() => {
    axios
      .get(mustread)
      .then((response) => {
        setGalleryItems(response.data);
      })
      .catch((error) => {
        console.error("Error fetching the gallery data", error);
      });
  }, []);

  return (
    <div className="bg-noir-900 min-h-screen text-zinc-100 flex flex-col font-sans selection:bg-gold-400 selection:text-black">
      <Header />
      
      <section className="py-16 px-4 bg-zinc-950/80 border-b border-zinc-800/80 text-center">
        <span className="text-xs uppercase tracking-[0.3em] text-gold-400 font-semibold block mb-2">
          EDITORIAL ARTICLES
        </span>
        <h1 className="text-3xl sm:text-5xl font-serif text-white font-bold tracking-tight">
          Must Read
        </h1>
      </section>

      <main className="max-w-4xl mx-auto px-4 py-16 w-full flex-1">
        <div className="space-y-12">
          {galleryItems.map((item) => (
            <article key={item.id} className="flex flex-col items-center border-b border-zinc-800/60 pb-12 last:border-0 last:pb-0">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white uppercase text-center mb-6">{item.title}</h2>
              <div className="rounded-2xl overflow-hidden border border-zinc-800 shadow-xl bg-zinc-950 p-2 w-full md:w-2/3">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto object-cover rounded-xl"
                />
              </div>
              <p className="text-zinc-300 text-base sm:text-lg leading-relaxed font-light mt-8 w-full md:w-5/6 text-left">{item.body}</p>
            </article>
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default MustRead;
