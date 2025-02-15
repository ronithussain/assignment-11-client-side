import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const HomeCard = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/services?limit=6')
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
    }, [])
    return (
        <>
            <div className="w-11/12 mx-auto py-14 ">
                <h2 className='lg:text-5xl text-2xl   mb-2 md:text-3xl font-bold bg-gradient-to-r from-white via-white/70 to-[#1E3E62] text-transparent bg-clip-text text-center'>Featured Services Section</h2>
                <p className=" sm:text-base text-xs w-10/12 mx-auto  text-gray-400 mt-2 mb-8 text-center">
                    Our Featured Services showcase a curated selection of the most popular and highly rated services that we offer. Whether you're looking for expert advice, professional solutions, or cutting-edge technology, these services are designed to meet your needs and exceed your expectations. Explore each service to find the perfect fit for you.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <div
                            key={service._id}
                            className="relative group p-6 bg-[#262626] border border-gray-700 rounded-3xl shadow-2xl transition-all duration-300 hover:scale-[1.03] hover:shadow-blue-600/40"
                        >
                            {/* image section*/}
                            <div className="relative overflow-hidden rounded-2xl">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-56 object-cover rounded-xl group-hover:rotate-1 transition-all duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
                                <span className="absolute top-3 left-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs px-3 py-1 rounded-full uppercase shadow-md">
                                    {service.category}
                                </span>
                            </div>
                            {/* Plan Name */}
                            <h3 className="text-lg font-semibold text-gray-300"></h3>

                            {/* Price */}
                            <div className="mt-2">

                            </div>

                            {/* Description */}
                            <p className="text-gray-400 text-sm mt-3 leading-relaxed">

                            </p>

                            {/* Features */}
                            <div className="mt-4 space-y-2 text-left">
                                <p className="flex items-center text-xl text-gray-300">
                                    — <span className="ml-2 font-semibold">{service.title}</span>
                                </p>
                                <p className="flex items-center text-gray-300">
                                    — <span className="ml-2 font-semibold text-sm">{service.description.slice(0, 30)}</span>
                                </p>
                                <p className="flex items-center text-gray-300">
                                    — <span className="ml-2 font-semibold  text-green-400 drop-shadow-md">${service.price}</span>
                                </p>
                            </div>

                            {/* Button */}
                            <Link
                                to={`/service-details/${service._id}`}
                                className=" mt-3 sm:w-full py-2 font-semibold text-white bg-gradient-to-r from-blue-500 rounded-xl shadow-lg transition-all duration-300 hover:shadow-blue-400/60 active:scale-95 text-center block"
                            >
                                See Details
                            </Link>

                        </div>
                    ))}
                </div>

               
            </div>
        </>
    );
};

export default HomeCard;