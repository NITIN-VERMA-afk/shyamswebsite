"use client"
import { motion } from 'framer-motion';

const CreativeServices = () => {
  const services = [
    { name: "Portrait Sessions", description: "Capture your personality in stunning portraits." },
    { name: "Commercial Photography", description: "High-quality images for your business needs." },
    // Add more services
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-black text-white p-8 "
    >
      <h1 className=" text-yellow-400 text-4xl font-bold mb-8 mt-12">Creative Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gray-900 p-6 rounded-lg"
          >
            <h2 className="text-2xl font-bold mb-4">{service.name}</h2>
            <p>{service.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default CreativeServices;