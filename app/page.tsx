"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";

const BRAND = "Ritmos";
const LOCATION = "Based in Cambodia";

// Placeholder images (replace later)
const placeholderImg = "https://via.placeholder.com/300x200?text=Product";
const logoPlaceholder = "https://via.placeholder.com/150x50?text=Logo";

const products = {
  Signum: [
    { name: "Signum 1", price: 17.5, ref: "S1 50x124 – Robusto", img: placeholderImg, details: "Medium-bodied with cedar, cream, and light spice." },
    { name: "Signum 2", price: 18.0, ref: "S2 52x128 – Robusto", img: placeholderImg, details: "Balanced profile with cocoa and toasted oak." },
    { name: "Signum 3", price: 18.75, ref: "S3 54x135 – Toro", img: placeholderImg, details: "Smooth draw with notes of leather and sweet spice." },
    { name: "Signum 4", price: 19.88, ref: "S4 56x140 – Toro", img: placeholderImg, details: "Rich smoke with earth, cedar, and cream." },
    { name: "Signum 5", price: 20.0, ref: "S5 58x150 – Grand Toro", img: placeholderImg, details: "Fuller body with cocoa and roasted coffee." },
    { name: "Signum 6", price: 26.25, ref: "S6 60x152 – Gordo", img: placeholderImg, details: "Bold and complex with long, elegant finish." }
  ],
  Behemoth: [
    { name: "Behemoth 52", price: 40.0, ref: "B52 52x152 – Toro", img: placeholderImg, details: "Powerful yet refined, notes of dark chocolate." },
    { name: "Behemoth 53", price: 46.25, ref: "B53 53x155 – Toro", img: placeholderImg, details: "Deep earthiness with spice and espresso." },
    { name: "Behemoth 54", price: 46.25, ref: "B54 54x160 – Toro", img: placeholderImg, details: "Bold structure with leather and pepper." },
    { name: "Behemoth 56", price: 52.5, ref: "B56 56x165 – Toro", img: placeholderImg, details: "Flagship strength with complex evolution." }
  ],
  Specialty: [
    { name: "Matador", price: 47.5, ref: "MAT 52x156 – Toro", img: placeholderImg, details: "Elegant, aromatic, and perfectly balanced." },
    { name: "Superbia", price: 55.0, ref: "SUP 54x160 – Toro", img: placeholderImg, details: "Luxurious smoke with layered sweetness." },
    { name: "Majesty", price: 57.0, ref: "MAJ 56x165 – Toro", img: placeholderImg, details: "Royal profile with spice and aged wood." },
    { name: "Regalo", price: 77.5, ref: "REG 58x170 – Flagship", img: placeholderImg, details: "The ultimate expression of White Label." }
  ]
};

export default function LuxuryCigarSite() {
  const [selected, setSelected] = useState(null);
  const [verified, setVerified] = useState(false);
  const footerRef = useRef<HTMLDivElement>(null);

  if (!verified) {
    return (
      <div className="fixed inset-0 bg-[#232021] text-[#EFE6D8] flex items-center justify-center z-50">
        <div className="bg-[#2C292A] border border-[#C5A35C] max-w-md p-8 text-center space-y-6">
          <h1 className="text-2xl">Age Verification</h1>
          <p>You must be of legal smoking age to enter this site.</p>
          <button onClick={() => setVerified(true)} className="bg-[#C5A35C] text-black px-6 py-3 rounded">Enter Site</button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#232021] text-[#EFE6D8] font-serif min-h-screen">

      {/* Header */}
      <header className="fixed top-0 w-full z-40 backdrop-blur bg-black/20">
        <nav className="flex justify-between items-center px-10 py-5">
          <img src={logoPlaceholder} alt={BRAND} className="h-12" />
          <div className="space-x-6">
            <a href="#home" className="hover:text-[#5B2CA2]">Home</a>
            <a href="#collection" className="hover:text-[#5B2CA2]">Collection</a>
            <a href="#about" className="hover:text-[#5B2CA2]">About</a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section id="home" className="h-screen relative flex items-center justify-center text-center">
        <img src="https://via.placeholder.com/1200x600?text=Hero+Video" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-[#232021]" />
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="relative z-10 max-w-3xl">
          <h1 className="text-5xl mb-6 text-[#5B2CA2]">{BRAND}</h1>
          <p className="mb-4 text-lg opacity-90">Explore Fine Cigars · Crafted for the Few</p>
          <p className="mb-8 text-md opacity-70 italic">{LOCATION}</p>
          <button className="bg-[#5B2CA2] text-white text-lg px-10 py-6 rounded">Explore the Collection</button>
        </motion.div>
      </section>

      {/* About */}
      <section id="about" className="px-10 py-28 bg-[#2C292A] text-center">
        <h2 className="text-4xl mb-6 text-[#5B2CA2]">Who We Are</h2>
        <p className="max-w-3xl mx-auto opacity-85">
          We are a lifestyle and showcase platform dedicated to fine cigars, craftsmanship, and culture. This website exists to present select cigars, their stories, and their character — not as a store, but as a curated reference for those who appreciate the art behind the leaf. {LOCATION}.
        </p>
      </section>

      {/* Collection */}
      <section id="collection" className="px-10 py-28 space-y-28">
        <h2 className="text-4xl text-center text-[#7E49C7] font-semibold">2025 White Label Collection</h2>
        {Object.entries(products).map(([group, items]) => (
          <div key={group} className="space-y-12">
            <h3 className="text-3xl border-b border-[#5B2CA2] pb-3">{group} Series</h3>
            <div className="grid md:grid-cols-3 gap-10">
              {items.map((p) => (
                <motion.div key={p.name} whileHover={{ y: -6 }} whileInView={{ opacity: 1 }} initial={{ opacity: 0 }} onClick={() => setSelected(p)} className="cursor-pointer">
                  <div className="bg-[#2C292A] border border-[#5B2CA2]/40 overflow-hidden rounded">
                    <div className="p-6 text-center">
                      <img src={p.img} alt={p.name} className="w-full h-64 object-cover rounded" />
                      <h4 className="text-xl mt-2">{p.name}</h4>
                      <p className="text-[#5B2CA2]">${p.price.toFixed(2)}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Our Vision */}
      <section className="px-10 py-28 text-center bg-black/40">
        <h2 className="text-4xl mb-6 text-[#5B2CA2]">Our Vision</h2>
        <p className="max-w-2xl mx-auto opacity-85">
          We believe cigars are best understood through patience, environment, and experience. Every vitola shown here represents tradition, balance, and time — curated to inform, inspire, and elevate appreciation.
        </p>
      </section>

      {/* Footer */}
      <footer ref={footerRef} className="px-10 py-16 border-t border-[#5B2CA2]/40 text-center space-y-4">
        <h3 className="text-2xl text-[#5B2CA2]">Contact</h3>
        <div className="flex items-center justify-center gap-3 text-lg tracking-wide">
          <span className="inline-flex items-center justify-center w-8 h-8 border border-[#5B2CA2] rounded-full">
            <span className="block w-3 h-3 border border-[#5B2CA2] rounded-full" />
          </span>
          <a href="tel:+15551234567" className="hover:text-[#5B2CA2]">+1 (555) 123‑4567</a>
        </div>
        <p className="text-sm opacity-75">Business Hours: Mon–Fri · 10:00 AM – 6:00 PM</p>
        <p className="text-xs opacity-60 italic">For inquiries only</p>
        <p className="text-xs opacity-60">Tobacco products are intended for adults of legal smoking age. Please smoke responsibly.</p>
      </footer>

      {/* Product Side Panel */}
      {selected && (
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed top-0 right-0 h-full w-full md:w-1/3 bg-[#2C292A] z-50 shadow-2xl border-l border-[#5B2CA2]/40 overflow-y-auto"
        >
          <div className="p-8 space-y-6">
            <button onClick={() => setSelected(null)} className="text-sm opacity-70 hover:text-[#5B2CA2]">← Back</button>
            <img src={selected.img} alt={selected.name} className="w-full h-80 object-cover rounded" />
            <h2 className="text-3xl">{selected.name}</h2>
            <p className="text-[#5B2CA2] text-xl">${selected.price.toFixed(2)}</p>
            <p className="opacity-80">{selected.ref}</p>
            <p className="opacity-90">{selected.details}</p>
            <button
              className="w-full bg-[#5B2CA2] text-white text-lg py-4 mt-4 rounded hover:bg-[#4a1f99]"
              onClick={() => {
                setSelected(null);
                footerRef.current?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Purchase
            </button>
          </div>
        </motion.div>
      )}

    </div>
  );
}

