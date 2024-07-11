"use client"
import { motion } from 'framer-motion';

const WeddingPhotography = () => {
  const photos = [
    { src: "/wedding1.jpg", alt: "Wedding photo 1" },
    { src: "/wedding2.jpg", alt: "Wedding photo 2" },
   
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-black text-white p-8 "
    >
      <h1 className=" text-yellow-400 text-4xl font-bold mb-8 mt-12">Wedding Photography</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {photos.map((photo, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <img src={photo.src} alt={photo.alt} className="w-full h-64 object-cover rounded-lg" />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default WeddingPhotography;