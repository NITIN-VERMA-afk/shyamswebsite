"use client"
import { motion } from 'framer-motion';

const Blogs = () => {
  const blogPosts = [
    { title: "Top 10 Wedding Photography Tips", date: "June 1, 2023", excerpt: "Learn the secrets to capturing perfect wedding photos..." },
    { title: "The Art of Landscape Photography", date: "May 15, 2023", excerpt: "Discover how to take breathtaking landscape photos..." },
    // Add more blog posts
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-black text-white p-8"
    >
      <h1 className=" text-yellow-400 text-4xl font-bold mt-12 mb-8">Blog</h1>
      <div className="max-w-3xl mx-auto">
        {blogPosts.map((post, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="mb-8 p-6 bg-gray-900 rounded-lg"
          >
            <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
            <p className="text-gray-400 mb-4">{post.date}</p>
            <p className="mb-4">{post.excerpt}</p>
            <a href="#" className="text-yellow-400 hover:underline">Read More</a>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Blogs;