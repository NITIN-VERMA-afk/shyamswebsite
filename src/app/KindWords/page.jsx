"use client"
import { motion } from 'framer-motion';

const KindWords = () => {
  const testimonials = [
    { text: "Amazing work! Captured our special day perfectly.", author: "John & Jane Doe" },
    { text: "Professional, creative, and a joy to work with.", author: "Sarah Smith" },
    // Add more testimonials
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-black text-white p-8 "
    >
      <h1 className="text-yellow-400 text-4xl font-bold mb-8 mt-12">Kind Words</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gray-900 p-6 rounded-lg"
          >
            <p className="mb-4 italic">"{testimonial.text}"</p>
            <p className="font-bold">- {testimonial.author}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default KindWords;