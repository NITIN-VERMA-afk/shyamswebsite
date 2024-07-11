"use client"
import { motion } from 'framer-motion';

const MyStory = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-black text-white p-8 "
    >
      <h1 className=" text-yellow-400 text-4xl font-bold mb-8 mt-12">My Story</h1>
      <div className="max-w-3xl mx-auto">
        <motion.img
          src="/path-to-your-image.jpg"
          alt="Your Name"
          className="w-full h-64 object-cover mb-8 rounded-lg"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        />
        <motion.p 
          className="mb-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Here's where you can write about your journey as a photographer and filmmaker. Share your passion, experiences, and what drives you in your craft.
        </motion.p>
        
      </div>
    </motion.div>
  );
};

export default MyStory;