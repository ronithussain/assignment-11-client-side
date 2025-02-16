import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className="cta-section bg-gradient-to-r from-[#CF3B9A] to-[#FA816C] text-white sm:py-18 py-12 px-8 text-center">
      <h2 className="sm:text-4xl text-2xl font-semibold mb-4">
        Unlock the Best Services Today!
      </h2>
      <p className="sm:text-xl mb-6">
        Join thousands of satisfied users who are enhancing their experience by using our service review platform.
      </p>

      {/* button */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
        <Link
          to="/register"
          className="cta-btn bg-yellow-500 text-black px-6 py-3 rounded-full text-lg sm:text-xl font-bold hover:bg-yellow-400 transition-colors w-full sm:w-auto text-center"
        >
          Get Started
        </Link>
        <a  
         
          className="cta-btn bg-transparent border-2 border-white text-white px-6 py-3 rounded-full text-lg sm:text-xl font-semibold hover:bg-white hover:text-black transition-colors w-full sm:w-auto text-center" href="https://elfsight.com" target="_blank" rel="noopener noreferrer"
        >
          Learn More
        </a>
      </div>

      <div className="testimonials mt-8">
        <p className="font-medium">
          "This service helped me find the best providers! - Jane Doe"
        </p>
        <p className="font-medium mt-2">
          "Highly recommended for anyone looking for reliable services! - John Smith"
        </p>
      </div>
    </div>
  );
};


export default Banner;