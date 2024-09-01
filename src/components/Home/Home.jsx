import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import Home1 from "../../assets/asset 42.png";
import Home2 from "../../assets/asset 43.jpeg";
import Home3 from "../../assets/asset 44.png";
import Home4 from "../../assets/asset 45.jpeg";
import Home5 from "../../assets/asset 46.png";
import slide1 from "../../assets/asset 1.png";
import slide2 from "../../assets/asset 2.png";
import slide3 from "../../assets/asset 3.png";
import slide4 from "../../assets/asset 4.png";
import slide5 from "../../assets/asset 5.png";
import slide6 from "../../assets/asset 6.png";
import Mobile from "../../assets/Mobile.png";
import DigitalCards from "../Header/pages/Extra/DigitalCards";
import HomeCard from "../Header/pages/Extra/HomeCard";
import CountUp from "react-countup";
import Testimonials from "../Header/pages/Extra/Testimonial";

// Define content for each slide
const slides = [
  {
    img: Home1,
    heading: "Heading 1",
    paragraphs: [
      "This is the first paragraph of text for Home 1.",
      "This is the second paragraph of text for Home 1.",
    ],
    textPosition: "right",
  },
  {
    img: Home2,
    heading: "Heading 2",
    paragraphs: [
      "This is the first paragraph of text for Home 2.",
      "This is the second paragraph of text for Home 2.",
    ],
    textPosition: "left",
  },
  {
    img: Home3,
    heading: "Heading 3",
    paragraphs: [
      "This is the first paragraph of text for Home 3.",
      "This is the second paragraph of text for Home 3.",
    ],
    textPosition: "right",
  },
  {
    img: Home4,
    heading: "Heading 4",
    paragraphs: [
      "This is the first paragraph of text for Home 4.",
      "This is the second paragraph of text for Home 4.",
    ],
    textPosition: "left",
  },
  {
    img: Home5,
    heading: "Heading 5",
    paragraphs: [
      "This is the first paragraph of text for Home 5.",
      "This is the second paragraph of text for Home 5.",
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
  const controls = useAnimation();
  const textControls = useAnimation();
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [initialLoad, setInitialLoad] = React.useState(true);

  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: ref2, inView: inView2 } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: ref3, inView: inView3 } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: ref4, inView: inView4 } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  React.useEffect(() => {
    if (initialLoad) {
      // Delay the initial text animation
      setTimeout(() => {
        textControls.start({
          opacity: 1,
          x: 0,
          transition: { duration: 1, ease: "circOut" },
        });
        setInitialLoad(false);
      }, 1000);
    } else {
      const slideInterval = setInterval(() => {
        controls.start("exit").then(() => {
          setCurrentIndex((currentIndex + 1) % slides.length);
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
              initial={{
                opacity: 0,
                x: slide.textPosition === "right" ? "100px" : "-100px",
              }}
              animate={textControls}
              transition={{ duration: 2, ease: "circOut" }} // Use the circOut easing function
              className={`absolute ${
                slide.textPosition === "right" ? "right-6" : "left-6"
              } top-1/2 transform -translate-y-1/2 p-6 text-white z-10`}
            >
              <h2 className="text-5xl font-bold mb-4">{slide.heading}</h2>
              {slide.paragraphs.map((text, i) => (
                <p key={i} className="text-lg mb-2">
                  {text}
                </p>
              ))}
              <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
                Learn More
              </button>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 py-16 text-center">
        <motion.div
          initial="hiddenTop"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          variants={animationVariants}
          className="flex flex-col items-center"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-8">
            PROFESSIONAL DIGITAL{" "}
            <span className="text-blue-600">MARKETING SERVICES</span>
          </h1>
          <p className="text-lg text-gray-600 mb-12">
            Web Infomatrix is a well-established digital marketing agency
            offering a range of services to help businesses excel online.
            Serving a diverse range of industries, we specialize in customized
            digital marketing strategies, including SEO, pay-per-click (PPC)
            advertising, content marketing, and social media optimization (SMO).
            Our expertise also extends to high-quality website design and
            development, catering to both e-commerce and B2B companies. In the
            ever-evolving digital world, it’s essential to partner with a
            reliable internet marketing agency. We are dedicated to being the
            trustworthy partner you need for achieving your digital goals.
          </p>
        </motion.div>
        <div className="grid grid-cols-3 gap-8">
          {/* First Column */}
          <div className="flex flex-col gap-12">
            <motion.div
              initial="hiddenLeft"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              variants={animationVariants}
              className="flex flex-col items-center"
            >
              <img src={slide1} alt="Web Development" className="mb-4" />
              <h2 className="text-xl font-bold mb-2">WEB DEVELOPMENT</h2>
              <p className="text-gray-600">
                Experience superior UX and UI with Web Infomatrix's expert
                website development services.
              </p>
            </motion.div>

            <motion.div
              initial="hiddenLeft"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              variants={animationVariants}
              className="flex flex-col items-center"
            >
              <img src={slide2} alt="SEO" className="mb-4" />
              <h2 className="text-xl font-bold mb-2">SEO</h2>
              <p className="text-gray-600">
                Partner with us for white label SEO services that drive your
                clients to the top of major search engines.
              </p>
            </motion.div>

            <motion.div
              initial="hiddenLeft"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              variants={animationVariants}
              className="flex flex-col items-center"
            >
              <img src={slide3} alt="Ecommerce Solution" className="mb-4" />
              <h2 className="text-xl font-bold mb-2">ECOMMERCE SOLUTION</h2>
              <p className="text-gray-600">
                We specialize in developing ecommerce platforms that prioritize
                user experience and customer conversion.
              </p>
            </motion.div>
          </div>

          {/* Center Column with Mobile Image */}
          <motion.div
            initial="hiddenTop"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            variants={animationVariants}
            className="flex items-center justify-center"
          >
            <img src={Mobile} alt="Mobile Mockup" className="w-full h-auto" />
          </motion.div>

          {/* Third Column */}
          <div className="flex flex-col gap-12">
            <motion.div
              initial="hiddenRight"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              variants={animationVariants}
              className="flex flex-col items-center"
            >
              <img src={slide4} alt="Web Designing" className="mb-4" />
              <h2 className="text-xl font-bold mb-2">WEB DESIGNING</h2>
              <p className="text-gray-600">
                As a Professional Web Design Agency, we specialize in creating
                stunning Web Designs for all businesses.
              </p>
            </motion.div>

            <motion.div
              initial="hiddenRight"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              variants={animationVariants}
              className="flex flex-col items-center"
            >
              <img src={slide5} alt="Graphic Design" className="mb-4" />
              <h2 className="text-xl font-bold mb-2">GRAPHIC DESIGN</h2>
              <p className="text-gray-600">
                Our graphic designers combine innovation and expertise to
                deliver impressive designs.
              </p>
            </motion.div>

            <motion.div
              initial="hiddenRight"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              variants={animationVariants}
              className="flex flex-col items-center"
            >
              <img src={slide6} alt="PPC Advertising" className="mb-4" />
              <h2 className="text-xl font-bold mb-2">PPC ADVERTISING</h2>
              <p className="text-gray-600">
                Maximize your digital presence with our online advertising
                expertise, including PPC services across major platforms.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Digital Cards */}
      <DigitalCards />

      <div className="container mx-auto px-4 py-16 text-center relative">
        <motion.div
          initial="hiddenTop"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          variants={animationVariants}
          className="relative z-10 bg-white  backdrop-filter rounded-xl p-10"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Expert Digital Marketing Services{" "}
            <span className="text-blue-600">To Grow Your Business</span>
          </h1>
          <p className="text-lg text-gray-800 mb-12">
            Web Infomatrix is your trusted partner in digital marketing, with a
            strong reputation for driving success across a wide range of
            industries.
            <br />
            In today’s fast-paced digital landscape, capturing the attention of
            potential customers is more critical than ever. With the rising
            popularity of digital media, effective online marketing campaigns
            are essential. Opting for digital marketing over traditional methods
            not only saves costs but also significantly boosts customer
            engagement and brand visibility. That’s exactly where Web Infomatrix
            excels.
            <br />
            At Web Infomatrix, we blend creativity with cutting-edge techniques
            to propel your business towards its goals. We dive deep into
            understanding your business aspirations to craft bespoke digital
            marketing campaigns that deliver results. From SEO and social media
            optimization (SMO) to stunning website design, robust web
            development, and targeted pay-per-click (PPC) advertising, our
            strategies are designed to maximize your conversion rates and expand
            your customer base.
            <br />
            Our team of digital marketing veterans brings unparalleled knowledge
            and expertise to the table, ensuring that your brand not only meets
            but exceeds its growth targets. We are committed to providing you
            with a 100% return on investment through our meticulously crafted
            digital marketing services.
            <br />
            When you choose Web Infomatrix, your brand is poised to gain a
            global platform, transforming into a household name and expanding
            your reach like never before. Few firms can promise and deliver
            assured results like we do, thanks to our data-driven approach and
            proven success record.
            <br />
            Elevate your business to unprecedented heights with Web Infomatrix.
            Contact us today to discover how our premier online marketing
            services can drive unparalleled success for your brand.
          </p>
          <button className="bg-blue-600 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300">
            Call TO Action
          </button>
        </motion.div>
        <div className="absolute inset-0 bg-white bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-xl"></div>
      </div>

      {/* Home Card */}
      <HomeCard />

      {/* Wants To Talk */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row items-start lg:items-center">
          <motion.div
            ref={ref1}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inView1 ? 1 : 0, y: inView1 ? 0 : 20 }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2 mb-8 lg:mb-0"
          >
            <h2 className="text-3xl font-bold mb-4 text-center lg:text-left">
              WANT TO TALK?
            </h2>
            <p className="text-lg mb-8 text-center lg:text-left">
              Whether you have a question about feature trials, pricing, need a
              demo or anything else related to our services, our team is ready
              to answer all your queries. We would happily answer your questions
              and have a detailed discussion. We also provide 24x7 customer
              support service for our clients.
            </p>
            <div className="text-center lg:text-left">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Get In Touch
              </button>
            </div>
          </motion.div>
          <div className="lg:w-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
              <motion.div
                ref={ref2}
                className="text-center p-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: inView2 ? 1 : 0, y: inView2 ? 0 : 20 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-xl font-bold mb-1">
                  {inView2 && (
                    <CountUp start={1} end={125} duration={2.5} separator="," />
                  )}
                </h3>
                <p className="text-gray-600 text-sm">Projects done</p>
              </motion.div>
              <motion.div
                ref={ref3}
                className="text-center p-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: inView3 ? 1 : 0, y: inView3 ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-xl font-bold mb-1">
                  {inView3 && (
                    <CountUp start={1} end={359} duration={2.5} separator="," />
                  )}
                </h3>
                <p className="text-gray-600 text-sm">Cups of coffee</p>
              </motion.div>
              <motion.div
                ref={ref4}
                className="text-center p-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: inView4 ? 1 : 0, y: inView4 ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h3 className="text-xl font-bold mb-1">
                  {inView4 && (
                    <CountUp start={1} end={55} duration={2.5} separator="," />
                  )}
                </h3>
                <p className="text-gray-600 text-sm">Happy clients</p>
              </motion.div>
              <motion.div
                ref={ref1}
                className="text-center p-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: inView1 ? 1 : 0, y: inView1 ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <h3 className="text-xl font-bold mb-1">
                  {inView1 && (
                    <CountUp start={1} end={25} duration={2.5} separator="," />
                  )}
                </h3>
                <p className="text-gray-600 text-sm">Experience</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <Testimonials />
    </LocomotiveScrollProvider>
  );
};

export default Home;
