// import React from 'react';
// import { Link } from 'react-router-dom';

// const Banner = () => {
//   return (
//     <div className="cta-section bg-gradient-to-r from-[#CF3B9A] to-[#FA816C] text-white sm:py-18 py-12 px-8 text-center">
//       <h2 className="sm:text-4xl text-2xl font-semibold mb-4">
//         Unlock the Best Services Today!
//       </h2>
//       <p className="sm:text-xl mb-6">
//         Join thousands of satisfied users who are enhancing their experience by using our service review platform.
//       </p>

//       {/* button */}
//       <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
//         <Link
//           to="/register"
//           className="cta-btn bg-yellow-500 text-black px-6 py-3 rounded-full text-lg sm:text-xl font-bold hover:bg-yellow-400 transition-colors w-full sm:w-auto text-center"
//         >
//           Get Started
//         </Link>
//         <a  
         
//           className="cta-btn bg-transparent border-2 border-white text-white px-6 py-3 rounded-full text-lg sm:text-xl font-semibold hover:bg-white hover:text-black transition-colors w-full sm:w-auto text-center" href="https://elfsight.com" target="_blank" rel="noopener noreferrer"
//         >
//           Learn More
//         </a>
//       </div>

//       <div className="testimonials mt-8">
//         <p className="font-medium">
//           "This service helped me find the best providers! - Jane Doe"
//         </p>
//         <p className="font-medium mt-2">
//           "Highly recommended for anyone looking for reliable services! - John Smith"
//         </p>
//       </div>
//     </div>
//   );
// };


// export default Banner;
// _______________________________


import { FaSearch } from 'react-icons/fa';
import bannerImage from '../../assets/banner1.jpg'
import bannerImage2 from '../../assets/bgImg1.jpg';
import { MdLocationPin } from 'react-icons/md';

const Banner = () => {
    return (
        <div
            style={{
                backgroundImage: `linear-gradient(rgba(200, 200, 200, 0.9), rgba(200, 200, 200, 0.9)), url(${bannerImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
            className="min-h-screen flex items-center justify-center text-black px-4 sm:px-8 lg:px-12"
        >
            <div className="max-w-screen-xl mx-auto md:my-12 my-4">

                {/* Banner Section */}
                <div className="flex flex-col lg:flex-row items-center gap-8">

                    {/* Text Section */}
                    <div className="w-full lg:w-1/2 text-center lg:text-left space-y-4">
                        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight">
                            Choose Experts to Complete Your <br />
                            <span className="text-[#F15A29]">Service </span>Done
                        </h2>
                        <p className="text-sm sm:text-base lg:text-lg text-gray-700">
                        We provide modern, secure, and fully customized IT solutions tailored to your business needs. From website development and software solutions to cloud services and technical support — we ensure speed, performance, and reliability in every project.
                        </p>

                        {/* Search Section */}
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                            {/* location */}
                            <button className="btn btn-secondary flex items-center px-4 py-2">
                                <MdLocationPin className="mr-1" /> Location
                            </button>
                            {/* search input */}
                            <div className="relative w-full sm:w-auto">
                                <input
                                    type="text"
                                    placeholder="Search by title..."
                                    className="w-full sm:w-[250px] lg:w-[300px] bg-white/50 backdrop-blur-xl input py-2 px-4 pl-10 rounded-lg border-gray-300 focus:ring-2 focus:ring-gray-500 focus:border-gray-500 shadow-md transition duration-300 text-black placeholder-gray-500 border-none"
                                />
                                <button
                                    className="absolute top-2 right-0 transform -translate-y-1/2 bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition duration-300"
                                >
                                    <FaSearch />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="w-full lg:w-1/2 flex justify-center">
                        <img 
                            className="w-[90%] sm:w-[75%] md:w-[60%] lg:w-[80%] max-w-xs sm:max-w-md lg:max-w-lg h-auto rounded-lg shadow-lg"
                            src={bannerImage2} 
                            alt="Banner"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
