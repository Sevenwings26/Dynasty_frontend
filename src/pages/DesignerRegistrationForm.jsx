import React, { useState } from "react";
import Swal from "sweetalert2";
import AxiosInstance from "../api/AxiosInstance";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const DesignerRegistrationForm = () => {
  const [formData, setFormData] = useState({
    brand_name: "",
    phone_number: "",
    email: "",
    instagram_id: "",
    tiktok_id: "",
    facebook_id: "",
    country: "",
    state: "",
    city: "",
    postal_code: "",
    application_type: [],
    designer_category: [],
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prevState) => {
        const updatedValues = checked
          ? [...prevState[name], value]
          : prevState[name].filter((item) => item !== value);
        return {
          ...prevState,
          [name]: updatedValues,
        };
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    AxiosInstance.post("api/applications/", formData)
      .then((response) => {
        setIsSubmitting(false);
        Swal.fire({
          title: "Application Received!",
          text: "Your application has been successfully submitted. Check your email for confirmation.",
          icon: "success",
          confirmButtonColor: "#D4AF37",
        }).then(() => {
          navigate("/");
        });
      })
      .catch((error) => {
        setIsSubmitting(false);
        Swal.fire({
          title: "Submission Error",
          text: "There was an error submitting your application. Please check your information.",
          icon: "error",
          confirmButtonColor: "#EF4444",
        });
        console.error("Submission error:", error);
      });
  };

  const appTypes = [
    { id: "exhibition", label: "Exhibition Booth" },
    { id: "runway", label: "Runway Showcase" },
    { id: "both", label: "Exhibition & Runway Both" },
  ];

  const categories = [
    "Fashion Designer",
    "Exclusive Designer",
    "Stylist / Wardrobe Curator",
    "Accessory & Jewelry Designer",
    "Emerging Designer",
    "Established Couture Brand",
  ];

  return (
    <div className="bg-noir-900 min-h-screen text-zinc-100 flex flex-col font-sans selection:bg-gold-400 selection:text-black">
      <Header />

      {/* Header Banner */}
      <section className="py-16 px-4 bg-zinc-950/80 border-b border-zinc-800/80 text-center">
        <span className="text-xs uppercase tracking-[0.3em] text-gold-400 font-semibold block mb-2">
          Runway Application
        </span>
        <h1 className="text-3xl sm:text-5xl font-serif text-white font-bold tracking-tight">
          Designer & Exhibitor Registration
        </h1>
        <p className="max-w-2xl mx-auto text-zinc-400 text-sm font-light mt-3 leading-relaxed">
          Official application portal for fashion designers, stylists, and exhibitors participating in Arcade Dynasty fashion showcases.
        </p>
      </section>

      {/* Form Container */}
      <main className="max-w-4xl mx-auto px-4 py-16 w-full flex-1">
        <form
          onSubmit={handleSubmit}
          className="bg-zinc-900/90 border border-zinc-800 rounded-3xl p-8 sm:p-12 shadow-2xl space-y-10"
        >
          {/* Brand & Contact Section */}
          <div className="space-y-6">
            <h2 className="text-xl font-serif text-white font-bold border-b border-zinc-800 pb-3 flex items-center justify-between">
              <span>01. Brand & Contact Information</span>
              <span className="text-xs text-gold-400 font-sans tracking-widest uppercase">Required</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs uppercase tracking-wider text-zinc-300 mb-1.5 font-medium" htmlFor="brand_name">
                  Brand Name *
                </label>
                <input
                  id="brand_name"
                  name="brand_name"
                  type="text"
                  value={formData.brand_name}
                  onChange={handleChange}
                  placeholder="e.g. Atelier Dynasty"
                  className="w-full bg-zinc-950/80 border border-zinc-700/80 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-gold-400 transition"
                  required
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-zinc-300 mb-1.5 font-medium" htmlFor="email">
                  Official Email *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="designer@brand.com"
                  className="w-full bg-zinc-950/80 border border-zinc-700/80 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-gold-400 transition"
                  required
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-zinc-300 mb-1.5 font-medium" htmlFor="phone_number">
                  Phone Number (WhatsApp) *
                </label>
                <input
                  id="phone_number"
                  name="phone_number"
                  type="tel"
                  value={formData.phone_number}
                  onChange={handleChange}
                  placeholder="+234..."
                  className="w-full bg-zinc-950/80 border border-zinc-700/80 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-gold-400 transition"
                  required
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-zinc-300 mb-1.5 font-medium" htmlFor="instagram_id">
                  Instagram Handle *
                </label>
                <input
                  id="instagram_id"
                  name="instagram_id"
                  type="text"
                  value={formData.instagram_id}
                  onChange={handleChange}
                  placeholder="@brand_instagram"
                  className="w-full bg-zinc-950/80 border border-zinc-700/80 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-gold-400 transition"
                  required
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-zinc-300 mb-1.5 font-medium" htmlFor="tiktok_id">
                  TikTok Handle
                </label>
                <input
                  id="tiktok_id"
                  name="tiktok_id"
                  type="text"
                  value={formData.tiktok_id}
                  onChange={handleChange}
                  placeholder="@brand_tiktok"
                  className="w-full bg-zinc-950/80 border border-zinc-700/80 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-gold-400 transition"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-zinc-300 mb-1.5 font-medium" htmlFor="facebook_id">
                  Facebook Page / ID
                </label>
                <input
                  id="facebook_id"
                  name="facebook_id"
                  type="text"
                  value={formData.facebook_id}
                  onChange={handleChange}
                  placeholder="facebook.com/brand"
                  className="w-full bg-zinc-950/80 border border-zinc-700/80 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-gold-400 transition"
                />
              </div>
            </div>
          </div>

          {/* Location Section */}
          <div className="space-y-6 pt-4">
            <h2 className="text-xl font-serif text-white font-bold border-b border-zinc-800 pb-3">
              02. Studio Location
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs uppercase tracking-wider text-zinc-300 mb-1.5 font-medium" htmlFor="country">
                  Country *
                </label>
                <input
                  id="country"
                  name="country"
                  type="text"
                  value={formData.country}
                  onChange={handleChange}
                  placeholder="Nigeria"
                  className="w-full bg-zinc-950/80 border border-zinc-700/80 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-gold-400 transition"
                  required
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-zinc-300 mb-1.5 font-medium" htmlFor="state">
                  State / Province *
                </label>
                <input
                  id="state"
                  name="state"
                  type="text"
                  value={formData.state}
                  onChange={handleChange}
                  placeholder="Lagos"
                  className="w-full bg-zinc-950/80 border border-zinc-700/80 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-gold-400 transition"
                  required
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-zinc-300 mb-1.5 font-medium" htmlFor="city">
                  City *
                </label>
                <input
                  id="city"
                  name="city"
                  type="text"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Ikeja"
                  className="w-full bg-zinc-950/80 border border-zinc-700/80 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-gold-400 transition"
                  required
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-zinc-300 mb-1.5 font-medium" htmlFor="postal_code">
                  Postal Code
                </label>
                <input
                  id="postal_code"
                  name="postal_code"
                  type="text"
                  value={formData.postal_code}
                  onChange={handleChange}
                  placeholder="100001"
                  className="w-full bg-zinc-950/80 border border-zinc-700/80 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-gold-400 transition"
                />
              </div>
            </div>
          </div>

          {/* Application Category */}
          <div className="space-y-6 pt-4">
            <h2 className="text-xl font-serif text-white font-bold border-b border-zinc-800 pb-3">
              03. Showcase & Category Selection
            </h2>

            <div>
              <label className="block text-xs uppercase tracking-wider text-gold-400 mb-3 font-semibold">
                Application Type
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {appTypes.map((type) => (
                  <label
                    key={type.id}
                    className={`flex items-center space-x-3 p-4 rounded-xl border cursor-pointer transition ${
                      formData.application_type.includes(type.id)
                        ? "bg-gold-400/15 border-gold-400 text-white"
                        : "bg-zinc-950/60 border-zinc-800 text-zinc-300 hover:border-zinc-700"
                    }`}
                  >
                    <input
                      type="checkbox"
                      name="application_type"
                      value={type.id}
                      checked={formData.application_type.includes(type.id)}
                      onChange={handleChange}
                      className="accent-gold-400 h-4 w-4 rounded"
                    />
                    <span className="text-xs font-medium">{type.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <label className="block text-xs uppercase tracking-wider text-gold-400 mb-3 font-semibold">
                Designer Category
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {categories.map((cat) => (
                  <label
                    key={cat}
                    className={`flex items-center space-x-3 p-3.5 rounded-xl border cursor-pointer transition ${
                      formData.designer_category.includes(cat)
                        ? "bg-gold-400/15 border-gold-400 text-white"
                        : "bg-zinc-950/60 border-zinc-800 text-zinc-300 hover:border-zinc-700"
                    }`}
                  >
                    <input
                      type="checkbox"
                      name="designer_category"
                      value={cat}
                      checked={formData.designer_category.includes(cat)}
                      onChange={handleChange}
                      className="accent-gold-400 h-4 w-4 rounded"
                    />
                    <span className="text-xs font-medium">{cat}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-6 text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-80 py-4 px-8 rounded-full bg-gold-400 text-black font-semibold text-xs uppercase tracking-[0.2em] hover:bg-white transition duration-300 shadow-glow-gold disabled:opacity-50"
            >
              {isSubmitting ? "Submitting Application..." : "Submit Designer Application"}
            </button>
          </div>
        </form>
      </main>

      <Footer />
    </div>
  );
};

export default DesignerRegistrationForm;

