import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Menu, X, ChevronDown, MapPin, 
  Zap, Heart, Leaf, ShieldCheck, 
  Instagram, Facebook, Twitter, ShoppingCart
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-brand-light/90 backdrop-blur-md border-b border-brand-dark/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <div className="w-10 h-10 bg-brand-primary rounded-full flex items-center justify-center text-white font-display font-bold text-xl">
              L
            </div>
            <span className="font-display font-black text-2xl tracking-tight text-brand-dark uppercase">
              Langa <span className="text-brand-primary">Mageu</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#benefits" className="text-brand-dark hover:text-brand-primary font-medium transition-colors">Benefits</a>
            <a href="#flavours" className="text-brand-dark hover:text-brand-primary font-medium transition-colors">Flavours</a>
            <a href="#why-us" className="text-brand-dark hover:text-brand-primary font-medium transition-colors">Our Story</a>
            <a href="#faq" className="text-brand-dark hover:text-brand-primary font-medium transition-colors">FAQ</a>
            <button className="bg-brand-primary hover:bg-orange-700 text-white px-6 py-2.5 rounded-full font-bold transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-brand-primary/30 flex items-center gap-2">
              <MapPin className="w-4 h-4" /> Find a Store
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-dark hover:text-brand-primary p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-brand-light border-b border-brand-dark/10 shadow-xl absolute w-full"
        >
          <div className="px-4 pt-2 pb-6 space-y-2">
            <a href="#benefits" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-brand-dark font-medium hover:bg-brand-secondary/20 rounded-lg">Benefits</a>
            <a href="#flavours" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-brand-dark font-medium hover:bg-brand-secondary/20 rounded-lg">Flavours</a>
            <a href="#why-us" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-brand-dark font-medium hover:bg-brand-secondary/20 rounded-lg">Our Story</a>
            <a href="#faq" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-brand-dark font-medium hover:bg-brand-secondary/20 rounded-lg">FAQ</a>
            <button className="w-full mt-4 bg-brand-primary text-white px-6 py-3 rounded-full font-bold flex items-center justify-center gap-2">
              <MapPin className="w-5 h-5" /> Find a Store
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-secondary/20 rounded-bl-[100px] -z-10 hidden md:block"></div>
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-brand-primary/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <div className="inline-block bg-brand-secondary/30 text-brand-dark px-4 py-1.5 rounded-full font-bold text-sm mb-6 uppercase tracking-wider">
              🇿🇦 Proudly South African
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-black leading-[1.1] mb-6 text-brand-dark">
              The Taste of Home.<br />
              <span className="text-brand-primary">The Energy to Go.</span>
            </h1>
            <p className="text-lg md:text-xl text-brand-dark/80 mb-8 max-w-lg mx-auto md:mx-0">
              Authentic, creamy, and packed with sustained energy. Langa Mageu is brewed to perfection to keep you moving through your busy day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="bg-brand-primary hover:bg-orange-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-transform hover:scale-105 active:scale-95 shadow-xl shadow-brand-primary/30 flex items-center justify-center gap-2">
                <ShoppingCart className="w-5 h-5" /> Buy Now
              </button>
              <button className="bg-white hover:bg-gray-50 text-brand-dark border-2 border-brand-dark/10 px-8 py-4 rounded-full font-bold text-lg transition-transform hover:scale-105 active:scale-95">
                Explore Flavours
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mx-auto w-full max-w-md"
          >
            {/* Abstract background shape for product */}
            <div className="absolute inset-0 bg-brand-secondary rounded-full transform rotate-6 scale-105 -z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=1000&auto=format&fit=crop" 
              alt="Langa Mageu Bottle" 
              className="w-full h-auto rounded-3xl shadow-2xl object-cover aspect-[4/5]"
              referrerPolicy="no-referrer"
            />
            
            {/* Floating badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-100"
            >
              <div className="flex items-center gap-3">
                <div className="bg-brand-green/20 p-2 rounded-full">
                  <Leaf className="w-6 h-6 text-brand-green" />
                </div>
                <div>
                  <p className="font-bold text-sm">100% Vegan</p>
                  <p className="text-xs text-gray-500">Dairy-Free</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Benefits = () => {
  const benefits = [
    { icon: <Zap className="w-8 h-8" />, title: "Sustained Energy", desc: "Slow-release carbohydrates to keep you fueled all day long." },
    { icon: <Heart className="w-8 h-8" />, title: "Authentic Recipe", desc: "Brewed the traditional way for that unmistakable home taste." },
    { icon: <Leaf className="w-8 h-8" />, title: "Dairy-Free", desc: "Naturally fermented and 100% plant-based goodness." },
    { icon: <ShieldCheck className="w-8 h-8" />, title: "Nutrient Rich", desc: "Packed with essential vitamins and minerals for your body." }
  ];

  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-dark mb-4">More Than Just a Drink</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Every sip of Langa Mageu delivers the perfect balance of nutrition, taste, and traditional energy.</p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-brand-light/50 p-8 rounded-3xl border border-brand-dark/5 hover:border-brand-primary/30 transition-colors text-center group"
            >
              <div className="w-16 h-16 mx-auto bg-white rounded-2xl shadow-sm flex items-center justify-center text-brand-primary mb-6 group-hover:scale-110 transition-transform">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Flavours = () => {
  const products = [
    { name: "Original", color: "bg-[#F5E6D3]", textColor: "text-[#8B5A2B]", desc: "The classic, creamy taste of home." },
    { name: "Banana", color: "bg-[#FFF3B0]", textColor: "text-[#9A7B00]", desc: "Sweet, smooth, and full of energy." },
    { name: "Cream Soda", color: "bg-[#D8F3DC]", textColor: "text-[#1B4332]", desc: "A refreshing twist on a local favorite." },
    { name: "Strawberry", color: "bg-[#FFD6D6]", textColor: "text-[#9D0208]", desc: "Fruity, vibrant, and perfectly sweet." }
  ];

  return (
    <section id="flavours" className="py-24 bg-brand-dark text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-display font-black mb-6">Find Your Flavour</h2>
            <p className="text-xl text-white/80">Available in 500ml and 1L cartons. Perfect for a quick breakfast, a midday boost, or sharing with family.</p>
          </div>
          <button className="bg-white text-brand-dark px-8 py-4 rounded-full font-bold hover:bg-brand-secondary transition-colors shrink-0">
            View Full Range
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`${product.color} rounded-[2rem] p-8 relative overflow-hidden group cursor-pointer h-[400px] flex flex-col justify-between`}
            >
              <div className="relative z-10">
                <h3 className={`text-3xl font-display font-black ${product.textColor} mb-2`}>{product.name}</h3>
                <p className={`${product.textColor} opacity-80 font-medium`}>{product.desc}</p>
              </div>
              
              {/* Abstract representation of the drink/bottle */}
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-white/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative z-10 self-center mt-auto">
                <div className="w-32 h-48 bg-white/40 backdrop-blur-sm rounded-t-3xl border-t-4 border-x-4 border-white/50 shadow-2xl flex items-center justify-center">
                  <span className={`font-display font-black text-2xl ${product.textColor} opacity-50 rotate-[-90deg]`}>LANGA</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyUs = () => {
  return (
    <section id="why-us" className="py-24 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-[3rem] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1530648672449-81f6c723e2f1?q=80&w=1000&auto=format&fit=crop" 
                alt="South African Agriculture" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-brand-secondary p-8 rounded-3xl shadow-xl max-w-xs hidden md:block">
              <p className="font-display font-bold text-2xl text-brand-dark mb-2">100% Local</p>
              <p className="text-brand-dark/80 font-medium">Sourced and brewed right here in Mzansi.</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-black text-brand-dark mb-6">Brewed with Respect for Tradition.</h2>
            <div className="space-y-6 text-lg text-gray-600">
              <p>
                Mageu isn't just a drink; it's a part of our heritage. At Langa, we honor the traditional fermentation process that has fueled generations of South Africans.
              </p>
              <p>
                We use only the finest locally sourced maize, ensuring that every carton delivers the thick, creamy texture and slightly tart flavor you know and love. No artificial shortcuts, just authentic energy.
              </p>
              <ul className="space-y-4 mt-8">
                <li className="flex items-center gap-3">
                  <div className="bg-brand-primary/10 p-1 rounded-full text-brand-primary"><ShieldCheck className="w-5 h-5" /></div>
                  <span className="font-bold text-brand-dark">Strict Quality Control</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-brand-primary/10 p-1 rounded-full text-brand-primary"><ShieldCheck className="w-5 h-5" /></div>
                  <span className="font-bold text-brand-dark">Non-GMO Maize</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-brand-primary/10 p-1 rounded-full text-brand-primary"><ShieldCheck className="w-5 h-5" /></div>
                  <span className="font-bold text-brand-dark">Eco-friendly Packaging</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Retailers = () => {
  const retailers = ["Shoprite", "Pick n Pay", "Spar", "Checkers", "Makro", "Boxer"];
  
  return (
    <section className="py-16 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-8">Available at your favorite stores nationwide</p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {retailers.map((store, idx) => (
            <div key={idx} className="font-display font-black text-2xl md:text-3xl text-gray-400 hover:text-brand-primary transition-colors cursor-default">
              {store}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const faqs = [
    { q: "Does Langa Mageu need to be refrigerated?", a: "Unopened cartons can be stored in a cool, dry place. Once opened, please refrigerate and consume within 3 days for the best taste." },
    { q: "Is Mageu suitable for vegans?", a: "Yes! Langa Mageu is 100% plant-based, dairy-free, and suitable for both vegans and vegetarians." },
    { q: "Does it contain alcohol?", a: "No. While Mageu is a fermented drink, our commercial brewing process ensures it is non-alcoholic and safe for the whole family." },
    { q: "Is it gluten-free?", a: "Mageu is made from maize (corn), which is naturally gluten-free. However, it is produced in a facility that may process other grains." }
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-brand-light">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-dark mb-4">Got Questions?</h2>
          <p className="text-lg text-gray-600">Everything you need to know about our products.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md"
            >
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
              >
                <span className="font-bold text-brand-dark text-lg">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-brand-primary transition-transform duration-300 ${openIdx === idx ? 'rotate-180' : ''}`} />
              </button>
              
              <motion.div 
                initial={false}
                animate={{ height: openIdx === idx ? 'auto' : 0, opacity: openIdx === idx ? 1 : 0 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                  {faq.a}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-brand-primary rounded-full flex items-center justify-center text-white font-display font-bold">
                L
              </div>
              <span className="font-display font-black text-2xl tracking-tight uppercase">
                Langa <span className="text-brand-primary">Mageu</span>
              </span>
            </div>
            <p className="text-white/70 mb-6">
              The authentic taste of South Africa. Fueling the nation with traditional, sustained energy.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-primary transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-primary transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-primary transition-colors"><Twitter className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-brand-secondary">Products</h4>
            <ul className="space-y-3 text-white/70">
              <li><a href="#" className="hover:text-white transition-colors">Original Mageu</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Banana Flavour</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cream Soda Flavour</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Strawberry Flavour</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Nutritional Info</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-brand-secondary">Company</h4>
            <ul className="space-y-3 text-white/70">
              <li><a href="#" className="hover:text-white transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Store Locator</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-brand-secondary">Stay Updated</h4>
            <p className="text-white/70 mb-4">Subscribe to get the latest news, promotions, and new flavour drops.</p>
            <form className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-brand-primary"
              />
              <button className="bg-brand-primary hover:bg-orange-700 text-white font-bold py-3 rounded-lg transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
          <p>&copy; {new Date().getFullYear()} Langa Mageu (Pty) Ltd. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-brand-primary selection:text-white scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <Retailers />
        <Benefits />
        <Flavours />
        <WhyUs />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
