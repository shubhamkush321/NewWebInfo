import React, { useState, useEffect, useContext } from "react";
import { InfoContext } from "../../../context/InfoContext";
import Image1 from "../../../../assets/New folder/asset 1.jpeg";
import Image2 from "../../../../assets/New folder/asset 2.jpeg";
import Image3 from "../../../../assets/New folder/asset 3.jpeg";
import DigitalCards from "../Extra/DigitalCards";
import SeoCards from "../Extra/SeoCards";
import Local from "../../../../assets/New folder/asset 4.jpeg";

const images = [Image1, Image2, Image3];

const SearchEngine = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const { infoDetails } = useContext(InfoContext);

  const SearchEngine = infoDetails?.find(
    (item) => item?.items[0].title === "Search Engine"
  );

  // Slider logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <>
      {/* Image Slider */}
      <div className="relative w-full h-[90vh] overflow-hidden">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Content Section */}
      {SearchEngine && (
        <div className="text-gray-800 bg-gray-100">
          <h1 className="text-3xl mb-6 text-gray-800 lg:text-center uppercase p-4">
            Guranteed #1 {SearchEngine?.items[0]?.title} Services Provider
          </h1>
          <hr className="border-gray-500 mb-4 -mt-4" />
          <div className="mb-8">
            <div
              className="mb-6 text-gray-700 lg:p-44 -mt-32"
              dangerouslySetInnerHTML={{
                __html: SearchEngine?.items[0]?.content,
              }}
            />
          </div>
        </div>
      )}

      <div>
        <img src={Local} alt="" className="-mt-32" />
        <div className="lg:p-44 -mt-32">
          <hr className="border-gray-500 mt-10" />
          <SeoCards />
        </div>
        <DigitalCards />
      </div>
    </>
  );
};

export default SearchEngine;
