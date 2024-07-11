"use client"
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-black text-white p-8"
    >
      <h1 className=" text-yellow-400 text-4xl font-bold mb-8  mt-12">Contact Us</h1>
      <div className="max-w-2xl mx-auto">
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-2">Name</label>
            <input type="text" id="name" className="w-full p-3 bg-gray-900 rounded" />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2">Email</label>
            <input type="email" id="email" className="w-full p-3 bg-gray-900 rounded" />
          </div>
          <div>
            <label htmlFor="message" className="block mb-2">Message</label>
            <textarea id="message" rows="4" className="w-full p-3 bg-gray-900 rounded"></textarea>
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
    </motion.div>
  );
};

export default Contact;