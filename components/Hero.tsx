import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-6 relative z-10 text-center"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500">
            Immaculate Nyoni
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Cybersecurity Professional & Backend Engineer specializing in secure system architecture and cryptography
        </p>

        <div className="flex justify-center gap-4">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-full transition-all"
          >
            View Projects
          </motion.button>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white px-8 py-3 rounded-full transition-all"
          >
            Contact Me
          </motion.button>
        </div>
      </motion.div>

      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
    </section>
  );
}
