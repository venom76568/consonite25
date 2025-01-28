import React from "react";
import { motion } from "framer-motion";
import img from "../assets/image.png"; // Ensure the image path is correct

const Card = () => {
  return (
    <motion.div
      className="relative w-full min-h-screen bg-black flex justify-center items-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      {/* Glowing Starry Background */}
      <motion.div
        className="absolute inset-0 -z-10 z-[15]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        {[...Array(200)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute rounded-full bg-white opacity-60 shadow-xl"
            style={{
              width: `${Math.random() * 3 + 2}px`, // Random size for stars
              height: `${Math.random() * 3 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              boxShadow: `0 0 ${
                Math.random() * 15 + 10
              }px rgba(255, 255, 255, 0.7)`, // Glowing effect
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
              y: [0, Math.random() * 10 - 5, 0],
            }}
            transition={{
              duration: Math.random() * 2 + 2,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>

      {/* Card */}
      <motion.div
        className="relative bg-black rounded-2xl overflow-hidden shadow-xl z-20"
        whileHover={{
          scale: 1.1,
          rotateY: 10,
          rotateX: 5,
          boxShadow: "0 0 20px rgba(255, 0, 150, 1)", // Glowing effect on hover
        }}
        transition={{ duration: 0.5 }}
      >
        {/* Image Section */}
        <div className="relative h-[500px]">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-100" />

          {/* Image with Glow Effect */}
          <motion.img
            src={img}
            alt="Neeraj Shridhar"
            className="w-full h-full object-cover transition-all duration-300"
            initial={{ scale: 1 }}
            whileHover={{
              scale: 1.1,
              boxShadow: "0 0 20px rgba(255, 0, 150, 1)", // Glowing effect on hover
            }}
            transition={{ duration: 0.5 }}
            style={{
              boxShadow: "0 0 10px rgba(255, 255, 255, 0.8)", // Default glow effect
            }}
          />
        </div>

        {/* Content Section */}
        <div className="absolute bottom-0 w-full p-6 bg-gradient-to-t from-black/90 to-transparent text-white">
          <motion.h2
            className="text-4xl font-extrabold text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Neeraj Shridhar
          </motion.h2>
          <motion.p
            className="text-xl text-center mt-2"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Bombay Vikings
          </motion.p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Card;
