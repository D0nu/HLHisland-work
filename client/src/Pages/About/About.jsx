import React, { useState, useEffect } from 'react'
import './About.css'
import Properties from '../../Components/Properties/Propertie';


export default function About() {
  const aboutUsImage = './r5.jpg';
  const [slideIndex, setSlideIndex] = useState(0);
  const images = [ './realestate2.png.jpg',  './about2.jpg' , './About.jpg' ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className='about min-h-screen bg-gray-100'>
       {/* Header with image */}
       <div className="relative bg-cover bg-center h-64">
        <img src={aboutUsImage} alt="About Us" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gold opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center flex-col">
          <h1 className="text-black text-4xl font-bold mb-3">About Us</h1>
            <p className="text-lg text-black mb-4 text-justify overflow-hidden max-w-md mx-auto lg:max-w-full lg:text-center lg:px-8 lg:mb-8 line-clamp-3 font-semibold">
              Houston Luxury Homes is a premier real estate company specializing in luxury properties in Houston and surrounding areas. With years of experience and a dedicated team, we strive to provide our clients with exceptional service and unparalleled expertise in the luxury real estate market.
            </p>
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto py-12 px-4">
        <div className="flex flex-wrap items-center justify-center">
          {/* Text content */}
          <div className="w-full lg:w-1/2 p-4 a-content">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Who We Are</h2>
            <p className="text-lg text-gray-700 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor elit eget
              augue ultricies, eu pharetra lacus fermentum. Duis auctor ipsum vitae ipsum
              ultricies dapibus. Vestibulum ac orci ac dui hendrerit lacinia.
            </p>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-700 mb-4">
              Sed euismod leo vel augue ullamcorper, non lacinia libero pellentesque. Curabitur
              pharetra libero non diam bibendum vestibulum. Nulla ultrices, nulla nec sodales
              suscipit, libero risus placerat felis, non bibendum dolor elit eu nisl.
            </p>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Values</h2>
            <ul className="list-disc text-lg text-gray-700 mb-4 pl-6">
              <li>Lorem ipsum dolor sit amet</li>
              <li>Consectetur adipiscing elit</li>
              <li>Sed do eiusmod tempor incididunt</li>
              <li>Ut labore et dolore magna aliqua</li>
            </ul>
          </div>

          {/* Image */}
            <div className="w-800 lg:w-1/2 p-4  s-show">
              {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Slide ${index}`}
                className={`absolute w-800 h-full object-cover transition-opacity duration-3000 ${index === slideIndex ? 'opacity-100' : 'opacity-0'}`}
                style={{ zIndex: images.length - index }}
              />
            ))}          
          </div>
        </div>
      </div>
      <div className="s-properties">
        <Properties />
      </div>     


    </div>
  );
};

