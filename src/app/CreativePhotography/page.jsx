"use client"
import { motion } from 'framer-motion';

const CreativePhotography = () => {
  const categories = [
    { name: "Portrait", image: "/portrait.jpg" },
    { name: "Landscape", image: "/landscape.jpg" },
    { name: "Abstract", image: "/abstract.jpg" },
    // Add more categories
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-black text-white p-8 "
    >
      <h1 className=" text-yellow-400 text-4xl font-bold mb-8 mt-12">Creative Photography</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="relative overflow-hidden rounded-lg"
          >
            <img src={category.image} alt={category.name} className="w-full h-64 object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h2 className="text-2xl font-bold">{category.name}</h2>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default CreativePhotography;