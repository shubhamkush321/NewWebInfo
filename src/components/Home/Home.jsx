import React from "react";
import { motion, useAnimation } from "framer-motion";
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import Home1 from "../../assets/asset 42.png";
import Home2 from "../../assets/asset 43.jpeg";
import Home3 from "../../assets/asset 44.png";
import Home4 from "../../assets/asset 45.jpeg";
import Home5 from "../../assets/asset 46.png";

// Define content for each slide
const slides = [
  {
    img: Home1,
    heading: "Heading 1",
    paragraphs: [
      "This is the first paragraph of text for Home 1.",
      "This is the second paragraph of text for Home 1."
    ],
    textPosition: "right"
  },
  {
    img: Home2,
    heading: "Heading 2",
    paragraphs: [
      "This is the first paragraph of text for Home 2.",
      "This is the second paragraph of text for Home 2."
    ],
    textPosition: "left"
  },
  {
    img: Home3,
    heading: "Heading 3",
    paragraphs: [
      "This is the first paragraph of text for Home 3.",
      "This is the second paragraph of text for Home 3."
    ],
    textPosition: "right"
  },
  {
    img: Home4,
    heading: "Heading 4",
    paragraphs: [
      "This is the first paragraph of text for Home 4.",
      "This is the second paragraph of text for Home 4."
    ],
    textPosition: "left"
  },
  {
    img: Home5,
    heading: "Heading 5",
    paragraphs: [
      "This is the first paragraph of text for Home 5.",
      "This is the second paragraph of text for Home 5."
    ],
    textPosition: "right"
  }
];

const variants = {
  hidden: { x: "100%" },
  visible: { x: "0%" },
  exit: { x: "-100%" }
};

const Home = () => {
  const controls = useAnimation();
  const textControls = useAnimation();
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [initialLoad, setInitialLoad] = React.useState(true);

  React.useEffect(() => {
    if (initialLoad) {
      // Delay the initial text animation
      setTimeout(() => {
        textControls.start({
          opacity: 1,
          x: 0,
          transition: { duration: 1, ease: "circOut" }
        });
        setInitialLoad(false);
      }, 1000); 
    } else {
      const slideInterval = setInterval(() => {
        controls.start("exit").then(() => {
          setCurrentIndex((currentIndex + 1) % slides.length);
          controls.start("visible");
        });
        textControls.start({
          opacity: 0,
          x: 100,
          transition: { duration: 1, ease: "easeInOut" }
        }).then(() => {
          textControls.start({
            opacity: 1,
            x: 0,
            transition: { duration: 1, ease: "easeInOut" }
          });
        });
      }, 5000); // Slide interval duration

      return () => clearInterval(slideInterval);
    }
  }, [controls, textControls, currentIndex, initialLoad]);

  return (
    <LocomotiveScrollProvider
      options={{ smooth: true }} // Locomotive Scroll options
      watch={[]}
    >
      <div
        data-scroll-container
        className="relative overflow-hidden h-screen w-screen"
      >
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
              initial={{ opacity: 0, x: slide.textPosition === "right" ? "100px" : "-100px" }}
              animate={textControls}
              transition={{ duration: 2, ease: "circOut" }} // Use the circOut easing function
              className={`absolute ${slide.textPosition === "right" ? "right-6" : "left-6"} top-1/2 transform -translate-y-1/2 p-6 text-white z-10`}
            >
              <h2 className="text-5xl font-bold mb-4">{slide.heading}</h2>
              {slide.paragraphs.map((text, i) => (
                <p key={i} className="text-lg mb-2">{text}</p>
              ))}
              <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
                Learn More
              </button>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </LocomotiveScrollProvider>
  );
};

export default Home;
