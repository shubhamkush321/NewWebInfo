import { motion, useAnimation } from "framer-motion";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import Home1 from "../../assets/asset 42.png";
import Home2 from "../../assets/asset 43.jpeg";
import Home3 from "../../assets/asset 44.png";
import React, { useContext, useEffect, useState } from "react";
import { InfoContext } from "../context/InfoContext";

// Define content for each slide
const slides = [
  {
    img: Home1,
    heading: "Focused Leadership",
    paragraphs: [
      "Web Infomatrix is an aced IT Outsourcing company",
      "Providing Business Solutions by combining technical expertise",
      "with Strong business leadership.",
    ],
    textPosition: "right",
  },
  {
    img: Home2,
    heading: "Define Design Build",
    paragraphs: [
      "Web Infomatrix is an aced IT Outsourcing company.",
      "Enabling businesses to get competitive edge by building",
      "scalable & extensible applications.",
    ],
    textPosition: "left",
  },
  {
    img: Home3,
    heading: "Business Outsourcing",
    paragraphs: [
      "Web Infomatrix is an aced IT Outsourcing company.",
      "We unlock business value by applying proven processes methodologies",
      "and business excellence frameworks to significantly reduce costs.",
    ],
    textPosition: "right",
  },
];

const variants = {
  hidden: { x: "100%" },
  visible: { x: "0%" },
  exit: { x: "-100%" },
};

const animationVariants = {
  hiddenLeft: { opacity: 0, x: -100 },
  hiddenRight: { opacity: 0, x: 100 },
  hiddenTop: { opacity: 0, y: -100 },
  visible: { opacity: 1, x: 0, y: 0 },
};

const Home = () => {
  const { infoDetails } = useContext(InfoContext);
  const HomePageTitle = infoDetails?.find(
    (item) => item?.title === "Home Page Title"
  );

  const controls = useAnimation();
  const textControls = useAnimation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [initialLoad, setInitialLoad] = useState(true);
  const slideInterval = 5000; 
  const handleSlideChange = () => {
    controls.start("exit").then(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      controls.start("visible");
    });

    textControls
      .start({
        opacity: 0,
        x: 100,
        transition: { duration: 1, ease: "easeInOut" },
      })
      .then(() => {
        textControls.start({
          opacity: 1,
          x: 0,
          transition: { duration: 1, ease: "easeInOut" },
        });
      });
  };
  useEffect(() => {
    if (initialLoad) {
      setTimeout(() => {
        textControls.start({
          opacity: 1,
          x: 0,
          transition: { duration: 1, ease: "circOut" },
        });
        setInitialLoad(false);
      }, 1000);
    } else {
      const interval = setInterval(handleSlideChange, slideInterval);
      return () => clearInterval(interval);
    }
  }, [initialLoad, controls, textControls]);
  return (
    <LocomotiveScrollProvider options={{ smooth: true }} watch={[]}>
      <div data-scroll-container className="relative overflow-hidden h-screen w-screen">
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            className="absolute top-0 left-0 w-screen h-screen"
            variants={variants}
            initial={index === 0 ? "visible" : "hidden"}
            animate={controls}
            style={{ zIndex: index === currentIndex ? 1 : 0 }}
          >
            <img
              src={slide.img}
              alt={`Home ${index + 1}`}
              className="absolute inset-0 object-cover w-full h-full"
            />
            <motion.div
              initial={{
                opacity: 0,
                x: slide.textPosition === "right" ? "100px" : "-100px",
              }}
              animate={textControls}
              transition={{ duration: 2, ease: "circOut" }}
              className={`absolute ${
                slide.textPosition === "right" ? "right-6" : "left-6"
              } top-1/2 transform -translate-y-1/2 p-6 text-white z-10`}
            >
              <h2 className="text-7xl font-bold mb-4 text-gray-50 -mt-10">{slide.heading}</h2>
              {slide.paragraphs.map((text, i) => (
                <p key={i} className="text-lg mb-2 text-gray-50">
                  {text}
                </p>
              ))}
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                Learn More
              </button>
            </motion.div>
          </motion.div>
        ))}
      </div>
      {HomePageTitle && (
        <div className="lg:p-44 text-gray-800 bg-gray-100 -mt-20">
          <h1 className="text-3xl font-bold mb-6 text-gray-800 lg:text-center uppercase">
            {HomePageTitle.title}
          </h1>
          <hr className="border-gray-500 mb-4" />
          <div className="mb-8">
            <motion.div
              initial="hiddenTop"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              variants={animationVariants}
              className="relative z-10 backdrop-filter rounded-xl p-10"
            >
              <div
                className="mb-6 text-gray-700"
                dangerouslySetInnerHTML={{
                  __html: HomePageTitle.content?.map(section => section.content).join('<br/><br/>') || "",
                }}
              />
            </motion.div>
          </div>
        </div>
      )}

      
    </LocomotiveScrollProvider>
  );
};

export default Home;
