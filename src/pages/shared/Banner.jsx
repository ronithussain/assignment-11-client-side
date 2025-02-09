import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className="cta-section bg-gradient-to-r from-[#CF3B9A] to-[#FA816C] text-white py-12 px-8 text-center">
      <h2 className="text-4xl font-semibold mb-4">
        Unlock the Best Services Today!
      </h2>
      <p className="text-xl mb-6">
        Join thousands of satisfied users who are enhancing their experience by using our service review platform.
      </p>
      <div className="cta-buttons flex justify-center space-x-6">
        <Link
          to="/register"
          className="cta-btn bg-yellow-500 text-black px-6 py-3 rounded-full text-xl font-bold hover:bg-yellow-400 transition-colors"
        >
          Get Started
        </Link>
        <Link
          to="/learn-more"
          className="cta-btn bg-transparent border-2 border-white text-white px-6 py-3 rounded-full text-xl font-semibold hover:bg-white hover:text-black transition-colors"
        >
          Learn More
        </Link>
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