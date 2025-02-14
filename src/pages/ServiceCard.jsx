import { Link } from "react-router-dom";



const ServiceCard = ({ service }) => {


    const { image, title, description, category, price, _id, review_count } = service;



    return (
        <div>


            <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg">
                {/* Image */}
                <img
                    src={image} 
                    alt={title}
                    className="w-full h-full object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>

                {/* Content */}
                <div className="absolute bottom-0 p-6 text-white w-full">


                    {/* Title */}
                    <h3 className="text-lg font-bold mt-2">{title}</h3>

                    {/* Description */}
                    <p className="text-gray-300 text-sm mt-1">
                        {description.slice(0, 80)}...
                    </p>

                    {/* Total Reviews */}
                    <p className="text-gray-400 text-sm mt-1 mb-2">Total Reviews: {review_count}</p>

                    {/* price */}
                    <span className="bg-yellow-500 text-black text-xs px-2 py-1 rounded font-bold mt-8">
                        Price: ${price}
                    </span>
                    {/* Button */}
                    <Link to={`/service-details/${_id}`}>
                        <button className="mt-4 w-full py-2 bg-red-600 text-white font-semibold rounded-xl shadow-md hover:bg-red-700 transition-all">
                            View Details
                        </button>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default ServiceCard;