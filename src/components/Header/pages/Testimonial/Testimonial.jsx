import React, { useState, useEffect } from 'react';
import newImage1 from '../../../../assets/New folder/asset 27.jpeg';
import newImage2 from '../../../../assets/New folder/asset 28.jpeg';
import newImage3 from '../../../../assets/New folder/asset 29.jpeg';
import newImage4 from '../../../../assets/New folder/asset 30.jpeg';

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Lisa Redfern',
      feedback: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. It is a long established fact that a reader will be distracted by the readable its layout.',
      rating: 5,
      image: newImage1,
    },
    {
      name: 'Cassi',
      feedback: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. It is a long established fact that a reader will be distracted by the readable its layout.',
      rating: 4,
      image: newImage2,
    },
    {
      name: 'Md Nahidul',
      feedback: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. It is a long established fact that a reader will be distracted by the readable its layout.',
      rating: 5,
      image: newImage3,
    },
    {
      name: 'John Doe',
      feedback: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. It is a long established fact that a reader will be distracted by the readable its layout.',
      rating: 5,
      image: newImage4,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [testimonials.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">What Clients Say</h2>
        <div className="relative">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="flex justify-center mb-4">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-24 h-24 rounded-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">{testimonials[currentIndex].name}</h3>
            <p className="text-gray-600 mb-4">{testimonials[currentIndex].feedback}</p>
            <div className="flex justify-center mb-4">
              {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                <span key={i} className="text-yellow-500">&#9733;</span>
              ))}
              {Array.from({ length: 5 - testimonials[currentIndex].rating }).map((_, i) => (
                <span key={i} className="text-gray-300">&#9733;</span>
              ))}
            </div>
            <div className="flex justify-between">
              <button
                onClick={prevSlide}
                className="bg-gray-200 p-2 rounded-full hover:bg-gray-300"
              >
                &#9664;
              </button>
              <button
                onClick={nextSlide}
                className="bg-gray-200 p-2 rounded-full hover:bg-gray-300"
              >
                &#9654;
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
