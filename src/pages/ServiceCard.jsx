import { Link } from "react-router-dom";



const ServiceCard = ({ service }) => {


    const { image, title, description, category, price, _id } = service;



    return (
        <div>
            <div className=" relative p-5 bg-gradient-to-br from-gray-900 to-gray-800 backdrop-blur-lg rounded-3xl shadow-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-xl">
                {/* সার্ভিস ইমেজ */}
                <div className="relative overflow-hidden rounded-xl">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-56 object-cover rounded-xl transition-transform duration-300 hover:scale-105"
                    />
                    <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs px-3 py-1 rounded-full uppercase shadow-md">
                        {category}
                    </span>
                </div>

                {/* সার্ভিসের বিস্তারিত */}
                <div className="p-4">
                    <h3 className="text-2xl font-semibold mt-3 text-white">{title}</h3>
                    <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                        {description.slice(0, 80)}...
                    </p>

                    {/* প্রাইস ও বাটন */}
                    <div className="flex justify-between items-center mt-6">
                        <span className="text-xl font-bold text-yellow-400">${price}</span>
                        <Link to={`/service-details/${_id}`}>
                            <button className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition-all shadow-md">
                                View Details
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;