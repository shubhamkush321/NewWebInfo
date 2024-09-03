import React, { useContext } from "react";
import { InfoContext } from "../../../context/InfoContext";
import DigitalCards from "../Extra/DigitalCards";
import Services from "../Extra/Services";
import { motion } from "framer-motion";

// Define animation variants (if you haven't already)
const animationVariants = {
  hiddenTop: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 }
};

const DigitalMarketing = () => {
  const { infoDetails } = useContext(InfoContext);

  const DigitalMarketing = infoDetails?.find(
    (item) => item?.items[0].title === "Digital Marketing"
  );

  return (
    <>
      {DigitalMarketing && (
        <div className="lg:p-44 text-gray-800 bg-gray-100 -mt-20">
          <h1 className="text-3xl font-bold mb-6 text-gray-800 lg:text-center uppercase">
            {DigitalMarketing?.items[0]?.title}
          </h1>
          <hr className="border-gray-500 mb-4" />
          <div className="mb-8">
            <motion.div
              initial="hiddenTop"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              variants={animationVariants}
              className="relative z-10  backdrop-filter rounded-xl p-10"
            >
              <div
                className="mb-6 text-gray-700"
                dangerouslySetInnerHTML={{
                  __html: DigitalMarketing?.items[0]?.content,
                }}
              />
            </motion.div>
          </div>
        </div>
      )}
      <div>
        <Services />
        <DigitalCards />
      </div>
    </>
  );
};

export default DigitalMarketing;
