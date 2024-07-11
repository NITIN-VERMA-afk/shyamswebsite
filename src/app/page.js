"use client"
import Image from "next/image";
import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    
        <div className="bg-black text-white">
      
      <motion.div
        className="fixed top-0 left-0 right-0 h-2 bg-yellow-400 transform origin-left"
        style={{ scaleX }}
      />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      >
        <div className="text-center">
          <motion.h1
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-6xl font-bold mb-4"
          >
            JMJ Films
          </motion.h1>
          <motion.p
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl mb-8"
          >
            Capturing Life's Precious Moments
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold"
          >
            View Our Work
          </motion.button>
        </div>
      </motion.section>

      {/* Services Section */}
      <section className="py-20 px-8">
        <h2 className="text-4xl font-bold mb-12 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {['Wedding Videography', 'Corporate Films', 'Music Videos'].map((service, index) => (
            <motion.div
              key={service}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900 p-6 rounded-lg"
            >
              <h3 className="text-2xl font-semibold mb-4">{service}</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 px-8 bg-gray-900">
        <h2 className="text-4xl font-bold mb-12 text-center">Our Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="aspect-video bg-gray-800 rounded-lg overflow-hidden"
            >
              <img src={`/portfolio-${item}.jpg`} alt={`Portfolio item ${item}`} className="w-full h-full object-cover" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-8">
        <h2 className="text-4xl font-bold mb-12 text-center">What Our Clients Say</h2>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-900 p-8 rounded-lg"
          >
            <p className="text-lg mb-4">"JMJ Films captured our wedding day beautifully. The team was professional, creative, and delivered beyond our expectations!"</p>
            <p className="font-semibold">- Sarah & John</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-8 bg-gray-900">
        <h2 className="text-4xl font-bold mb-12 text-center">Get In Touch</h2>
        <div className="max-w-2xl mx-auto">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2">Name</label>
              <input type="text" id="name" className="w-full p-3 bg-black rounded" />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2">Email</label>
              <input type="email" id="email" className="w-full p-3 bg-black rounded" />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2">Message</label>
              <textarea id="message" rows="4" className="w-full p-3 bg-black rounded"></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold"
            >
              Send Message
            </motion.button>
          </form>
        </div>
      </section>

      {/* Scroll to Top Button */}
      {isVisible && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-yellow-400 text-black p-3 rounded-full"
        >
          ↑
        </motion.button>
      )}
    </div>
  );
}
