import React from 'react';
import { motion } from 'framer-motion'; // Make sure framer-motion is imported
import Icon from "../../../../assets/asset 24.png";
import Icon2 from "../../../../assets/asset 25.png";
import Icon3 from "../../../../assets/asset 26.png";

// Define animation variants if they are not imported from another file
const animationVariants = {
  hiddenTop: { opacity: 0, y: -100 },
  visible: { opacity: 1, y: 0 }
};

const HomeCard = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial="hiddenTop"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        variants={animationVariants}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* First Column */}
          <div className="bg-blue-600 text-white p-8 rounded-lg shadow-lg relative overflow-hidden">
            <img
              src={Icon}
              alt="Icon"
              className="ml-28"
            />
            <div className="relative z-10">
              <div className="flex justify-center mb-4">
                {/* Replace with a real icon library or remove */}
                <i className="fas fa-globe fa-2x"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4">WHAT WE DO?</h3>
              <p className="mb-6">
                We at Web Infomatrix believe that success in this field will come only to those who understand the dynamic model of Web Development and Internet Marketing Services.
              </p>
              <button className="bg-white text-blue-600 font-bold py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300">
                Click here
              </button>
            </div>
          </div>

          {/* Second Column */}
          <div className="bg-black text-white p-8 rounded-lg shadow-lg relative overflow-hidden">
            <img
              src={Icon2}
              alt="Icon"
              className="ml-28"
            />
            <div className="relative z-10">
              <div className="flex justify-center mb-4">
                {/* Replace with a real icon library or remove */}
                <i className="fas fa-user-tie fa-2x"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4">PEOPLE PRACTICE</h3>
              <p className="mb-6">
                We provide opportunities to deserving candidates! Our staff is our asset. From this belief, we derive all our People Management Practices with brilliance.
              </p>
              <button className="bg-white text-black font-bold py-2 px-4 rounded-full hover:bg-gray-200 transition duration-300">
                Click here
              </button>
            </div>
          </div>

          {/* Third Column */}
          <div className="bg-blue-600 text-white p-8 rounded-lg shadow-lg relative overflow-hidden">
            <img
              src={Icon3}
              alt="Icon"
              className="ml-28"
            />
            <div className="relative z-10">
              <div className="flex justify-center mb-4">
                {/* Replace with a real icon library or remove */}
                <i className="fas fa-eye fa-2x"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4">VISION</h3>
              <p className="mb-6">
                We believe that online marketing is one of the best ways to adorn and amplify any business if performed in the right manner. That is why we are here for you!
              </p>
              <button className="bg-white text-blue-600 font-bold py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300">
                Click here
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HomeCard;
