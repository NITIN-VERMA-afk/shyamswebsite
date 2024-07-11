"use client"
import { motion } from 'framer-motion';

const MediaCoverage = () => {
  const coverages = [
    { title: "Featured in National Geographic", date: "2023", link: "#" },
    { title: "Interview on Photography Today", date: "2022", link: "#" },
    // Add more media coverages
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-black text-white p-8 "
    >
      <h1 className="text-yellow-400 text-4xl font-bold mb-8 mt-12">Media Coverage</h1>
      <div className="max-w-3xl mx-auto">
        {coverages.map((coverage, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="mb-6 p-4 bg-gray-900 rounded-lg"
          >
            <h2 className="text-2xl font-bold mb-2">{coverage.title}</h2>
            <p className="mb-2">{coverage.date}</p>
            <a href={coverage.link} className="text-yellow-400 hover:underline">Read More</a>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default MediaCoverage;