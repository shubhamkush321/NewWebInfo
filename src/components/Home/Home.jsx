import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Home.css";  
import image1 from "../../assets/asset 42.png";
import image2 from "../../assets/asset 43.jpeg";
import image3 from "../../assets/asset 44.png";
import image4 from "../../assets/asset 45.jpeg";
import image5 from "../../assets/asset 46.png";

// Array of image and text objects
const slides = [
  {
    image: image1,
    title: "Get Started",
    description: "We are professional.",
    detail: "Web infomatrix is an aced IT outsourcing company."
  },
  {
    image: image2,
    title: "Innovate",
    description: "Transform Your Business.",
    detail: "Our solutions drive innovation and efficiency in your operations."
  },
  {
    image: image3,
    title: "Optimize",
    description: "Maximize Performance.",
    detail: "We help you optimize processes and technologies for better results."
  },
  {
    image: image4,
    title: "Support",
    description: "Reliable Assistance.",
    detail: "Our dedicated support ensures your systems run smoothly and efficiently."
  },
  {
    image: image5,
    title: "Grow",
    description: "Expand Your Horizons.",
    detail: "Leverage our expertise to scale your business and reach new markets."
  }
];

// Header Component
const Header = () => (
  <nav className="bg-gray-100 border-gray-200 p-6 lg:px-6 py-2.5 relative">
    <div className="hidden lg:flex lg:justify-between lg:items-center">
      <div>
        <ul className="flex gap-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block py-1 pr-2 pl-1 duration-200 ${
                  isActive ? "text-black" : "text-gray-700"
                } border-b border-gray-100 lg:hover:bg-transparent lg:border-0 lg:p-0 `
              }
            >
              +91 -9212306116
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block py-1 pr-2 pl-1 duration-200 ${
                  isActive ? "text-black" : "text-gray-700"
                } border-b border-gray-100 lg:hover:bg-transparent lg:border-0 lg:p-0 `
              }
            >
              info@webinfomatrix.com
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex justify-end gap-6">
        <h2 className="text-black mt-2 ">Get Quote</h2>
        <button className="text-black bg-blue-500 border-2 px-2 py-1 rounded-md">Free Website Audit</button>
      </div>
    </div>
    <div className="lg:hidden flex justify-between items-center">
      <div className="text-white flex flex-col gap-2">
        <h1 className="text-lg lg:text-xl font-bold">Heading 2</h1>
        <h2 className="text-sm lg:text-base">Subheading 3</h2>
      </div>
      <div className="flex gap-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `block py-1 pr-2 pl-1 duration-200 ${
              isActive ? "text-white" : "text-gray-700"
            } border-b border-gray-100 lg:hover:bg-transparent lg:border-0 lg:p-0 `
          }
        >
          +91 -9212306116
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `block py-1 pr-2 pl-1 duration-200 ${
              isActive ? "text-white" : "text-gray-700"
            } border-b border-gray-100 lg:hover:bg-transparent lg:border-0 lg:p-0 `
          }
        >
          info@webinfomatrix.com
        </NavLink>
      </div>
    </div>
  </nav>
);

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const { image, title, description, detail } = slides[currentIndex];

  return (
    <div>
      <Header />
      <div className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover transition-opacity duration-1000"
            src={image}
            alt={`Slide ${currentIndex + 1}`}
          />
        </div>
        <div className="relative z-10 flex flex-col justify-center items-center w-full h-full px-4 py-16 text-center sm:px-6 lg:px-8">
          <div className="max-w-xl space-y-8">
            <h2 className="text-4xl font-bold sm:text-5xl">
              {title}
              <span className="block text-2xl mt-2">{description}</span>
            </h2>
            <p className="mt-4 text-lg sm:text-xl">{detail}</p>
            <Link
              className="inline-flex text-white items-center px-6 py-3 font-medium bg-blue-700 rounded-lg hover:opacity-75"
              to="/"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
