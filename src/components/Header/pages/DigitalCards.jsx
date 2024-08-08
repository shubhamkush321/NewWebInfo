import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import image1 from "../../../assets/asset 8.png";
import image2 from "../../../assets/asset 9.png";
import image3 from "../../../assets/asset 10.png";
import image4 from "../../../assets/asset 11.png";
import image5 from "../../../assets/asset 12.png";
import image6 from "../../../assets/asset 13.png";
import image7 from "../../../assets/asset 14.png";
import image8 from "../../../assets/asset 15.png";
import image9 from "../../../assets/asset 16.png";
import image10 from "../../../assets/asset 17.png";
import image11 from "../../../assets/asset 18.png";
import image12 from "../../../assets/asset 19.png";
import image13 from "../../../assets/asset 20.png";
import image14 from "../../../assets/asset 21.png";
import image15 from "../../../assets/asset 22.png";

const DigitalCards = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Example image URLs and captions
  const images = [
    { img: image1, caption: "Fashion & Style" },
    { img: image2, caption: "IT & Software" },
    { img: image3, caption: "Education" },
    { img: image4, caption: "Healthcare" },
    { img: image5, caption: "Real Estate" },
    { img: image6, caption: "E-commerce" },
    { img: image7, caption: "MAnufacturing" },
    { img: image8, caption: "Education" },
    { img: image9, caption: "Logistics" },
    { img: image10, caption: "Automobile" },
    { img: image11, caption: "Travel" },
    { img: image12, caption: "Interior Designer" },
    { img: image13, caption: "Night Bars & Clubs" },
    { img: image14, caption: "Hotel & Restaurants" },
    { img: image15, caption: "Event & Wedding Planner" },
  ];

  const imagesToShow = 5;
  const totalImages = images.length;
  const maxIndex = Math.max(0, totalImages - imagesToShow);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex(prevIndex =>
        prevIndex === maxIndex ? 0 : prevIndex + imagesToShow
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [maxIndex]);

  const handlePrev = () => {
    setCurrentImageIndex(prevIndex =>
      prevIndex === 0 ? maxIndex : prevIndex - imagesToShow
    );
  };

  const handleNext = () => {
    setCurrentImageIndex(prevIndex =>
      prevIndex === maxIndex ? 0 : prevIndex + imagesToShow
    );
  };

  const displayedImages = images.slice(currentImageIndex, currentImageIndex + imagesToShow);

  return (
    <div className="bg-gray-200 py-16">
      <div className="container mx-auto px-4 bg-white">
        <h2 className=" text-3xl font-bold text-center mb-8">Digital Marketing Services</h2>
        <div className="relative">
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out "
              style={{ transform: `translateX(-${(currentImageIndex / imagesToShow) * 100}%)` }}>
              {images.map((image, index) => (
                <div key={index} className="flex-shrink-0 w-full md:w-1/5 p-2">
                  <img src={image.img} alt={`Service ${index + 1}`} className="w-full h-auto object-cover rounded-lg" />
                  <p className="text-center font-medium mt-2">{image.caption}</p>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-600 hover:text-gray-800"
          >
            <FaArrowLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-600 hover:text-gray-800"
          >
            <FaArrowRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DigitalCards;
